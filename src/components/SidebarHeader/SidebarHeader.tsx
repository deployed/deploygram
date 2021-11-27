import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SidebarHeaderProps {
    userName: string;
    image: string;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({image, userName}) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Avatar alt={userName} src={image} sx={{ height: '60px', width: '60px' }} />
            <Typography variant="h4" sx={{fontSize: "18px", width: "90%"}} align="center">{userName}</Typography>
        </Box>
    )
}

export default SidebarHeader