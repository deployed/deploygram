import Stack from '@mui/material/Stack';
import CommentForm from 'components/CommentForm';
import PostInfo from 'components/PostInfo';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                Timeline
                <CommentForm/>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                <PostInfo userName="Manuel XXX" description="askdaklsdjawdadsfdsvgbftnrt"/>
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
