import Stack from '@mui/material/Stack';
import PostPreview from 'components/PostPreview'

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                <PostPreview name='uzytkownik' imageSrc="https://i2.wp.com/www.pies.pl/wp-content/uploads/pies-przekrzywia-glowe.jpg?fit=1400%2C800&ssl=1"/>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
