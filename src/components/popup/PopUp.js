import * as React from 'react';
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
            <Box padding="5px" display="flex" paddingX={2} alignItems="center" borderBottom="1px solid #dadada" bgcolor="white">
                <DialogTitle>Create new post 
                </DialogTitle>
                <CloseIcon sx={{ cursor: 'pointer', marginLeft: 2 }} onClick={() => handleClose()}>
                </CloseIcon>
            </Box>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Select</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
