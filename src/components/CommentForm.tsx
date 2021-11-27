import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Divider, IconButton} from '@mui/material';
// import {a} from "images/Send.png";


export default function InputWithIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>     
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-comment" label="Add comment..." variant="standard" />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <img src='data:image/png;base64,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' width='20px' height='20px'  />
                </IconButton>
            </Box>
          </Box>
        );
      }