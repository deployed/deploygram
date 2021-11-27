import Stack from '@mui/material/Stack';
import CarouselPhoto from 'components/CarouselPhoto';

const Home = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack flex={1} width="700px">
                {/* This is the place for story list and post list */}
                Timeline

                <CarouselPhoto images={['https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                    'https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480']}>
                </CarouselPhoto>
            </Stack>
            <Stack width="300px">
                {/* All Sidebar related things go here */}
                Sidebar
            </Stack>
        </Stack>
    );
};

export default Home;
