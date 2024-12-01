import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter'
import {ThemeProvider} from '@mui/material/styles'
import {Montserrat} from 'next/font/google'
import {Box} from '@mui/material'
import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/navigation/Navigation'
import {Metrika} from '@/components/Metrika'
import {Suspense} from 'react'
import theme from '@/theme'
import './globals.css'

const montserrat = Montserrat({subsets: ['latin', 'cyrillic']})

export const metadata = {
    title: 'Платная госпитализация 8 (499) 719-81-00, 24/7',
    description: 'кардиология платная госпитализация платная госпитализация неврология платная гастроэнтерология в москве госпитализация в терапию',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <meta name="yandex-verification" content="dd2e2dbaa184eaca"/>
        </head>
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation/>
                        {children}
                        <Metrika/>
                        <Footer/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}
