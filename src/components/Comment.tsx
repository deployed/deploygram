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
        // flexDirection: "column"
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


export function AllComments() {

    const [comments, setComments] = useState([1, 2, 4]);

    useEffect(() => {
        // fetch("https://deploygram.deployed.space/comments").then(response => response.json()).then(arr => setComments(arr));
        // fetch("https://deploygram.deployed.space/comments").then(response => response.json()).then(arr => console.log(arr));
    }, []);

    const mockup = {
        avatar:"https://www.ckziu.jaworzno.pl/wp-content/uploads/2016/09/no-user-image.gif",
        username:"some username",
        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
        creationDate:"2021-11-27T09:34:56.766Z"
    };

    return (
        <div>
            {
                comments.map(x => {
                    return (
                        <Comment key={0} {...mockup}>
                            
                        </Comment>
                    );
                })
            }
        </div>
    );
}