import {Box, Typography} from '@mui/material'
import {BaseAccordionItem} from '@/components/base/Accordion/BaseAccordionItem'

export const BaseAccordion = ({id = '', title, items = []}) => {

    return (
        <Box id={id} sx={{scrollMarginTop: {xs: '120px', sm: '50px'}, paddingX: {xs: '10px', lg: 0}, paddingY: {xs: '25px', sm: '50px'}, color: 'var(--black)'}}>
            <Typography variant="h2" sx={{marginBottom: '20px', fontSize: {xs: '28px', sm: '34px'}, fontWeight: 400, color: 'var(--red)'}}>{title}</Typography>

            <Box>
                {items.map((item) => <BaseAccordionItem key={item.id} {...item}/>)}
            </Box>

        </Box>
    )
}
