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
                     backgroundColor: 'var(--main-color)',
                     paddingY: '8px',
                     paddingX: '12px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between'
                 }}>
                <Link href="/">
                    <img className="logo" src="/images/logo/logo-bg-blue.png" alt="logo"/>
                </Link>

                {/*<Link
                    href={`tel:${phoneNumber}`}
                    sx={{
                        color: 'var(--white)',
                        textDecoration: 'underline',
                        textDecorationColor: 'var(--white)'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600
                        }}
                    >{phoneNumber}</Typography>
                </Link>*/}

                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon sx={{color: '#fff'}}/>
                </IconButton>

            </Box>

        </Box>
    )
}
