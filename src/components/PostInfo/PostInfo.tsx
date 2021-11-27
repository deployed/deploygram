import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PostINfoProps {
    userName: string;
    description: string;
    data: string;
    image: string;
}

const PostInfo: React.FC<PostINfoProps> = ({ image, userName, description, data }) => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Avatar alt="Remy Sharp" src={image} sx={{ height: '60px', width: '60px' }} />
                <Typography variant="h4" sx={{fontSize: "18px", width: "90%"}} align="center">{userName}</Typography>
            </Box>
            <Typography variant="body1" sx={{fontSize: "13px", marginTop: "10px"}}>{description}</Typography>
            <Typography variant="body1" sx={{fontSize: "13px", marginTop: "15px"}}>###{data}</Typography>
        </>
    )
}

export default PostInfo;