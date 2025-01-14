import Link from 'next/link';
import { Box } from '@mui/material';
import { links } from '@/config';
import { BaseLink } from '@/components/base/BaseLink';
import SocialBlock from '@/components/SocialBlock';

export const DesktopHeaderGreen = ({ isShow, currentPath, setCurrentPath}) => {

    return (
        <Box
            component="header"
            className={`container ${isShow ? 'pos-fix' : ''}`}
            sx={{
                zIndex: 1,
                backgroundColor: 'var(--green)',
                paddingY: '12px',
                paddingX: { xs: '24px', sm: '32px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 4px lightgray',
                transform: isShow ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'all 0.5s'
            }}>

            <Link href="/" onClick={() => setCurrentPath('')}>
                <img className="logo" src="/images/logo-white.png" alt="logo" />
            </Link>

            <Box component="nav" sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: '10px', md: '15px' } }}>
                {links.map((link) => <BaseLink
                    key={link.id}
                    {...link}
                    setCurrentPath={setCurrentPath}
                    currentPath={currentPath}
                    isGreenHeader={true}
                />)}
            </Box>

            <SocialBlock />

        </Box>
    );
};
