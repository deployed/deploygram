import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import profilePhoto from '../../images/cat.jpg';

import Footer from './footer.js';


const Sidebar = () => {
    return (
        <>
            <Stack direction="column" spacing={2} margin='30px'>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        alt="Remy Sharp"
                        src = {profilePhoto}
                        sx={{ width: 80, height: 80, borderRadius: 400/ 2 }} />
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Nazwa profilu</Typography>
                    
                </Stack>

                <Stack>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '40px' }}>Suggestions for you</Typography>
                </Stack>


                
                <List sx={{ width: '100%' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src = {profilePhoto}
                                sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ margin: '10px', marginTop: '20px',  fontWeight: 'bold' }}>Nazwa profilu
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src = {profilePhoto}
                                sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ margin: '10px', marginTop: '20px',  fontWeight: 'bold' }}>Nazwa profilu
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src = {profilePhoto}
                                sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ margin: '10px', marginTop: '20px',  fontWeight: 'bold' }}>Nazwa profilu
                                </Typography>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src = {profilePhoto}
                                sx={{ width: 60, height: 60, borderRadius: 400/ 2 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography sx={{ margin: '10px', marginTop: '20px',  fontWeight: 'bold' }}>Nazwa profilu
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
                <Footer/>
            </Stack>
        </>
    );
};

export default Sidebar;
