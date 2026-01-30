import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-emergency.vercel.app/'),
    title: 'Медицинская Сервисная Компания. Госпитализация в лучшие клиники Москвы. Клиники управления делами Президента РФ. 8 (499) 719-81-00, 24/7',
    description:
        'Медицинская Сервисная Компания – организация платной госпитализации в федеральные, ведомственные и частные клиники Москвы. Быстрый подбор врачей, запись на лечение, сопровождение пациентов. Доступ к современной диагностике и операциям у ведущих специалистов. Медицинский туризм.',
    keywords: 'госпитализация в Москву из регионов, лечение в Москве для иногородних, московские медицинские центры, федеральные клиники Москвы, стоимость госпитализации в Москве, как попасть в московскую клинику, оформить платную госпитализацию, срочная госпитализация в Москву, цены на лечение в Москве',
    openGraph: {
        title: 'Медицинская Сервисная Компания. Госпитализация в лучшие клиники Москвы. Клиники управления делами Президента РФ. 8 (499) 719-81-00, 24/7',
        description: 'Медицинская Сервисная Компания – организация платной госпитализации в федеральные, ведомственные и частные клиники Москвы. Быстрый подбор врачей, запись на лечение, сопровождение пациентов. Доступ к современной диагностике и операциям у ведущих специалистов. Медицинский туризм.',
        images: ['/images/banner3.webp'],
        url: 'https://msk-emergency.vercel.app/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <head>
            <title>Test title</title>
            <meta name="description" content="Test description" />
            <meta name="yandex-verification" content="7827291a3cf86fb6" />
            <meta name="google-site-verification" content="ULxFdlnvp2gnAXLazRK1F8C95byeEkOULFcsE4swYWI" />
            <link rel="canonical" href="https://msk-emergency.vercel.app"/>
        </head>
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Metrika />
                        <Footer />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
