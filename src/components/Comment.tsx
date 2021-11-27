import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';


interface CommentProps {
    avatar: string, 
    username: string,
    text: string,
    creationDate: string
}


export const Comment: React.FC<CommentProps> = ({avatar, username, text, creationDate}) => {

    const commentStyle = {
        padding: "8px",
        backgroundColor: "#eee",
        margin: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        display: "flex"
    }

    const marginStyle = {
        margin: "8px"
    }

    const now = new Date();
    const createdAt = new Date(creationDate);
    const elapsed = Math.ceil((now.getTime() - createdAt.getTime()) / 1000 / 60);
    const displayedTime = (elapsed > 60) ? (<div style={{marginBottom: "8px"}}><i>{createdAt.toDateString()}</i></div>) : (<div><i>{elapsed} minutes ago</i></div>);

    return (
        <Box sx={commentStyle}>
            <Avatar alt="User Image" src={avatar} style={marginStyle}/>
            
            <Box sx={marginStyle}>                
                <Typography style={{marginBottom: "8px"}}>
                    <b>{username}</b> {text}
                </Typography>
                <Typography>
                    {displayedTime}
                </Typography>
            </Box>
        </Box>
    );
}