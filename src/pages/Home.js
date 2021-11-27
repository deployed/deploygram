import Stack from '@mui/material/Stack';
import PostPreview from 'components/postpreview';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                <PostPreview name='user' imageSrc='https://i2.wp.com/www.pies.pl/wp-content/uploads/pies-przekrzywia-glowe.jpg?fit=1400%2C800&ssl=1' comment='comment'/>
                Timeline
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
