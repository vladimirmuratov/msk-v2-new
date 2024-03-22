import {Box} from '@mui/material'
import {cardsBlock} from '@/config'
import {BaseCard} from '@/components/base/BaseCard'

export const CardsBlock = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                paddingBottom: {xs: '25px', sm: '50px'},
                transform: 'translateY(-4px)'
            }}>
            {cardsBlock.map((item) => <BaseCard key={item.id} {...item}/>)}
        </Box>
    )
}
