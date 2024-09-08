'use client'

import {Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import SocialBlock from '@/components/SocialBlock'

export const Banner = () => {
    const router = useRouter()
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
            setMobile(true)
        }

    }, [])

    return (
        <Box
            sx={{
                marginTop: isMobile ? {xs: '110px', sm: '95px'} : 0,
                position: 'relative',
                backgroundImage: 'url(/images/banner.png)',
                width: '100%',
                height: {
                    xs: 'calc(var(--index) * 25)',
                    sm: 'calc(var(--index) * 26)',
                    md: 'calc(var(--index) * 27)',
                    lg: 'calc(var(--index) * 23)'
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: {xs: '20%', sm: '20%'},
                    left: '5%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 16, sm: 32, md: 48},
                        fontWeight: 600,
                        color: 'var(--black)',
                        textShadow: '0px 4px 4px lightgray'
                    }}>
                    Позаботьтесь<br/>
                    о здоровье<br/>
                    ваших родителей
                </Typography>

                <Button
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{
                        display: isMobile ? 'block' : 'none',
                        alignSelf: 'flex-start'
                    }}
                >
                    Позвонить
                </Button>

                <Box
                    sx={{
                        display: isMobile ? 'block' : 'none',
                        alignSelf: 'flex-start'
                    }}
                >
                    <SocialBlock/>
                </Box>
            </Box>

        </Box>
    )
}
