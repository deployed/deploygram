import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./comment.css";

function Comment({userName, text, creationDate, imgUrl}) {

    var day = creationDate.getDate();
    var month = creationDate.getMonth() + 1;
    var year = creationDate.getFullYear();
    var h = creationDate.getHours();  
    var m = creationDate.getMinutes(); 
    

    return (
        <>
            <div className="wrapper">
                <Avatar alt="dog" src={imgUrl} />
                <div>
                    <div className="wrapper">
                        <p className="user">{userName}</p>
                        <p className="text">{text}</p>
                    </div>
                    <p className="date">{`${day}-${month}-${year} ${h}h ${m}min`}</p>
                </div>
            </div>
        </>
    );
}

export default Comment;
