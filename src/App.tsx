import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Posts from './pages/Posts'

import { useAppSelector } from './store'
import { getTheme } from './theme'

export default function App() {
  const mode = useAppSelector((s) => s.theme.mode)
  const theme = React.useMemo(() => getTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container
        sx={{
          minHeight: 'calc(100vh - 160px)',
          px: { xs: 2, sm: 4 },
          py: { xs: 3, md: 6 },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
