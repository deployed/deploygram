import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const ProfilePageHeaders: React.FC<void> = () => {

    const profileheaderStyle = {
        padding: "8px",
        backgroundColor: "#fff",
        margin: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        display: "flex"
    }

    const marginStyle = {
        margin: "8px"
    }

    const avatar = "";
    const username = "my username"
    const posts = 324;
    const likes = 2344;

    return (
        <Box sx={profileheaderStyle}>
            <Avatar alt="User Image" src={avatar} style={marginStyle}/>
            
            <Box sx={marginStyle}>     
                <Box>
                    <b>{username}</b>
                </Box>
                <Box>
                    <b>{posts}</b> posts<br></br>
                    <b>{likes}</b> likes
                </Box>        
                <Typography>
                    Line 12:1:   Expected indentation of 20 spaces but found 10  indent
                    Line 13:1:   Expected indentation of 16 spaces but found 8   indent
                    Line 14:1:   Expected indentation of 16 spaces but found 8   indent
                    Line 15:1:   Expected indentation of 12 spaces but found 6   indent
                    Line 16:1:   Expected indentation of 8 spaces but found 4    indent
                    Line 17:1:   Expected indentation of 4 spaces but found 2    indent
                </Typography>
            </Box>
        </Box>
    );
}