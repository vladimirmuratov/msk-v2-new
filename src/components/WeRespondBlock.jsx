import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}>

            <Typography variant="h2" sx={{
                marginBottom: '20px',
                fontSize: { xs: '28px', sm: '34px' },
                fontWeight: 400,
                color: 'var(--red)'
            }}>
                Эффективный подбор медицинской клиники под вашу задачу
            </Typography>

            <Box
                component="p"
                sx={{
                    marginBottom: '20px',
                    fontSize: { xs: 18, sm: 20 },
                    // color: 'var(--gray)'
                }}
            >
                Наш сервис предлагает профессиональный подбор клиник и врачей с учётом медицинских показаний, уровня
                сервиса и ваших индивидуальных требований. Мы работаем оперативно, конфиденциально и с гарантией
                качества.
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Оптимизация времени и ресурсов
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы берём на себя всю аналитику: сравнение клиник, подбор подходящих специалистов, проверка лицензий
                    и репутации — чтобы вы могли сосредоточиться на главном.
                </Typography>
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Персонализированный подход
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Каждое обращение рассматривается индивидуально. Мы учитываем диагноз, сопутствующие факторы и
                    предпочтения клиента, чтобы предложить наилучшее решение.
                </Typography>
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Полное сопровождение на всех этапах
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Наши специалисты координируют процесс: от консультации и записи до контроля качества оказанных
                    услуг. Мы обеспечиваем стабильную коммуникацию и поддержку.
                </Typography>
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Прозрачность и контроль стоимости
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы заранее предоставляем информацию о стоимости услуг, предупреждаем о возможных дополнительных
                    расходах и работаем только с проверенными клиниками.
                </Typography>
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--red)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Надёжные партнёры
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    В нашем портфеле — ведущие медицинские центры с современной технической базой и подтверждённой
                    деловой репутацией.
                </Typography>
            </Box>

            <Box
                sx={{
                    paddingTop: { xs: '50px', sm: '100px' },
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: 22, sm: 24 },
                        color: 'var(--red)',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        textWrap: 'balance',
                        lineHeight: 1.5
                    }}
                >
                    С нами вы получаете не просто подбор клиники — вы получаете решение.<br />
                    Обратитесь к нам, и мы подберём оптимальный вариант под ваши задачи.
                </Typography>
            </Box>
        </Box>
    );
};
