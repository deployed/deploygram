import React from 'react';

import Box from "@mui/material/Box";

const PageWrapper: React.FC = ({ children }) => {
  return (
    <Box bgcolor="#ebebeb" flex={1} padding={3}>
      {children}
    </Box>
  )
}

export default PageWrapper;
