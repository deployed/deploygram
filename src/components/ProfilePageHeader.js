import { Stack, Box, Avatar, CircularProgress } from '@mui/material';
import {likesCount} from '../utils/index'

const ProfilePageHeader = ({ posts, id, profileData }) => {

    

    return (
            <Stack direction="row" flex={1}>
                <Box flex={1} sx={{ display: 'flex', aspectRatio: '1', alignItems: 'center', justifyContent: 'center', padding: 3 }}>
                    <Avatar alt="profile picture" src="https://pbs.twimg.com/profile_images/670497128901423104/0hgXQS-a_400x400.png" sx={{ width: 200, height: 200 }}/>
                </Box>
                <Stack flex={3} sx={{justifyContent: 'center' }}width="340px" direction="column">
                <Box sx={{ padding: 2, fontSize: '2em', fontWeight: 'bold' }}>
                    {profileData == null ? <CircularProgress /> : profileData.nickname}
                    </Box>
                    <Stack direction="row">
                        <Box sx={{ padding: 2 }}>
                            <b>{posts == null ? <CircularProgress /> : posts.length}</b> posts
                        </Box>
                        <Box sx={{ padding: 2 }}>
                            <b>{posts == null ? <CircularProgress /> : likesCount(posts)}</b> likes
                        </Box>
                    </Stack>
                    <Box sx={{ padding: 2 }}>
                    {profileData == null ? <CircularProgress /> : profileData.bio}
                    </Box>
                </Stack>
            </Stack>  
    );
};

export default ProfilePageHeader;
