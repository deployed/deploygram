import Stack from '@mui/material/Stack';
// import PostInfo from 'components/PostInfo';

import SideBar from '../components/sidebar/SideBar.js';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                Timeline
            </Stack>
            <Stack width="300px">
                <SideBar/>
                {/* All Sidebar related things go here */}
                {/*<PostInfo userName="Manuel XXX" description="askdaklsdjawdadsfdsvgbftnrt"/>*/}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
