import { useState } from 'react';

import { useUserContext } from 'providers/AuthorizationWrapper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const { saveUser } = useUserContext();

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setUsername(e.target.value);
    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        saveUser(username);
    }
    return (
            <Box 
                sx={{ display: 'flex', flexDirection: 'column'}} 
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
                        onChange={onChangeHandler}
                    />
                    <Button sx={{ m:1 }} variant="contained">
                        <Typography> Log In</Typography>
                    </Button>
            </Box>
    )
}

export default Login
