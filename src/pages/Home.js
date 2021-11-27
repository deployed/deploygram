import Stack from '@mui/material/Stack';
import SidebarHeader from 'components/SidebarHeader';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                Timeline
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
                <SidebarHeader/>
            </Stack>
        </Stack>
    );
};

export default Home;
