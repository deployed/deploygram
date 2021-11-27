import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom';

const ProfilePageHeader = (props) => {

    const likesCount = () => {
        let likes = 0;
        props.posts.forEach((post, index) => {
            likes += post.likes.length;
        })
        return likes;
    }

    return (
            <Stack direction="row" flex={1}>
                <Box flex={1} sx={{ display: 'flex', aspectRatio: '1', alignItems: 'center', justifyContent: 'center', padding: 3 }}>
                    <Avatar alt="profile picture" src="https://pbs.twimg.com/profile_images/670497128901423104/0hgXQS-a_400x400.png" sx={{ width: 200, height: 200 }}/>
                </Box>
                <Stack flex={3} sx={{justifyContent: 'center' }}width="340px" direction="column">
                <Box sx={{ padding: 2, fontSize: '2em', fontWeight: 'bold' }}>
                    {props.profileData == null ? null : props.profileData.nickname}
                    </Box>
                    <Stack direction="row">
                        <Box sx={{ padding: 2 }}>
                            <b>{props.posts == null ? null : props.posts.length}</b> posts
                        </Box>
                        <Box sx={{ padding: 2 }}>
                            <b>{props.posts == null ? null : likesCount()}</b> likes
                        </Box>
                    </Stack>
                    <Box sx={{ padding: 2 }}>
                    {props.profileData == null ? null : props.profileData.bio}
                    </Box>
                </Stack>
            </Stack>  
    );
};

export default ProfilePageHeader;
