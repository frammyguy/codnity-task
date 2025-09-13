import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import { fetchPosts } from '../services/jsonPlaceholder';
export default function Posts() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const res = await fetchPosts(12);
                if (!ignore)
                    setData(res);
            }
            catch (e) {
                setError(e?.message || 'Не удалось загрузить посты');
            }
            finally {
                if (!ignore)
                    setLoading(false);
            }
        })();
        return () => {
            ignore = true;
        };
    }, []);
    if (error)
        return _jsx(Alert, { severity: "error", children: error });
    const items = loading ? Array.from({ length: 8 }) : data;
    return (_jsx(Box, { sx: {
            display: 'grid',
            gap: 3,
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 6 },
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        }, children: items.map((p, idx) => (_jsx(Card, { sx: {
                borderRadius: 3,
                transition: 'transform .2s, box-shadow .2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
            }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", fontWeight: 800, gutterBottom: true, children: loading ? _jsx(Skeleton, { width: "70%" }) : p.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: loading ? (_jsxs(_Fragment, { children: [_jsx(Skeleton, {}), _jsx(Skeleton, { width: "90%" }), _jsx(Skeleton, { width: "80%" })] })) : (p.body) })] }) }, p?.id ?? idx))) }));
}
