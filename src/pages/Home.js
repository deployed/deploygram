import { useState, useEffect } from 'react';
import { Description } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import PostPreview from 'components/PostPreview';
import Box from '@mui/material/Box';
import StoriesList from 'components/StoriesList/StoriesList';
import Sidebar from './SidebarFolder/Sidebar';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => { 
        fetchPosts().then(result => setPosts(result) )
    },[]);

    console.log(posts)
    
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {posts.map(post => (
                    <ImageAvatars key={post.id} profileName={post.userId} description={post.description}  profileImage={post.images[0]} />
                ))}
            </Stack>
            <Stack width="300px">
                <Sidebar/>
            </Stack>
        </Stack>
    );
};

export default Home;
