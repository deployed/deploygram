import Stack from '@mui/material/Stack';
import Comment from "../components/Comment"
import dog from "images/dog.jpg";

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1}>
                {/* This is the place for story list and post list */}
                Timeline
                <Comment userName="Name" text="My new very very very long comment" creationDate={new Date("November 27, 2021 12:15:00")} imgUrl={dog}></Comment>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
