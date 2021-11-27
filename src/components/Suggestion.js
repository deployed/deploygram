import { Stack, Box, Avatar, Typography, Link } from '@mui/material';

const Suggestion = ({ img, name, href }) => {
    return(
        <Stack direction="row" sx={{ width: '100%', display: 'flex', marginTop: 3}}>
            <Box sx={{ }}>
                <Link href={href}>
                    <Avatar alt={name} src={img} sx={{ width: 50, height: 50 }}/>
                </Link>
            </Box>
            <Box sx={{ padding: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href={href} color="inherit" underline="none">
                    <Typography variant="h4" sx={{fontSize: "18px" }} align="center">{name}</Typography>
                </Link>
            </Box>
        </Stack>
    )
}

export default Suggestion