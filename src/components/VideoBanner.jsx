'use client'

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export const VideoBanner = React.memo(() => {
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
                position: 'relative'
            }}
        >
            <video className="video-banner" autoPlay loop muted>
                <source src="/video/video-banner-1.webm" type="video/webm" />
                Your browser does not support the video tag.
                <a href="https://ru.freepik.com/free-video/close-up-view-senior-caucasian-female-doctor-hands-typing-laptop-desktop_473369#fromView=search&page=1&position=0&uuid=f225933e-fd27-40a6-b1e8-6c837f0f2fe9">Видео от freepik</a>
            </video>

            <Typography
                variant="h1"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: 24, sm: 42, md: 58, lg: 68 },
                    fontWeight: 400,
                    color: 'var(--red)',
                    textShadow: '2px 2px 2px white',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    width: '100%'
                }}>
                Лечение в лучших
                <br />
                клиниках Москвы
                {/*Платная<br/>*/}
                {/*госпитализация*/}
            </Typography>

        </Box>
    );
});
