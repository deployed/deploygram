import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Modal from '@mui/material/Modal';
import { getUserId } from 'utils';
import logo from 'images/deploygram-logo.png';

const NavigationBar = () => {
  const navigate = useNavigate();
  const userId = getUserId();
  const [open, setOpen] = React.useState(false);

  return (
    <Box height="80px" display="flex" paddingX={3} alignItems="center" borderBottom="1px solid #dadada" bgcolor="white">
      <Stack direction="row" justifyContent="space-between" width="100%" marginX="auto">
        <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logo} alt="logo" width="183px" />
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton aria-label="home" size="large" onClick={() => navigate('/')}>
            <HomeOutlinedIcon sx={{ fontSize: '43px', color: 'black' }} />
          </IconButton>
          <IconButton aria-label="create post" size="large" onClick={() => setOpen(true)}>
            <AddBoxOutlinedIcon sx={{ fontSize: '43px', color: 'black' }} />
          </IconButton>
          <IconButton aria-label="profile" size="large" onClick={() => navigate(`/profiles/${userId}`)}>
            <AccountCircleIcon sx={{ fontSize: '43px', color: 'black' }} />
          </IconButton>
        </Stack>
      </Stack>
      <Modal
        open={open}
        onClose={() =>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{margin: 'auto', justifyContent: 'center', alignItems: "center", display: 'flex'}}
      >
        <Stack style={{height: "400px", width: '400px', backgroundColor: 'white', borderRadius: '10px', border: '1px outset black'}}>
          <Stack direction='row' justifyContent='space-between' borderBottom='2px solid black'>
            <p/>
            <p>Create new post</p>
            <IconButton aria-label="home" size="large" onClick={() => setOpen(false)}>
            <CloseIcon sx={{ fontSize: '30px', color: 'black', justifyContent: 'flex-end' }} />
          </IconButton>
          </Stack>
          <input type="file" placeholder="Create new post" onChange={(cos) => console.log(cos)} style={{flex: 1, width: '100%'}}/>
        </Stack>
      </Modal>
    </Box>
  );
};

export default NavigationBar;
