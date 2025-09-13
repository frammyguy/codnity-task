import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

export const getTheme = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: { main: mode === 'light' ? '#0ea5e9' : '#7dd3fc' },
      secondary: { main: '#8b5cf6' },
      background: {
        default: mode === 'light' ? '#d4d4d4ff' : '#0b1020',
        paper: mode === 'light' ? '#d4d4d4ff' : '#0f1529',
      },
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    },
    components: {
      MuiContainer: {
        defaultProps: { maxWidth: 'lg' },
      },
      MuiCard: {
        styleOverrides: { root: { borderRadius: 20, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' } },
      },
      MuiAppBar: {
        styleOverrides: {
          root: { backdropFilter: 'blur(10px)' }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 14, textTransform: 'none', fontWeight: 600 }
        }
      }
    },
  })
  theme = responsiveFontSizes(theme)
  return theme
}

