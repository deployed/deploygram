import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const PostPreview = ({ name, imageSrc, comment }) => {
    return (
        <Container>
            <Grid container spacing={0} rowSpacing={2} alignItems='center' border={1} borderColor='darkgrey' marginY="20px">
                <Grid item xs={1.5} marginLeft={2}>
                    <Avatar sx={{ width: 60, height: 60 }}>{name[0]}</Avatar>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='h6' component='h1' fontFamily='Arial'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img src={`https://deploygram.deployed.space/${imageSrc.substring(8)}`} alt='bla' width='100%' height='100%'/>
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
