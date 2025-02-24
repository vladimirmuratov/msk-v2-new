import { Fab, Link } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import { phoneNumber } from '@/config';

export const FloatBtn = ({handleOpen}) => {
    return (
        /*<Fab
            onClick={handleOpen}
            color="error"
            sx={{
                position: 'fixed',
                bottom: {xs: '10px', sm: '30px', md: '50px'},
                right: {xs: '10px', sm: '30px', md: '50px'}
            }}>
            <PhoneEnabledIcon/>
            <span className="pulse-button__rings"></span>
            <span className="pulse-button__rings"></span>
            <span className="pulse-button__rings"></span>
        </Fab>*/

        <Link href={`tel:${phoneNumber}`}>
            <Fab
                color="error"
                sx={{
                    position: 'fixed',
                    bottom: { xs: '10px', sm: '30px', md: '50px' },
                    right: { xs: '10px', sm: '30px', md: '50px' }
                }}>
                <PhoneEnabledIcon />
                <span className="pulse-button__rings"></span>
                <span className="pulse-button__rings"></span>
                <span className="pulse-button__rings"></span>
            </Fab>
        </Link>
    )
}
