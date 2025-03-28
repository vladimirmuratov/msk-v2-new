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
    title: 'Платная госпитализация в Москве. 8 (499) 719-81-00, 24/7',
    description:
        '10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Оперативно. Минимум документов. Финансовая прозрачность.',
    keywords: 'клиническая больница управления делами президента, фгбу объединенная больница с поликлиникой, больница управления делами президента, госпитализация без полиса омс, фгбу клиническая больница',
    openGraph: {
        title: 'Платная госпитализация в Москве. 8 (499) 719-81-00, 24/7',
        description: '10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Оперативно. Минимум документов. Финансовая прозрачность.',
        images: ['/images/banner3.webp'],
        url: 'https://www.msk-emergency.ru',
        type: 'website',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta name="yandex-verification" content="dd2e2dbaa184eaca" />
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
