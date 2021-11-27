import Stack from '@mui/material/Stack';
import PostPreview from 'components/PostPreview';
import Box from '@mui/material/Box';
import StoriesList from 'components/StoriesList/StoriesList';
import Sidebar from './SidebarFolder/Sidebar';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                <StoriesList/>
                <PostPreview name='user' imageSrc="https://i2.wp.com/www.pies.pl/wp-content/uploads/pies-przekrzywia-glowe.jpg?fit=1400%2C800&ssl=1" comment="comment" />
            </Stack>
            <Stack width="300px">
                <Sidebar/>
            </Stack>
        </Stack>
    );
};

export default Home;
