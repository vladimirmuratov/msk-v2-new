import { Cardio } from 'ldrs/react';
import 'ldrs/react/Cardio.css';
import { Box } from '@mui/material';

export const Loader2 = () => (

    <Box
        sx={{
            height: '85vh',
            // marginTop: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Cardio
            size="150"
            stroke="4"
            speed="2"
            color="var(--main-color)"
        />
    </Box>
);
