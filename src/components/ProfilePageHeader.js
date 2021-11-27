import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getUserId } from 'utils';

export const ProfilePageHeaders = () => {

    const [nickname, setNickname] = useState("...");
    const [bio, setBio] = useState("...");

    useEffect(() => {
        fetch("https://deploygram.deployed.space/users/" + getUserId()).then(response => response.json()).then(data => {
            setNickname(data.nickname);
            setBio(data.bio);
        });
    }, [])

    const profileheaderStyle = {
        padding: "8px",
        backgroundColor: "#fff",
        margin: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        width: "100%",
        display: "flex"
    }

    const marginStyle = {
        margin: "8px"
    }

    const avatar = "";
    const posts = 12;
    const likes = 271;

    return (
        <Box sx={profileheaderStyle}>
            <Avatar alt="User Image" src={avatar} style={marginStyle} sx={{ width: 200, height: 200 }}/>
            
            <Box sx={marginStyle}>     
                <Box style={marginStyle}>
                    <b>{nickname}</b>
                </Box>
                <Box style={marginStyle}>
                    <b>{posts}</b> posts<br></br>
                    <b>{likes}</b> likes
                </Box>        
                <Typography style={marginStyle}>
                    {bio}
                </Typography>
            </Box>
        </Box>
    );
}