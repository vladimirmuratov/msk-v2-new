import {Typography} from '@mui/material'
import Link from 'next/link'

export const BaseLink = ({path, label}) => {
    return(
        <Link href={path}>
            <Typography sx={{fontSize: {sm: 14, md: 16}}}>{label}</Typography>
        </Link>
    )
}
