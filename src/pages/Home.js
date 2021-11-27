import { Stack, Box } from '@mui/material';
import PostInfo from 'components/PostInfo';
import Suggestion from 'components/Suggestion';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                Timeline
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                <PostInfo userName="Manuel XXX" description="askdaklsdjawdadsfdsvgbftnrt"/>
                <Stack>
                    <Box sx={{ marginTop: 3 }}>
                        Suggestions for you
                    </Box>
                    <Suggestion img="" name="Jestem Sugestią" href="/profile"/>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Home;
