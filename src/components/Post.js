import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';




export default function ImageAvatars({profileName,profileImage,description}) {
  return (
    <Stack direction="column"> 
        <Stack direction="row" spacing={2}  alignItems = "center">
        <Avatar alt="Remy Sharp" src={a}  sx={{ width: 69, height: 69 }} />
        <Stack direction="column" spacing={2}>
        <h1 style = {{ fontWeight: 'bold', fontFamily: 'Ink Free'}}>
        {profileName}
            </h1>
            </Stack>
        </Stack>
        <img src = {profileImage} width = "100%"></img>
        <Stack direction="row" spacing={2} alignItems = "baseline">
        <p style = {{ fontWeight: 'bold', fontFamily: 'Ink Free', fontSize:31}}>
        {profileName}
        </p>
        <p> {description} </p>
        </Stack>
    </Stack>
  );
}