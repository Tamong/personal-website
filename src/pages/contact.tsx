import React, {ReactElement, FC} from "react";
import {Box, Typography, Stack, Grid} from "@mui/material";
import Link from '@mui/material/Link';


import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact: FC<any> = (): ReactElement => {
    return (
        <div>
            <Stack spacing={1} sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="h3" fontWeight='bold'>Contact</Typography>
                
                <Typography variant="h6" fontWeight='bold'>
                <div>
                    Email: philiptw115@gmail.com
                    <br/>
                    Phone: (713)205-4120
                    <br/>
                    Discord: Tamong#0001
                    <br/>
                </div>
                    <Grid  py={2} sx={{ display: 'flex'}}>
                        <Box px={1}>
                            <Link target="_blank" href="https://www.instagram.com/philip_wallis/">
                                <InstagramIcon htmlColor="white" fontSize="large"/></Link>
                        </Box>
                        <Box px={1}>
                            <Link target="_blank" href="https://www.youtube.com/channel/UCdR-mGVVuaLAI9yDletw16w">
                                <YouTubeIcon htmlColor="white" fontSize="large"/></Link>
                        </Box>
                        <Box px={1}>
                            <Link target="_blank" href="https://www.linkedin.com/in/philip-wallis-b437a915a/">
                                <LinkedInIcon htmlColor="white" fontSize="large"/></Link>
                        </Box>
                        <Box px={1}>
                            <Link target="_blank" href="https://github.com/Tamong">
                                <GitHubIcon htmlColor="white" fontSize="large"/></Link>
                        </Box>
                    </Grid>
                </Typography>
                
                </Stack>

            
        </div>
    );
};

export default Contact;