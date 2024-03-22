import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                borderTop: '1px solid var(--green)',
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: '32px',
                paddingY: '20px'
            }}>
            <Typography
                sx={{color: 'var(--green)', fontSize: '20px', fontWeight: 600, letterSpacing: 2}}>МСК</Typography>
            <Box sx={{
                color: 'var(--green)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: {xs: 'flex-start', sm: 'flex-end'}
            }}>
                <Typography sx={{fontSize: '14px'}}>г. Москва, Мичуринский пр-т, д. 6</Typography>
                <Typography sx={{fontSize: '14px'}}>{phoneNumber}</Typography>
            </Box>
        </Box>
    )
}
