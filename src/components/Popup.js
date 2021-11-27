import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { getUserId } from 'utils';
import IconButton from '@mui/material/IconButton';

export default function PopupExtend({isOpen, onClose}) {
    async function handleFile(event) {
      const fData = new FormData();
      fData.set('images',event.target.files[0]);
      for (let i = 1; i < event.target.files.length; i++) {
        fData.append('images', event.target.files[i]);
      }
      console.log(event.target.files);
      var test = await axios.post('https://deploygram.deployed.space/posts/images', fData, {headers:{
        'Content-Type':'multipart/form-data'
      }})
      const post = {
        images : test.data,
        description: 'asdasdasd',
        userId: getUserId()}
      axios.post('https://deploygram.deployed.space/posts', post);
    }
  
    return (
      <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{margin: 'auto', justifyContent: 'center', alignItems: "center", display: 'flex'}}
    >
      <Stack style={{height: "400px", width: '400px', backgroundColor: 'white', borderRadius: '10px', border: '1px outset black'}}>
        <Stack direction='row' justifyContent='space-between' borderBottom='2px solid black'>
          <p/>
          <p>Create new post</p>
          <IconButton aria-label="home" size="large" onClick={onClose}>
          <CloseIcon sx={{ fontSize: '30px', color: 'black', justifyContent: 'flex-end' }} />
        </IconButton>
        </Stack>
        {/* FileList */}
        <input type="file" placeholder="Create new post" onChange={handleFile} style={{flex: 1, width: '100%'}} onDrop={() => console.log("dziala")} multiple/>
      </Stack>
    </Modal>
    )
  }
  