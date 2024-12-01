import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box id="about" sx={{
            scrollMarginTop: { xs: '120px', sm: '50px' },
            paddingX: { xs: '10px', lg: 0 },
            paddingY: { xs: '25px', sm: '50px' },
            color: 'var(--black)'
        }}>

            <Typography variant="h4"
                        sx={{ marginBottom: '20px', fontSize: { xs: '28px', sm: '34px' }, fontWeight: 500 }}>О
                нас</Typography>

            <Typography component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                Компания МСК, специализирующаяся на платной госпитализации и экстренной транспортировке в лучшие
                медицинские учреждения Москвы, функционирует непрерывно уже десятилетие.

            </Typography>
            <Typography component="p" sx={{ fontSize: 20 }}>
                Мы осуществляем свою деятельность в тесной связи с ФГБУ "Объединенная больница с поликлиникой" УД Президента РФ, обеспечивая доступ к высококлассной медицине круглосуточно.
            </Typography>
        </Box>
    );
};
