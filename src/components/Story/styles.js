import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { red, grey } from '@mui/material/colors';

export const StyledAvatar = styled(Avatar)({
    border: '2px solid',
    borderColor: red[800],
    width: '84px',
    height: '84px'
});
    
export const StyledStack = styled(Stack)({
    alignItems: 'center',
    backgroundColor: grey[50],
    width: '84px'
});
    
export const StyledTypography = styled(Typography)({
    width: '86px',
    height: '25px',
    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
    fontSize: '16px',
    color: grey[900],
    textDecoration: 'none solid rgb(0, 0, 0)'
});
