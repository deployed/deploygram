import Box from '@mui/material/Box';
import * as React from 'react';

export default function Footer(props){
    return (
        <Box
            className={'footer'}
            sx={{
                width: props.width,
                height: props.height,
                display: 'flex',
                flexDirection: 'column',

            }}>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1em'
                }}>
                <Box component={'p'}>
                    Privacy
                </Box>

                <Box component={'p'}>
                    Terms
                </Box>

                <Box component={'p'}>
                    Contact
                </Box>
            </Box>

            <Box component={'p'}>
                2021 Deploygram
            </Box>

        </Box>
    );
}
