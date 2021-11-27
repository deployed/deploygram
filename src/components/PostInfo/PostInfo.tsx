import React from 'react'
import Avatar from '@mui/material/Avatar';
import './style.css'
import image from 'images/morty.jpg'

interface PostINfoProps {
    userName: string;
    description: string;
    data: string;
    image: string;
}

const PostInfo: React.FC<PostINfoProps> = ({image, userName, description, data}) => {
    return (
        <div className="postInfo">
            <div className="header">
                <Avatar alt="Remy Sharp" src={image} sx={{height: '60px', width: '60px'}} />
                <h3>{userName}</h3>
            </div>
            <div className="text">
                <p>
                    {description}
                </p>
            </div>
            <p>#{data}</p>
        </div>
    )
}


export default PostInfo