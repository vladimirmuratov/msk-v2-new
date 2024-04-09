import {Box, Typography} from '@mui/material'

export const BasePartnerCard = ({logo, label, address, license}) => {
    return(
        <Box sx={{
            border: '1px solid var(--green)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <img src={logo} alt="logo" style={{width: '100px'}}/>
            <Typography sx={{fontSize: {xs: '12px', sm: '14px', md: '16px'}, lineHeight: 1.3, marginBottom: '3px'}}>{label}</Typography>
            <Typography sx={{fontSize: {xs: '10px', sm: '10px', md: '10px'}, color: 'var(--gray)'}}>{address}</Typography>
            <Typography sx={{fontSize: {xs: '10px', sm: '10px', md: '10px'}, color: 'var(--gray)'}}>{license}</Typography>
        </Box>
    )
}
