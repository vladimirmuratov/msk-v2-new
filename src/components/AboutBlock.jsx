import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    marginBottom: '20px',
                    fontSize: { xs: '28px', sm: '34px' },
                    fontWeight: 400,
                    color: 'var(--red)'
                }}
            >
                О нас
            </Typography>

            <Typography component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                <Box component="span" sx={{ fontWeight: 500, color: 'var(--red)' }}>Медицинская Сервисная
                    Компания</Box> — авторизованный представитель столичных медицинских учреждений, ведомств охраны
                здоровья и федеральных клиник под эгидой Управления делами Президента РФ.

            </Typography>
            <Typography component="p" sx={{ fontSize: 20 }}>
                Сочетание русского профессионального наследия и передовых технологий обеспечивает высокое качество
                медицинской помощи и индивидуальный подход к каждому пациенту. Это ставит больницы-партнеры на вершину
                медицинской индустрии как в России, так и за ее пределами.
            </Typography>
        </Box>
    );
};
