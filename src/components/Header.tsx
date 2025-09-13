import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store'
import { toggleMode } from '../store/themeSlice'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/posts', label: 'Posts' },
]

export default function Header() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((s) => s.theme.mode)
  const { pathname } = useLocation()

  return (
    <AppBar position="sticky" color="transparent" enableColorOnDark sx={{ boxShadow: 'none', borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar sx={{ gap: 2, minHeight: 72 }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ fontWeight: 800, textDecoration: 'none', color: 'inherit', mr: 1 }}
        >
          Codnity
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }} alignItems="center">
          {links.map((l) => (
            <Button
              key={l.to}
              component={RouterLink}
              to={l.to}
              size="small"
              color={pathname === l.to ? 'secondary' : 'inherit'}
              sx={{ fontWeight: 600 }}
            >
              {l.label}
            </Button>
          ))}
          <IconButton aria-label="toggle theme" onClick={() => dispatch(toggleMode())}>
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}