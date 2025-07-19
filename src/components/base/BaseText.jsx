import { Typography } from '@mui/material';
import { memo } from 'react';

export const BaseText = memo(({ children, style = {}, component = 'p' }) => {
    return (
        <Typography
            component={component}
            sx={{
                color: 'var(--blue)',
                fontSize: { xs: 20, sm: 22 },
                fontWeight: 400,
                display: 'inline',
                ...style
            }}
        >
            {children}
        </Typography>
    );
});
