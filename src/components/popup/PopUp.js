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
                <DialogTitle sx={{ m: 0, p: 2, borderBottom: 1 }}>Create new post 
                    <CloseIcon onClick={() => handleClose()}></CloseIcon></DialogTitle>
                <DialogContent></DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Select</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
