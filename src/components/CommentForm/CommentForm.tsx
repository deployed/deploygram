import { Avatar, Button, FormControl, OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { useUserContext } from "providers/AuthorizationWrapper";

interface CommentFormProps {
    image: string;
    postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ image, postId }) => {
    const [comment, setComment] = useState("");
    const {user} = useUserContext();
    const mockedPostId = 'c74a2419-d4fd-493f-93d5-d64203724699';

    function handleSubmit() {
        if (user?.id) {
            axios.post('/comments', {
                userId: user.id,
                postId: postId || mockedPostId,
                text: comment,
                createdAt: Date
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="Remy Sharp" src={image} sx={{ height: '50px', width: '50px', marginRight: "10px" }} />
            <form >
                <OutlinedInput onChange={e => setComment(e.target.value)} placeholder="Add a comment..." sx={{ height: "50px" }}></OutlinedInput>
                <IconButton onClick={handleSubmit} sx={{ marginLeft: "5px" }}>
                    <SendIcon></SendIcon>
                </IconButton>
            </form>
        </Box>
    )
}

export default CommentForm