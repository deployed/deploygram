import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import profilePhoto from '../../images/cat.jpg';
import './styles.css';

const Sidebar = () => {
    return (
        <>
            <Stack direction="column" spacing={2} margin='30px'>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src = {profilePhoto}
                        sx={{ width: 80, height: 80, borderRadius: 400/ 2 }} />
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Nazwa profilu</Typography>
                    
                </Stack>

                <Stack>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '40px' }}>Suggestions for you</Typography>
                </Stack>
                
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src = {profilePhoto}
                        sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Nazwa profilu</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src = {profilePhoto}
                        sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Nazwa profilu</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src = {profilePhoto}
                        sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Nazwa profilu</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src = {profilePhoto}
                        sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Nazwa profilu</Typography>
                </Stack>
            </Stack>
            <Stack>
                <Typography sx={{ textAlign: 'center' , marginTop: '60px' }}>
                        Privacy Terms Contact
                </Typography>
                   
            </Stack>
        </>
    );
};

export default Sidebar;
