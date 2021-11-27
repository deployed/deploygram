import React from 'react';
import Avatar from '@mui/material/Avatar';
import dog from "images/dog.jpg";
import "./comment.css";


function Comment({userName, text, creationDate}) {

    return (
        <>
            <div className="wrapper">
                <Avatar alt="dog" src={dog} />
                <div>
                    <div className="wrapper">
                        <p className="user">{userName}</p>
                        <p className="text">{text}</p>
                    </div>
                    <p>{creationDate}</p>
                </div>
            </div>
        </>
    );
}

export default Comment;