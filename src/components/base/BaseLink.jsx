import { Link, Typography } from '@mui/material';

export const BaseLink = ({ path, label, setCurrentPath, currentPath, isGreenHeader = false }) => {
    const linkColor = isGreenHeader ? 'var(--white)' : 'var(--black)';
    const activeLink = path === currentPath ? 'var(--white)': 'var(--green)'

    return (
        <Link
            href={path}
            onClick={() => setCurrentPath(path)}
            sx={{
                transition: 'all 0.3s',
                textDecoration: isGreenHeader ?'underline': 'none',
                textDecorationColor: activeLink,
                '&:hover': {
                    textDecorationColor: 'var(--white)'
                }
        }}
        >
            <Typography sx={{ color: linkColor, fontSize: { sm: 14, md: 16 } }}>{label}</Typography>
        </Link>
    );
};
