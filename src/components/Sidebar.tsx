import { Stack, Container, Avatar, Link } from '@mui/material';

export default function Sidebar(): JSX.Element {

    const User = JSON.parse(localStorage.getItem('user') || '{}');

    // No endpoint for other users to fetch from, resulting in this temporary array
    const Suggestions = ['Test Profile 1', 'Test Profile 2', 'Test Profile 3', 'Test Profile 4'];

    // Random color as placeholder for actual profile pictures to be implemented when existing
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return (
        <Stack direction="column" justifyContent="center">

            <Container style={{ display: 'flex', marginBottom: '10px', alignItems: 'center', gap: '1rem', padding: '0' }}>
                <Avatar sx={{ bgcolor: 'grey', width: '4.5rem', height: '4.5rem' }} />
                <p style={{ fontWeight: 'bold', fontSize: '1.6em', textTransform: 'capitalize' }}>{User.nickname}</p>
            </Container>

            <Container style={{ padding: '0' }}>
                <h3>Suggestions for you</h3>
            </Container>

            <Stack spacing={3} alignItems="flex-start">
                {Suggestions.map((index) => (
                    <div
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold' }}
                        key={index}
                    >
                        <Avatar
                            sx={{ bgcolor: `#${randomColor}`, width: '3.5rem', height: '3.5rem' }}
                            alt={index}
                        />
                        <p>{index}</p>
                    </div>
                ))}
            </Stack>

            <Container style={{ padding: '0', marginTop: '5em' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link
                        href='/Privacy'
                        color='#00000090'
                        underline='none'
                    >
                        Privacy
                    </Link>
                    <Link
                        href='/Terms'
                        color='#00000090'
                        underline='none'
                    >
                        Terms
                    </Link>
                    <Link
                        href='/Contact'
                        color='#00000090'
                        underline='none'
                    >
                        Contact
                    </Link>
                </div>
                <div style={{ color: '#00000090' }}>
                    <p>&copy; 2021 Deploygram</p>
                </div>
            </Container>
        </Stack>
    );
}
