import PostInfo from "components/PostInfo";
import { render } from '@testing-library/react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

describe('<PostInfo />', () => {
    test('Should correctly render component', () => {
        const postInfo = render(<PostInfo userName="Manuel" description="salskdaskodkw"
            image="images/morty.jpg" data="19 minutes"/>);

        expect(postInfo).toBeTruthy();
    });
});