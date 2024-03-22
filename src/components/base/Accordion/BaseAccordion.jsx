'use client'

import {Box, Typography} from '@mui/material'
import {BaseAccordionItem} from '@/components/base/Accordion/BaseAccordionItem'
import {useState} from 'react'

export const BaseAccordion = ({id = '', title, items = []}) => {
    const [expanded, setExpanded] = useState('')

    const handleChange = (panel) => {
        setExpanded(panel)
    }

    return (
        <Box id={id} sx={{scrollMarginTop: {xs: '120px', sm: '50px'}, paddingX: '32px', paddingY: {xs: '25px', sm: '50px'}, color: 'var(--black)'}}>
            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}}}>{title}</Typography>

            <Box>
                {items.map((item) => <BaseAccordionItem key={item.id} {...item} expanded={expanded} onChange={handleChange}/>)}
            </Box>

        </Box>
    )
}
