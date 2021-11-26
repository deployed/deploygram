import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import { getUserId } from 'utils';
import logo from 'images/deploygram-logo.png';

const NavigationBar = () => {
    const navigate = useNavigate();
    const userId = getUserId();

    return (
        <Box height="80px" display="flex" paddingX={3} alignItems="center" borderBottom="1px solid #dadada" bgcolor="white">
            <Stack direction="row" justifyContent="space-between" width="100%" marginX="auto">
                <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" width="183px"/>
                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton aria-label="home" size="large" onClick={() => navigate('/')}>
                        <HomeOutlinedIcon sx={{ fontSize: '43px', color: 'black' }} />
                    </IconButton>
                    <IconButton aria-label="create post" size="large" onClick={() => console.log('Open modal for post adding!')}>
                        <AddBoxOutlinedIcon sx={{ fontSize: '43px', color: 'black' }} />
                    </IconButton>
                    <IconButton aria-label="profile" size="large" onClick={() => navigate(`/profiles/${userId}`)}>
                        <AccountCircleIcon sx={{ fontSize: '43px', color: 'black' }} />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
};

export default NavigationBar;
