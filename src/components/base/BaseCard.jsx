import {Link, Typography} from '@mui/material'

export const BaseCard = ({label, icon, path, bgcolor}) => {
    return (
        <Link
            href={path}
            underline="none"
            sx={{
                '&:hover': {transform: 'scale(105%)', zIndex: 1},
                transition: '0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '35px',
                width: {xs: '100%', sm: '25%'},
                aspectRatio: 1,
                backgroundColor: bgcolor
            }}>
            <img src={icon} alt="icon" style={{width: '50px', height: '50px'}}/>
            <Typography sx={{
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: {xs: 18, sm: 16, md: 18},
                fontWeight: 600,
                color: '#fff'
            }}>{label}</Typography>
        </Link>
    )
}
