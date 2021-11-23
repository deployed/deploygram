import React from 'react';

import Box from '@mui/material/Box';

const PageWrapper: React.FC = ({ children }) => {
    return (
        <Box bgcolor="#f4f4f4" flex={1} padding={3}>
            {children}
        </Box>
    );
};

export default PageWrapper;
