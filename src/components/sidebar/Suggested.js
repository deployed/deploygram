import * as React from 'react';
import Box from '@mui/material/Box';
import ProfAvatar from './ProfAvatar';

export default function Suggested( {users,user} ){
    console.log(users);

    const style = {
        overflowY: 'scroll',
        maxHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5em'
    };

    return (
        <Box sx={style}>
            {
               users?.data?.filter((u) => {
                    return u.id !== user.id;
                }).map((u) => {
                    return ( <ProfAvatar initials={u.nickname.slice(0,2)} color='#ddd' user={u.nickname} width='300' key={u.id}/>)
                })
            }
        </Box>


    );
}
