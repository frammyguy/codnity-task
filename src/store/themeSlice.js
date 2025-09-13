import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mode: localStorage.getItem('mui-mode') || 'light',
};
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem('mui-mode', state.mode);
        },
    },
});
export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
