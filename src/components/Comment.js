import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./comment.css";
import propTypes from 'prop-types';

function Comment({userName, text, creationDate, imgUrl}) {

    const day = creationDate.getDate();
    const month = creationDate.getMonth() + 1;
    const year = creationDate.getFullYear();
    const h = creationDate.getHours();  
    const m = creationDate.getMinutes(); 
    
    return (
        <>
            <div className='wrapper'>
                <Avatar alt='zdj' src={imgUrl} />
                <div>
                    <div className='wrapper'>
                        <p className='user'>{userName}</p>
                        <p className='text'>{text}</p>
                    </div>
                    <p className='date'>{`${day}-${month}-${year} ${h}h ${m}min`}</p>
                </div>
            </div>
        </>
    );
}

Comment.propTypes = {
    userName: propTypes.string,
    text: propTypes.string,
    creationDate: propTypes.instanceOf(Date),
    imgUrl: propTypes.string
}

export default Comment;
