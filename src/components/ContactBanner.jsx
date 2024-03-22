import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const ContactBanner = () => {
    return(
        <Box sx={{
            padding: '8px 32px',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--black)',
            backgroundColor: '#fff'
        }}>
            <Typography sx={{fontSize: {xs: 12, sm: 14, md: 16}}}>г. Москва, Мичуринский пр-т , д. 6</Typography>
            <Box sx={{display: 'flex'}}>
                <Typography
                    sx={{color: 'var(--green)', fontSize: {xs: 12, sm: 14, md: 16}}}>{phoneNumber}</Typography>
                &nbsp;|&nbsp;
                <Typography sx={{fontSize: {xs: 12, sm: 14, md: 16}}}>Круглосуточно 24/7</Typography>
            </Box>
        </Box>
    )
}
