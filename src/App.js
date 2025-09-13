import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Posts from './pages/Posts';
import { useAppSelector } from './store';
import { getTheme } from './theme';
export default function App() {
    const mode = useAppSelector((s) => s.theme.mode);
    const theme = React.useMemo(() => getTheme(mode), [mode]);
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(Header, {}), _jsx(Container, { sx: {
                    minHeight: 'calc(100vh - 160px)',
                    px: { xs: 2, sm: 4 },
                    py: { xs: 3, md: 6 },
                }, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/gallery", element: _jsx(Gallery, {}) }), _jsx(Route, { path: "/posts", element: _jsx(Posts, {}) })] }) }), _jsx(Footer, {})] }));
}
