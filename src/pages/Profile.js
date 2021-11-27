import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom';
import ProfilePageHeader from 'components/ProfilePageHeader';

const Profile = () => {

    const [profileData, setProfileData] = useState(null);
    const [posts, setPosts] = useState(null);
    let params = useParams();

    useEffect(() => {
        fetch('https://deploygram.deployed.space/users/' + params.id)
            .then(res => res.json())
            .then((res) => {
                setProfileData(res);
            });
            fetch('https://deploygram.deployed.space/posts')
            .then(res => res.json())
            .then((res) => {
                setPosts(filterPosts(res));
            });
    }, []) 

    const filterPosts = (posts) => {
        return posts.filter((post) => {
            return post.userId === params.id
        })
        // let toReturn = [];
        // posts.forEach((post, index) => {
        //     if (post.userId == params.id) {
        //         toReturn.push(post);
        //     }
        // })
        // return toReturn;
    }

    return (
        <Stack spacing={4}>
            <ProfilePageHeader posts={posts} id={params.id} profileData={profileData}/>
            <Stack>
                Grid
            </Stack>
        </Stack>
    );
};

export default Profile;
