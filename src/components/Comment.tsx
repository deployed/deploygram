import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';


interface CommentProps {
    avatar: string, 
    username: string,
    text: string,
    creationDate: string
}

export function Comment(props: any) {
    const {avatar, username, text, creationDate} = props;

    const commentStyle = {
        padding: "8px",
        backgroundColor: "#eee",
        margin: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        display: "flex",
    }

    const marginStyle = {
        margin: "8px"
    }

    const now = new Date();
    const createdAt = new Date(creationDate);
    const elapsed = Math.ceil((now.getTime() - createdAt.getTime()) / 1000 / 60);

    return (
        <div style={commentStyle}>
            <Avatar alt="User Image" src={avatar} style={marginStyle}/>
            <div style={marginStyle}>
                <div><b>{username}</b></div>
                <div><i>{elapsed} minutes ago</i></div>
                <div style={{marginBottom: "8px"}}><i>{createdAt.toDateString()}</i></div>
                <div>{text}</div>
            </div>
        </div>
    );
}
