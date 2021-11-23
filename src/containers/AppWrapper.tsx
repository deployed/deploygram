import React from 'react';

import Box from '@mui/material/Box';

const AppWrapper: React.FC = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" maxWidth="1024px" margin="0 auto">
            {children}
        </Box>
    );
};

export default AppWrapper;
