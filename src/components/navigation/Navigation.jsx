'use client'

import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {TemporaryDrawer} from '@/components/navigation/TemporaryDrawer'
import {MobileHeader} from '@/components/navigation/MobileHeader'
import {DesktopHeader} from '@/components/navigation/DesktopHeader'

export const Navigation = () => {
    const router = useRouter()
    const [isOpen, setOpen] = useState(false)
    const anchor = 'right'

    const [windowWidth, setWindowWidth] = useState(601)
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        setWindowWidth(window.screen.width)
    }, [])

    useEffect(() => {

        if (windowWidth <= 600) {
            setMobile(true)
        } else {
            setMobile(false)
        }

    }, [windowWidth])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'Escape' && (event.key === 'Tab')) {
            setOpen(false)
        }
        setOpen(open)
    }

    return (
        <>
            <TemporaryDrawer anchor={anchor} toggleDrawer={toggleDrawer} isOpen={isOpen} router={router}/>
            {isMobile ? <MobileHeader isMobile={true} toggleDrawer={toggleDrawer}/> : <DesktopHeader/>}
        </>
    )
}
