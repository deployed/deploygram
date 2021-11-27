import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const footer = () =>{
    return (
        <Stack>
            <Typography sx={{ textAlign: 'center' , marginTop: '60px', color: 'rgb(153,153,153)' }}>
                        Privacy Terms Contact
                        <br/>
                        &#169;
                        2021 Deploygram
            </Typography>      
        </Stack>
    );
};

export default footer;