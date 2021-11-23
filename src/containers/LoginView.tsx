import LoginForm from 'components/LoginForm';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import deploygramLogo from 'images/deploygram-logo.png';

const LoginView = () => (
    <Container sx={{ width: '100vw', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ width: 350, backgroundColor: 'white' }}>
            <CardContent>
                <Box 
                    sx={{ display: 'flex', flexDirection: 'column'}} 
                    component="div"
                >
                    <Box component="figure" sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
                        <img src={deploygramLogo} alt="Deploygram app logo"/>
                    </Box>
                    <LoginForm />
                </Box>
            </CardContent>
        </Card>
    </Container>
    );

export default LoginView
