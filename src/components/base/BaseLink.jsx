import { Typography } from '@mui/material';
import Link from 'next/link';

export const BaseLink = ({ path, label, setCurrentPath, currentPath }) => {
    const linkColor = path === currentPath ? 'var(--green)' : 'var(--black)';

    return (
        <Link href={path} onClick={() => setCurrentPath(path)}>
            <Typography sx={{ color: linkColor, fontSize: { sm: 14, md: 16 } }}>{label}</Typography>
        </Link>
    );
};
