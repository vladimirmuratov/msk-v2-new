'use client'

import {useRouter} from 'next/navigation'
import {useLayoutEffect, useState} from 'react'
import {TemporaryDrawer} from '@/components/navigation/TemporaryDrawer'
import {MobileHeader} from '@/components/navigation/MobileHeader'
import {DesktopHeader} from '@/components/navigation/DesktopHeader'

export const Navigation = () => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)
    const anchor = 'right'

    const [windowWidth, setWindowWidth] = useState(600)

    useLayoutEffect(() => {
        setWindowWidth(window.screen.width)
    }, [])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'Escape' && (event.key === 'Tab')) {
            setOpen(false)
        }
        setOpen(open)
    }

    return (
        <>
            <TemporaryDrawer anchor={anchor} toggleDrawer={toggleDrawer} isOpen={isOpen} router={router}/>
            {windowWidth <= 600 ? <MobileHeader isMobile={true} toggleDrawer={toggleDrawer}/> : <DesktopHeader/>}
        </>
    )
}
