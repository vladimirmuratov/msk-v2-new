import {Box, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const WhatWeOfferBlock = () => {
    return (
        <Box sx={{
            scrollMarginTop: {xs: '120px', sm: '50px'},
            paddingX: '32px',
            paddingY: {xs: '25px', sm: '50px'},
            color: 'var(--black)'
        }}>

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}}}>Что мы
                предлагаем:</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Плановая платная госпитализация - на
                    связи 24/7</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Экстренная платная
                    госпитализация</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Платная госпитализация без полиса
                    ОМС</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Платная госпитализация из
                    регионов</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Перевод пациента из одной больницы в
                    другую</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Платная госпитализация в федеральные и
                    ведомственные мед.учреждения</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Работа с тяжёлыми пациентами</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <CheckIcon sx={{color: 'var(--green)'}}/>
                <Typography component="p" sx={{fontSize: 20, fontWeight: 500}}>Собственная патронажная
                    служба</Typography>
            </Box>
        </Box>
    )
}
