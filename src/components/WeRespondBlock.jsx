import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WeRespondBlock = () => {
    return (
        <Box sx={{
            scrollMarginTop: {xs: '120px', sm: '50px'},
            paddingX: {xs: '10px', lg: 0},
            paddingY: {xs: '25px', sm: '50px'},
            color: 'var(--black)'
        }}>

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>
                Что включает наше предложение:
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Непрерывное обслуживание: круглосуточная госпитализация по предварительному плану</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>
                    Срочное медицинское вмешательство без задержек
                </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Госпитализация вне системы ОМС (обязательного страхования)</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Возможности для жителей из всех регионов: трансфер пациентов между учреждениями</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Доступ к лучшим клиникам страны: федеральные и специализированные медицинские центры</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Уникальные условия: опыт работы с тяжелыми случаями заболеваний</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Исключительные услуги: личная патронажная поддержка на всех этапах лечения</Typography>
            </Box>
        </Box>
    )
}
