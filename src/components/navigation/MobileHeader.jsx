import {Box, IconButton, Link, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {ContactBanner} from '@/components/ContactBanner'
import {phoneNumber} from '@/config'

export const MobileHeader = ({toggleDrawer, isMobile}) => {
    return (
        <Box sx={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1}}>

            <ContactBanner isMobile={isMobile}/>

            <Box component="header"
                 sx={{
                     backgroundColor: 'var(--green)',
                     paddingY: '8px',
                     paddingX: '12px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between'
                 }}>
                <Link href="/">
                    <img className="logo" src="/images/logo-white.png" alt="logo"/>
                </Link>

                <Link
                    href={`tel:${phoneNumber}`}
                    sx={{
                        textDecoration: 'underline',
                        textDecorationColor: 'var(--red)'
                    }}
                >
                    <Typography
                        sx={{
                            color: 'var(--red)',
                            fontWeight: 600
                        }}
                    >{phoneNumber}</Typography>
                </Link>

                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon sx={{color: '#fff'}}/>
                </IconButton>

            </Box>

        </Box>
    )
}
