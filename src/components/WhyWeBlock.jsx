import {Box, Typography} from '@mui/material'

export const WhyWeBlock = () => {
    return (
        <Box id="whyWe" sx={{
            scrollMarginTop: {xs: '120px', sm: '50px'},
            paddingX: {xs: '10px', lg: 0},
            paddingY: {xs: '25px', sm: '50px'},
            color: 'var(--black)'
        }}>

            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 500}}>Почему именно
                мы?</Typography>

            <Typography component="p" sx={{fontSize: 20, marginBottom: '10px'}}>
                Наша компания оказывает помощь в госпитализации в Москве и Московской области и знает всё о ведущих
                клиниках и врачах. Нам прекрасно известно, сколько стоит отдельная палата в больнице. Какие стационары
                оказывают услуги именно по вашему профилю и как госпитализироваться в нужную больницу.
            </Typography>
            <Typography component="p" sx={{fontSize: 20}}>
                Мы готовы прийти на помощь даже если больному поступил отказ в госпитализации в другие клиники. Нам
                прекрасно известно, какие особенности имеет госпитализация пожилых пациентов — и мы готовы сопровождать
                их круглые сутки семь дней в неделю.
            </Typography>
        </Box>
    )
}
