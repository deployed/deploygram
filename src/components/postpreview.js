import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import IconButton from '@mui/material/IconButton';
// import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const navigate = useNavigate();

const PostPreview = ({ name, imageSrc, comment }) => {
    return (
        <Container >
            <Grid container spacing={0} rowSpacing={2} alignItems='center' border={1} borderColor='darkgrey'>
                <Grid item xs={1.5} marginLeft={2}>
                    <Avatar sx={{ width: 60, height: 60 }}>{name[0]}</Avatar>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='h6' component='h1' fontFamily='Arial'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src={imageSrc} alt='bla' width='100%' height='100%'/>
                </Grid>
                <Grid>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' size='large'/>
                    {/* <IconButton size='large' onClick={() => navigate('/')}><AddCommentIcon /></IconButton> */}
                </Grid>
                <Grid item xs={12} marginLeft={1}>
                    <Typography variant='body1' component='h1' fontFamily='Arial'>
                        <b>{name}</b> {comment}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PostPreview;
