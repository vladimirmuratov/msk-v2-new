import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box id="whyWe" sx={{
            scrollMarginTop: { xs: '120px', sm: '50px' },
            paddingX: { xs: '10px', lg: 0 },
            paddingY: { xs: '25px', sm: '50px' },
            color: 'var(--black)'
        }}>

            <Typography variant="h2"
                        sx={{
                            marginBottom: '20px',
                            fontSize: { xs: '28px', sm: '34px' },
                            fontWeight: 400,
                            color: 'var(--red)'
                        }}>
                Почему выбирают нас
            </Typography>
            <Typography component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                Компания организует <span style={{ color: 'var(--red)', fontWeight: 500 }}>госпитализации</span> в
                Москве и Московской области, обладает знанием ситуации с ведущими
                медицинскими клиниками и врачами-специалистами. Мы имеем актуальную информацию о стоимости размещения в
                частных палатах различных учреждений здравоохранения. Компетенция охватывает выбор стационаров по
                профилю пациента и оптимизацию процесса госпитализации с учетом индивидуальных потребностей.
            </Typography>
            <Typography component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                <span
                    style={{ color: 'var(--red)', fontWeight: 500 }}>В случае отказа в госпитализации</span> оперативно
                используем связи и знания. Особое внимание уделяем
                медицинскому обслуживанию <span style={{ color: 'var(--red)', fontWeight: 500 }}>пожилых людей</span> —
                для них предусмотрен непрерывный профессиональный уход
                круглосуточно.
            </Typography>
            <Typography component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                Подход к каждому клиенту индивидуален, что обеспечивает соответствие всем требованиям и условиям.
            </Typography>

            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: 22, sm: 24 },
                        color: 'var(--red)',
                        paddingTop: { xs: '10px', sm: '20px' },
                        textAlign: 'center',
                        fontStyle: 'italic',
                        textWrap: 'balance',
                        lineHeight: 1.5
                    }}
                >
                    Ваше здоровье требует оперативных решений? Мы быстро организуем госпитализацию в проверенные клиники
                    Москвы, учитывая специфику диагноза и подбирая наиболее подходящего врача.
                </Typography>
            </Box>
        </Box>
    );
};
