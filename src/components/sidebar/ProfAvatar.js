import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

export default function ProfAvatar(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1em',
                width: props.width,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1em',
                }}>
                <Avatar
                    sx={{
                        bgcolor: props.color,
                        width: 50,
                        height: 50,
                    }}
                    alt={'Profile photo'}
                    src={'#'}
                >
                    {props.initials}
                </Avatar>

                <Box component={'p'} id={'userInfo'}>
                    {props.user}
                </Box>
            </Box>
        </Box>
    );
}
