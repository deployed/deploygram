import React, { Component } from 'react';
import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { height } from '@mui/system';
import Dropzone from 'components/popup/Dropzone';


export default function PopUp(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return(
        <div>
            <IconButton aria-label="create post" size="large" onClick={() => handleClickOpen()}>
                <AddBoxOutlinedIcon sx={{ fontSize: '43px', color: 'black' }} />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
            <Box width="600px" height="600px">
            <Stack padding="5px" display="flex" direction="row" spacing={40} paddingX={2} alignItems="center" borderBottom="1px solid #dadada" bgcolor="white">
                <DialogTitle>Create new post 
                </DialogTitle>
                <CloseIcon sx={{ cursor: 'pointer', marginLeft: 2, size: '30px'}} onClick={() => handleClose()} float="right">
                </CloseIcon>
            </Stack>
            <Box display="flex">
                <DialogContent>
                {/*<input accept="image/*" style={{ display: 'none' }} 
                        id="raised-button-file" multiple type="file"/>
                <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span">
                        Upload
                    </Button>
                </label>*/}
                <Dropzone /> 
                </DialogContent>
            </Box>
                {/*<DialogActions>
                    <Button onClick={handleClose}>Select</Button>
                </DialogActions>*/}
                </Box>
            </Dialog>
        </div>
    );
}
