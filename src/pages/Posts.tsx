import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Alert from '@mui/material/Alert'
import { fetchPosts } from '../services/jsonPlaceholder'

export default function Posts() {
  const [data, setData] = React.useState<
    Array<{ id: number; title: string; body: string }>
  >([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let ignore = false
    ;(async () => {
      try {
        const res = await fetchPosts(12)
        if (!ignore) setData(res)
      } catch (e: any) {
        setError(e?.message || 'Не удалось загрузить посты')
      } finally {
        if (!ignore) setLoading(false)
      }
    })()
    return () => {
      ignore = true
    }
  }, [])

  if (error) return <Alert severity="error">{error}</Alert>

  const items = loading ? Array.from({ length: 8 }) : data

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 6 },
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      }}
    >
      {items.map((p: any, idx: number) => (
        <Card
          key={p?.id ?? idx}
          sx={{
            borderRadius: 3,
            transition: 'transform .2s, box-shadow .2s',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {loading ? <Skeleton width="70%" /> : p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {loading ? (
                <>
                  <Skeleton />
                  <Skeleton width="90%" />
                  <Skeleton width="80%" />
                </>
              ) : (
                p.body
              )}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
