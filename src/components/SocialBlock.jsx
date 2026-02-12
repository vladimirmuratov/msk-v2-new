import React from 'react';
import { Box, Link } from '@mui/material';
import Image from 'next/image';
import { email, maxLink, telegramLink } from '@/config';
import { MaxIcon } from '@/components/icons/MaxIcon';

const SocialBlock = ({ className = '', isIconColored = false }) => {
  return (
    <Box
      sx={{
        // width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '15px',
      }}
      className={className}
    >
      {/*<Link
        target="_blank"
        href={`https://wa.me/${phoneWhatsApp}`}
        sx={{
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          // src="/images/social/whatsapp.svg"
          src={isIconColored ? '/images/social/whatsapp-blue.svg' : '/images/social/whatsapp-white.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </Link>*/}
      <Link
        target="_blank"
        href={maxLink}
        sx={{
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        {isIconColored ? <MaxIcon color="var(--main-color)" /> : <MaxIcon color="var(--white)" />}
      </Link>
      <Link
        target="_blank"
        href={telegramLink}
        sx={{
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          src={
            isIconColored ? '/images/social/telegram-blue.svg' : '/images/social/telegram-white.svg'
          }
          alt="icon"
          width={30}
          height={30}
        />
      </Link>
      <Link
        href={`mailto:${email}`}
        sx={{
          transition: 'all 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          src={isIconColored ? '/images/social/email-blue.svg' : '/images/social/email-white.svg'}
          alt="icon"
          width={30}
          height={30}
        />
      </Link>
    </Box>
  );
};

export default React.memo(SocialBlock);
