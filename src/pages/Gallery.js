import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import { fetchPicsum } from '../services/picsum';
export default function Gallery() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const res = await fetchPicsum(12);
                if (!ignore)
                    setData(res);
            }
            catch (e) {
                setError(e?.message || 'Не удалось загрузить изображения');
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
    const items = loading ? Array.from({ length: 9 }) : data;
    return (_jsx(Box, { sx: {
            display: 'grid',
            gap: 3,
            px: { xs: 2, sm: 4 },
            py: { xs: 3, sm: 6 },
            gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
            },
        }, children: items.map((item, idx) => (_jsxs(Card, { elevation: 3, sx: {
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .2s, box-shadow .2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
            }, children: [loading ? (_jsx(Skeleton, { variant: "rectangular", height: 220 })) : (_jsx(CardMedia, { image: item.download_url, sx: {
                        height: { xs: 200, sm: 240 },
                        backgroundSize: 'cover',
                    } })), _jsxs(CardContent, { sx: { flexGrow: 1, textAlign: { xs: 'center', sm: 'left' } }, children: [_jsx(Typography, { variant: "h6", fontWeight: 800, gutterBottom: true, children: loading ? _jsx(Skeleton, { width: "60%" }) : item.author }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: loading ? _jsx(Skeleton, { width: "80%" }) : 'Красивое фото с Picsum' })] })] }, item?.id ?? idx))) }));
}
