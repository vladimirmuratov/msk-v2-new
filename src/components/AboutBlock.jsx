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
                <Box component="span" sx={{ fontWeight: 500, color: 'var(--red)' }}>Медицинская Сервисная Компания</Box> выступает авторизованным представителем
                столичных медицинских учреждений, ведомственных
                структур охраны здоровья и федеральных клиник под эгидой Управления делами Президента РФ.

            </Typography>
            <Typography component="p" sx={{ fontSize: 20 }}>
                Сочетание исконно русского профессионального наследия с передовыми технологиями, выдающееся качество
                медпомощи и особое отношение к каждому пациенту ставят больницы-партнёры данного центра на вершину
                медицинской индустрии не только в пределах России, но также за ее рубежами.
            </Typography>
        </Box>
    );
};
