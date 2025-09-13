import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Alert from '@mui/material/Alert'
import { fetchPicsum } from '../services/picsum'

export default function Gallery() {
  const [data, setData] = React.useState<
    Array<{ id: string; download_url: string; author: string }>
  >([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let ignore = false
    ;(async () => {
      try {
        const res = await fetchPicsum(12)
        if (!ignore) setData(res)
      } catch (e: any) {
        setError(e?.message || 'Не удалось загрузить изображения')
      } finally {
        if (!ignore) setLoading(false)
      }
    })()
    return () => {
      ignore = true
    }
  }, [])

  if (error) return <Alert severity="error">{error}</Alert>

  const items = loading ? Array.from({ length: 9 }) : data

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 6 },
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr',
        },
      }}
    >
      {items.map((item: any, idx: number) => (
        <Card
          key={item?.id ?? idx}
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform .2s, box-shadow .2s',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" height={220} />
          ) : (
            <CardMedia
              image={item.download_url}
              sx={{
                height: { xs: 200, sm: 240 },
                backgroundSize: 'cover',
              }}
            />
          )}
          <CardContent sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" fontWeight={800} gutterBottom>
              {loading ? <Skeleton width="60%" /> : item.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {loading ? <Skeleton width="80%" /> : 'Красивое фото с Picsum'}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
