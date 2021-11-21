import LoginForm from 'components/LoginForm';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ReactComponent as DeploygramLogo } from 'images/deploygram-logo.svg';

const LoginView = () => (
    <Container sx={{ width: '100vw', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ width: 350 }}>
            <CardContent>
                <Box 
                    sx={{ display: 'flex', flexDirection: 'column'}} 
                    component="div"
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
                        <DeploygramLogo />
                    </Box>
                    <LoginForm />
                </Box>
            </CardContent>
        </Card>
    </Container>
    );

export default LoginView
