'use client';

import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SocialBlock from '@/components/SocialBlock';

export const Banner = () => {
    const router = useRouter();
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        }

    }, []);

    return (
        <Box
            sx={{
                marginTop: isMobile ? { xs: '110px', sm: '95px' } : 0,
                position: 'relative',
                backgroundImage: 'url(/images/banner3.webp)',
                width: '100%',
                /*height: {
                    xs: 'calc(var(--index) * 25)',
                    sm: 'calc(var(--index) * 26)',
                    md: 'calc(var(--index) * 27)',
                    lg: 'calc(var(--index) * 23)'
                },*/
                height: 'calc(var(--index) * 25)',
                backgroundSize: 'cover',
                // backgroundPosition: {xs: 'center', sm: 'top'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Box
                sx={{
                    // position: 'absolute',
                    // top: {xs: '20%', sm: '20%'},
                    // left: '5%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: 24, sm: 42, md: 58, lg: 68 },
                        fontWeight: 500,
                        color: 'var(--white)',
                        textShadow: '2px 2px 2px var(--black)',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}>
                    {/*Лечение в лучших*/}
                    {/*<br/>*/}
                    {/*клиниках Москвы*/}
                    Платная<br />
                    госпитализация
                </Typography>

                <Button
                    className="animation-btn"
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{
                        // display: isMobile ? 'block' : 'none',
                        // alignSelf: 'flex-start'
                        alignSelf: 'center'
                    }}
                >
                    Позвонить
                </Button>

                <Box
                    sx={{
                        display: isMobile ? 'block' : 'none',
                        // alignSelf: 'flex-start'
                        alignSelf: 'center'
                    }}
                >
                    <SocialBlock />
                </Box>
            </Box>

        </Box>
    );
};
