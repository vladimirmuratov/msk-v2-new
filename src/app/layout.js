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
    metadataBase: new URL('https://www.msk-emergency.ru'),
    title: 'Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинский туризм. 8 (499) 719-81-00, 24/7',
    description:
        'Медицинская Сервисная Компания – организация платной госпитализации в федеральные и частные клиники Москвы. Быстрый подбор врачей, запись на лечение, сопровождение пациентов. Доступ к современной диагностике и операциям у ведущих специалистов.',
    keywords: 'госпитализация в Москву из регионов, лечение в Москве для иногородних, московские медицинские центры, федеральные клиники Москвы, стоимость госпитализации в Москве, как попасть в московскую клинику, оформить платную госпитализацию, срочная госпитализация в Москву, цены на лечение в Москве',
    openGraph: {
        title: 'Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинский туризм. 8 (499) 719-81-00, 24/7',
        description: 'Медицинская Сервисная Компания – организация платной госпитализации в федеральные и частные клиники Москвы. Быстрый подбор врачей, запись на лечение, сопровождение пациентов. Доступ к современной диагностике и операциям у ведущих специалистов.',
        images: ['/images/banner3.webp'],
        url: 'https://www.msk-emergency.ru/',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <head>
            <meta name="yandex-verification" content="dd2e2dbaa184eaca" />
            <meta name="google-site-verification" content="ULxFdlnvp2gnAXLazRK1F8C95byeEkOULFcsE4swYWI" />
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
