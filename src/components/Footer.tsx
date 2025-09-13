import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', mt: 6, bgcolor: 'background.paper' }}>
      <Container sx={{ py: { xs: 3, md: 4 } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Codnity Demo
          </Typography>
          <Stack direction="row" spacing={1.5}>
            <IconButton component="a" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}