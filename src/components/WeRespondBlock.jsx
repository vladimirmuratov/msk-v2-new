import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box sx={{
            scrollMarginTop: {xs: '120px', sm: '50px'},
            paddingX: '32px',
            paddingY: {xs: '25px', sm: '50px'},
            color: 'var(--black)'
        }}>

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>Мы отвечаем
                за:</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Оптимальный выбор клиники</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Экспертный контроль качества и стоимости
                    лечения</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Врачебное сопровождение</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Комплексный подход</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Юридическую поддержку</Typography>
            </Box>
        </Box>
    )
}
