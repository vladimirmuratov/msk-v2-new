'use client'

import {Fab} from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'

export const FloatBtn = ({handleOpen}) => {
    return (
        <Fab
            onClick={handleOpen}
            color="error"
            sx={{
                position: 'fixed',
                bottom: {xs: '10px', sm: '30px', md: '50px'},
                right: {xs: '10px', sm: '30px', md: '50px'}
            }}>
            <CreateOutlinedIcon/>
        </Fab>
    )
}
