import { useState } from 'react';

import { useUserContext } from 'providers/AuthorizationWrapper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const { saveUser } = useUserContext();

    const onUsernameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setUsername(e.target.value);
    const onBioChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setBio(e.target.value);
    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        saveUser({
            user: username,
            bio
        });
    };

    return (
        <Box 
            sx={{ display: 'flex', flexDirection: 'column' }} 
            component="form" 
            onSubmit={onSubmitHandler}
        >
            <TextField 
                sx={{ m:1 }}
                variant="outlined" 
                name="username"  
                type="text" 
                label="username"
                value={username} 
                onChange={onUsernameChangeHandler}
            />
            <TextField 
                sx={{ m:1 }}
                variant="outlined" 
                multiline
                rows={3}
                name="bio"  
                type="text" 
                label="bio"
                value={bio} 
                onChange={onBioChangeHandler}
            />
            <Button type="submit" disabled={!username} sx={{ m:1 }} variant="contained">
                <Typography> Log In</Typography>
            </Button>
        </Box>
    );
};

export default Login;
