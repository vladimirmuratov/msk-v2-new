import { Link, Typography } from '@mui/material';

export const BaseLink = ({ path, label, setCurrentPath, currentPath, isColorHeader = false }) => {
    const linkColor = isColorHeader ? 'var(--white)' : 'var(--main-color)';
    const isActiveLink = path === currentPath;

    return (
        <Link
            href={path}
            onClick={() => setCurrentPath(path)}
            sx={{
                textDecoration: 'none',
            }}
        >
            <Typography
                sx={{
                    color: isActiveLink ? 'var(--red)' : linkColor,
                    fontSize: { sm: 14, md: 16 },
                    transition: 'all 0.3s',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        fontWeight: 500
                    }
                }}
            >
                {label}
            </Typography>
        </Link>
    );
};
