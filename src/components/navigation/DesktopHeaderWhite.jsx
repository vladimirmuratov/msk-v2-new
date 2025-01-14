import { Box } from '@mui/material';
import { links } from '@/config';
import Link from 'next/link';
import { ContactBanner } from '@/components/ContactBanner';
import { useCallback, useEffect, useRef } from 'react';
import { BaseLink } from '@/components/base/BaseLink';
import SocialBlock from '@/components/SocialBlock';

export const DesktopHeaderWhite = ({ onHide, currentPath, setCurrentPath }) => {
    const scrollContainer = useRef(null);

    const onScroll = useCallback(() => {
        const { bottom } = scrollContainer.current.getBoundingClientRect();
        if (bottom <= 0) {
            onHide(true);
        } else {
            onHide(false);
        }

    }, []);

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Box
            ref={scrollContainer}
            sx={{ position: 'relative', zIndex: 1 }}
        >

            <ContactBanner />

            <Box
                component="header"
                className="container"
                sx={{
                    zIndex: 1,
                    backgroundColor: 'var(--white)',
                    paddingY: '12px',
                    paddingX: { xs: '24px', sm: '32px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 4px lightgray'
                }}>

                <Link href="/" onClick={() => setCurrentPath('')}>
                    <img className="logo" src="/images/logo.png" alt="logo" />
                </Link>

                <Box component="nav" sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: '10px', md: '15px' } }}>
                    {links.map((link) => <BaseLink
                        key={link.id}
                        {...link}
                        setCurrentPath={setCurrentPath}
                        currentPath={currentPath} />
                    )}
                </Box>

                <SocialBlock />

            </Box>

        </Box>
    );
};
