import React from 'react'
import {Box, Link} from '@mui/material'
import Image from 'next/image'
import { email, phoneTelegram, phoneViber, phoneWhatsApp } from '@/config';

const SocialBlock = ({className = ''}) => {
    return (
        <Box
            className={className}
            sx={{
                // width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
            }}
        >
            <Link target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <Image
                    src="/images/social/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link target="_blank" href={`https://t.me/${phoneTelegram}`}>
                <Image
                    src="/images/social/telegram.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            {/*<Link href={`viber://add?number=${phoneViber}`}>
                <Image
                    src="/images/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link href={`mailto:${email}`}>
                <Image
                    src="/images/social/email.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
        </Box>
    )
}

export default React.memo(SocialBlock)
