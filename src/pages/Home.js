import Stack from '@mui/material/Stack';
import Stories from "components/Stories";
import kot from "images/kot.jpg";
const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                
                {/* This is the place for story list and post list */}
                Timeline
                <Stories imgSrc={kot} userId="nazwa"/>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
