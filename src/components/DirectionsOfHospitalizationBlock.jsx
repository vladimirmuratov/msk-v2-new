import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const DirectionsOfHospitalizationBlock = () => {
    return (
        <Box id='directions' sx={{scrollMarginTop: {xs: '120px', sm: '50px'}, paddingX: '32px', paddingY: {xs: '25px', sm: '50px'}, color: 'var(--black)'}}>

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}}}>Направления госпитализации:</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Абдоминальная хирургия</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Гинекология</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Лор и челюстно-лицевая
                    хирургия</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Нейрохирургия</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Онкология</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Офтальмохирургия</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Травматология и ортопедия</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Урология</Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Кардиология</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Неврология</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Терапия</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Реабилитация</Typography>
            </Box>
        </Box>
    )
}
