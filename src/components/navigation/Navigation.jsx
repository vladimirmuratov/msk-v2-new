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

    useEffect(() => {
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
            {windowWidth <= 600 ? <MobileHeader toggleDrawer={toggleDrawer}/> : <DesktopHeader/>}
        </>
    )
}
