import {Box, Link, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const ContactBanner = ({isMobile = false}) => {
    const bgColor = isMobile ? 'var(--white)' : 'var(--green)'
    const color = isMobile ? 'var(--black)' : 'var(--white)'

    return(
        <Box sx={{
            padding: '8px 32px',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--black)',
            backgroundColor: bgColor
        }}>
            <Typography sx={{color: color, fontSize: {xs: 12, sm: 14, md: 16}}}>г. Москва, Мичуринский пр-т , д. 6</Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Link
                    href={`tel:${phoneNumber}`}
                    sx={{color: 'var(--red)', fontSize: {xs: 12, sm: 14, md: 16}, fontWeight: 500, textDecorationColor: 'var(--red)'}}>{phoneNumber}</Link>
                <Typography sx={{color: color}}>&nbsp;|&nbsp;</Typography>
                <Typography sx={{color: color, fontSize: {xs: 12, sm: 14, md: 16}}}>Круглосуточно 24/7</Typography>
            </Box>
        </Box>
    )
}
