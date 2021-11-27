import Stack from '@mui/material/Stack';
import PhotoPost from 'components/PhotoPost';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                Timeline
                <PhotoPost image="https://upload.wikimedia.org/wikipedia/commons/4/4b/FoosLondonStad220618-124_%2842989552522%29.jpg"/>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
