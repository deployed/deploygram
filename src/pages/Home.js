import Stack from '@mui/material/Stack';
import Storiesarray from "components/Storiesarray";
const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                <Storiesarray/>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
            </Stack>
        </Stack>
    );
}

export default Home;
