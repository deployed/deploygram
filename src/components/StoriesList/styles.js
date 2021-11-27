import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';

export const StyledBox = styled(Box)({
    backgroundColor: grey[50],
    height: '170px',
    width: '630px',
    overflowX: 'auto',
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'row'
});
