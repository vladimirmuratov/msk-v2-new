'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TemporaryDrawer } from '@/components/navigation/TemporaryDrawer';
import { MobileHeader } from '@/components/navigation/MobileHeader';
import { DesktopHeaderWhite } from '@/components/navigation/DesktopHeaderWhite';
import { DesktopHeaderColor } from '@/components/navigation/DesktopHeaderColor';

export const Navigation = () => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    const anchor = 'right';

    // const [windowWidth, setWindowWidth] = useState(600);
    const [isHide, setHide] = useState(false);
    const [currentPath, setCurrentPath] = useState('');
    const [isMobile, setMobile] = useState(undefined);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        } else {
            setMobile(false);
        }

    }, []);

    /*useLayoutEffect(() => {
        setWindowWidth(window.screen.width);
    }, []);*/

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'Escape' && (event.key === 'Tab')) {
            setOpen(false);
        }
        setOpen(open);
    };

    return (
        <>
            <TemporaryDrawer anchor={anchor} toggleDrawer={toggleDrawer} isOpen={isOpen} router={router} />
            {(typeof isMobile === 'boolean' && isMobile) /*&& windowWidth <= 600*/
                ? <MobileHeader isMobile={true} toggleDrawer={toggleDrawer} />
                : isMobile === false && <DesktopHeaderWhite onHide={setHide} currentPath={currentPath} setCurrentPath={setCurrentPath} />
            }
            {/*windowWidth > 600*/ (typeof isMobile === 'boolean' && isMobile === false) &&
                <DesktopHeaderColor isShow={isHide} currentPath={currentPath} setCurrentPath={setCurrentPath} />}
        </>
    );
};
