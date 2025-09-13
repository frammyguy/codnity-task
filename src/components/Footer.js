import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
export default function Footer() {
    return (_jsx(Box, { component: "footer", sx: { borderTop: 1, borderColor: 'divider', mt: 6, bgcolor: 'background.paper' }, children: _jsx(Container, { sx: { py: { xs: 3, md: 4 } }, children: _jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", spacing: 2, children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["\u00A9 ", new Date().getFullYear(), " Codnity Demo"] }), _jsxs(Stack, { direction: "row", spacing: 1.5, children: [_jsx(IconButton, { component: "a", href: "https://github.com/", target: "_blank", rel: "noreferrer", "aria-label": "GitHub", children: _jsx(GitHub, {}) }), _jsx(IconButton, { component: "a", href: "https://www.linkedin.com/", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", children: _jsx(LinkedIn, {}) }), _jsx(IconButton, { component: "a", href: "https://twitter.com/", target: "_blank", rel: "noreferrer", "aria-label": "Twitter", children: _jsx(Twitter, {}) })] })] }) }) }));
}
