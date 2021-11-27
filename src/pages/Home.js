import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import StoriesList from 'components/StoriesList/StoriesList';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                <StoriesList/>
                <p>Timeline</p>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
