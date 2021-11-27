import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    height: '100%'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#eee'
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
                <AddPhotoAlternateOutlinedIcon fontSize="large"/>
            <input {...getInputProps()} />
            <p>Drag your photos and videos here.</p>
            </div>
            <div>
                <h4>Files</h4>
                <ul>{files}</ul>
            </div>
        </div>
    );
}

export default Dropzone;