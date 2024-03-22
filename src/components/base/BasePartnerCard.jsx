import {Box, Typography} from '@mui/material'

export const BasePartnerCard = ({logo, label}) => {
    return(
        <Box sx={{
            border: '1px solid var(--green)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <img src={logo} alt="logo" style={{width: '100px'}}/>
            <Typography sx={{fontSize: {xs: '12px', sm: '14px', md: '16px'}}}>{label}</Typography>
        </Box>
    )
}
