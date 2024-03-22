import {Box, Typography} from '@mui/material'

export const TextBlock = ({text}) => {
    return (
        <Box sx={{
            backgroundColor: 'var(--green)',
            marginY: {xs: '25px', sm: '50px'},
            paddingX: '32px',
            paddingY: '32px'
        }}>
            <Typography sx={{fontSize: '22px', color: '#fff', whiteSpace: 'pre-wrap'}}>{text}</Typography>
        </Box>
    )
}
