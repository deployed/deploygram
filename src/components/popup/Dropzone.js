import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Stack from '@mui/material/Stack';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderColor: 'white',
    borderStyle: 'dashed',
    borderWidth: 5,
    borderRadius: 5,
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    height: '475px'
  };
  
  const activeStyle = {
    borderColor: '#bdbdbd'
  };
  
  const acceptStyle = {
    borderColor: '#bdbdbd'
  };
  
  const rejectStyle = {
    borderColor: 'white'
  };


function Dropzone(props) {
    const {acceptedFiles,getRootProps,getInputProps,isDragActive,
        isDragAccept,
        isDragReject} = useDropzone({accept: 'image/jpeg, image/png, video/mp4, video/ogg'});
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
    
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);

    return (
        <div>
            <div {...getRootProps({className: 'dropzone', style})}>
            <Stack display="flex" direction="column"  paddingY={15} alignItems="center">
                <AddPhotoAlternateOutlinedIcon style={{ fontSize: 80 }}/>
                <input {...getInputProps()} />
                <p>Drag your photos and videos here.</p>
            </Stack>
            </div>
        </div>
    );
}

export default Dropzone;