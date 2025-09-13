import { createSlice } from '@reduxjs/toolkit'
import type { PaletteMode } from '@mui/material'

export interface ThemeState {
  mode: PaletteMode
}

const initialState: ThemeState = {
  mode: (localStorage.getItem('mui-mode') as PaletteMode) || 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('mui-mode', state.mode)
    },
  },
})

export const { toggleMode } = themeSlice.actions
export default themeSlice.reducer
