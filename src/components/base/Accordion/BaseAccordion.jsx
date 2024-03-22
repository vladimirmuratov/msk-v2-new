import {Box, Typography} from '@mui/material'
import {BaseAccordionItem} from '@/components/base/Accordion/BaseAccordionItem'

export const BaseAccordion = ({id = '', title, items = []}) => {
    return (
        <Box id={id} sx={{scrollMarginTop: {xs: '120px', sm: '50px'}, paddingX: '32px', paddingY: {xs: '25px', sm: '50px'}, color: 'var(--black)'}}>
            <Typography variant="h4" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}}}>{title}</Typography>

            <Box>
                {items.map((item) => <BaseAccordionItem key={item.id} {...item}/>)}
            </Box>

        </Box>
    )
}
