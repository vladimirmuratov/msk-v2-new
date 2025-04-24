import { Box, Link, Typography } from '@mui/material';
import { phoneNumber } from '@/config';

export const ContactBanner = ({ isMobile = false }) => {
    const bgColor = isMobile ? 'var(--white)' : 'var(--green)';
    const color = isMobile ? 'var(--black)' : 'var(--white)';
    const phoneColor = isMobile ? 'var(--red)' : 'var(--white)';

    return (
        <Box sx={{
            padding: '8px 32px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--black)',
            backgroundColor: bgColor
        }}>
            <Typography
                sx={{
                    color: color,
                    fontSize: { xs: 12, sm: 14, md: 16 },
                    textShadow: !isMobile ? '2px 2px 2px var(--black)' : '',
            }}
            >
                г. Москва, Мичуринский пр-т , д. 6
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link
                    href={`tel:${phoneNumber}`}
                    sx={{
                        color: phoneColor,
                        fontSize: { xs: 12, sm: 14, md: 16 },
                        fontWeight: 500,
                        textDecorationColor: 'var(--white)',
                        textShadow: !isMobile ? '1px 1px 1px var(--gray)' : '',
                    }}
                >
                    {phoneNumber}
                </Link>
                <Typography sx={{ color: color }}>&nbsp;|&nbsp;</Typography>
                <Typography
                    sx={{
                        color: 'var(--red)',
                        fontSize: { xs: 12, sm: 14, md: 16 },
                        fontWeight: 500,
                        textShadow: '1px 1px 2px var(--white)'
                }}
                >
                    Круглосуточно 24/7
                </Typography>
            </Box>
        </Box>
    );
};
