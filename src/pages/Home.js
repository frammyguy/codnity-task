import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
export default function Home() {
    const tiles = [
        {
            title: 'Gallery',
            desc: 'Photos from Picsum — without API key.',
            to: '/gallery',
            img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
        },
        {
            title: 'Posts',
            desc: 'Text from JSONPlaceholder.',
            to: '/posts',
            img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
        },
    ];
    return (_jsxs(Box, { children: [_jsxs(Box, { sx: {
                    minHeight: { xs: '60vh', md: '70vh' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    mb: 6,
                }, children: [_jsx(Typography, { variant: "h1", fontWeight: 900, sx: {
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem' },
                            lineHeight: 1.2,
                        }, gutterBottom: true, children: "Codnity" }), _jsx(Typography, { variant: "h6", color: "text.secondary", sx: {
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                            minHeight: '2em',
                        }, children: _jsx(ReactTyped, { strings: [
                                'Welcome to Codnity',
                                'Create. Learn. Grow.',
                                'Your journey starts here',
                            ], typeSpeed: 60, backSpeed: 40, backDelay: 1500, loop: true }) })] }), _jsx(Box, { sx: {
                    display: 'grid',
                    gap: 3,
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                }, children: tiles.map((t) => (_jsxs(Card, { sx: {
                        borderRadius: 3,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform .2s, box-shadow .2s',
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: 6, cursor: 'pointer' },
                    }, children: [_jsx(CardMedia, { image: t.img, sx: { height: 200, backgroundSize: 'cover' } }), _jsxs(CardContent, { sx: { flexGrow: 1 }, children: [_jsx(Typography, { variant: "h6", fontWeight: 800, gutterBottom: true, children: t.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: t.desc }), _jsx(Button, { component: RouterLink, to: t.to, variant: "contained", children: "Open" })] })] }, t.title))) })] }));
}
