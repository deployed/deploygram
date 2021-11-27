import * as React from 'react';
import Box from '@mui/material/Box';
import ProfAvatar from './ProfAvatar';
import axios from 'axios';
import Footer from './Footer';
import Suggested from './Suggested';


const drawerWidth = 300;
const drawerHeight = 700;
const headerHeight = 110;
const footerHeight = 100;
const suggestHeight = drawerHeight - headerHeight - footerHeight;



export default function SideBar() {

    const [users, setUsers] = React.useState([]);
    // const [user, setUser]   = React.useState({});

    React.useEffect(()=> {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const usersData = await axios.get('https://deploygram.deployed.space/users');
        setUsers(usersData);
        // setUser(localStorage.getItem('user'));
    };

    const user = localStorage.getItem('user');
    console.log(user);

    return (
        <Box
            className={'container'}
            sx = {{
                width: drawerWidth,
                height: drawerHeight,
                display: 'flex',
                flexDirection: 'column',
                gap: '1em',
            }}
        >
            <Box
                className={'header'}
                sx={{
                    width: drawerWidth,
                    height: headerHeight,

                }}>
                <Box
                    className={'avatarContainer'}
                >

                    <ProfAvatar
                        initials = { user ? JSON.parse(user).nickname.slice(0,2) : null}
                        color = 'pink'
                        user  = { user ? JSON.parse(user).nickname : null}
                        width = {drawerWidth}
                    />

                </Box>
            </Box>

            <Box
                className={'suggested'}
                sx={{
                    width: drawerWidth,
                    height: suggestHeight,
                }}
            >
                <Box
                    component={'span'}
                >
                    Suggested for you:
                </Box>

                <Suggested users = {users} user = {user}/>

            </Box>

            <Footer width = {drawerWidth} height = {footerHeight}/>

        </Box>
    );
}
