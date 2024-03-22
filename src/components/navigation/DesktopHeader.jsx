import {Box, IconButton, Typography} from '@mui/material'
import {links} from '@/config'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import {ContactBanner} from '@/components/ContactBanner'

export const DesktopHeader = () => {
    return (
        <Box sx={{position: 'relative', zIndex: 1}}>

            <ContactBanner/>

            <Box component="header"
                 sx={{
                     paddingY: '12px',
                     paddingX: {xs: '24px', sm: '32px'},
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between'
                 }}>
                <Link href="/">
                    <img className="logo" src="/images/logo.png" alt="logo"/>
                </Link>
                <Box component="nav" sx={{display: {xs: 'none', sm: 'flex'}, gap: {sm: '5px', md: '15px'}}}>
                    {links.map((link) => (
                        <Link key={link.id} href={link.path}>
                            <Typography sx={{fontSize: {sm: 14, md: 16}}}>{link.label}</Typography>
                        </Link>
                    ))}
                </Box>
                <IconButton sx={{visibility: 'hidden'}}>
                    <MenuIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}
