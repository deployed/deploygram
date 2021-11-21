import LoginForm from 'components/LoginForm';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const LoginView = () => (
        <Card sx={{ width: 350 }}>
            <CardContent>
                <Box 
                    sx={{ display: 'flex', flexDirection: 'column'}} 
                    component="div"
                >
                    <Typography 
                        sx={{ p: 3, textAlign: 'center' }} 
                        component="h1" 
                        fontSize="large"
                    >
                        Deploygram
                    </Typography>
                    <LoginForm />
                </Box>
            </CardContent>
        </Card>
    );

export default LoginView
