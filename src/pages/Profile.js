import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Profile = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" flex={1}>
                <Box flex={1} sx={{ aspectRatio: '1' }}>Photo</Box>
                <Stack width="340px" direction="column">description, comments, likes etc.</Stack>
            </Stack>
            <Stack>
                Grid
            </Stack>
        </Stack>
    );
};

export default Profile;
