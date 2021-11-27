import Stack from '@mui/material/Stack';
import { ProfilePageHeaders } from 'components/ProfilePageHeader';

const Profile = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" flex={1}>
                <ProfilePageHeaders></ProfilePageHeaders>
            </Stack>
            <Stack>
                Grid
            </Stack>
        </Stack>
    );
};

export default Profile;
