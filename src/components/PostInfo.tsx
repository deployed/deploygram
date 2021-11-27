import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Stack } from '@mui/material';

export default function PostInfo() {
  return (
    <Box
      sx={{
        width: 400,
        height: 220,
        backgroundColor: 'white',       
      }}>
            <Stack direction="column" justifyContent="center"
            alignItems="center">
                <Stack direction="row">
                    <Stack width="100px" height="60px"justifyContent="center"
                    alignItems="center">
                        <Avatar sx={{ bgcolor: "red" }}>
                            N
                        </Avatar>
                    </Stack>
                    <Stack width="300px" height="60px" justifyContent="center"
                    alignItems="center">
                        Nazwa uzytkownika
                    </Stack>
                </Stack>
                <Stack width="380px" 
                height="110px"
                overflow="scroll" 
                >
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz amjbba f dkubffdf b bhjsdf bs,b bh fbjfbha b bh fba bafb dlkasj dulh  dhi sfhsflhdhfuhfusilfhdfhu hddhuldfhdsfdsldsdh lhdsf fhf h ful dl hffshsdfh  dshdsf hudf hudsf hdfh df hl dfhdf hdf uh dfh dsfh hu fdh fh dfh df dfh dh dfh dfh df dfhdfh dfhu 
                </Stack>
                <Stack width="380px" height="20px"  color="blue"
                >
                    #links
                </Stack>
                <Stack width="380px" height="20px"  color="lightgrey"
                >
                    wczoraj
                </Stack>
            </Stack>
        </Box>
  );
}