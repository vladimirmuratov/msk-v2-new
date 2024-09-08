import {Box, Link, Typography} from '@mui/material'
import {email, phoneNumber} from '@/config'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import SocialBlock from '@/components/SocialBlock'

export const ContactsBlock = () => {
    return (
        <Box
            component="section"
            id="contact"
            sx={{
                scrollMarginTop: {xs: '120px', sm: '50px'},
                paddingX: {xs: '10px', lg: 0},
                paddingY: {xs: '25px', sm: '50px'},
                color: 'var(--black)'
            }}
        >
            <Typography variant="h4" sx={{
                marginBottom: '20px',
                fontSize: {xs: '28px', sm: '34px'},
                fontWeight: 500
            }}>Контакты</Typography>

            <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', sm: '1fr 2fr'}, gap: {xs: '10px', sm: 0}}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <MapOutlinedIcon sx={{color: 'var(--green)'}}/>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>г. Москва, Мичуринский пр-т
                            д.6</Typography>
                    </Box>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <LocalPhoneOutlinedIcon sx={{color: 'var(--green)'}}/>
                        <Link href={`tel:${phoneNumber}`} sx={{fontSize: {xs: '14px', sm: '16px'}}}>{phoneNumber}</Link>
                    </Box>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <AlternateEmailIcon sx={{color: 'var(--green)'}}/>
                        <Link href={`mailto:${email}`} sx={{fontSize: {xs: '14px', sm: '16px'}}}>{email}</Link>
                    </Box>
                    <Box sx={{paddingLeft: '34px'}}>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>ООО "МСК"</Typography>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>ИНН: 9725116009</Typography>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>КПП: 772501001</Typography>
                        <Typography sx={{fontSize: {xs: '14px', sm: '16px'}}}>ОГРН: 1237700147343</Typography>
                    </Box>

                    <SocialBlock className="banner-social-mobile"/>

                </Box>
                <Box>
                    <iframe
                        className="map"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A604ee8345ca097d664aa1c7764529b62cb0469a88360ead0ce5d5df219788165&amp;source=constructor"
                        frameBorder="0"></iframe>
                </Box>
            </Box>
        </Box>
    )
}
