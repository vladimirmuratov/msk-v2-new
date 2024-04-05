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
    title: 'МСК',
    description: 'Платная госпитализация в ведущие лечебные учреждения Москвы'
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Navigation/>
                    {children}
                    <Suspense>
                        <Metrika/>
                    </Suspense>
                    <Footer/>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}
