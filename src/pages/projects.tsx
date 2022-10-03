import React, {ReactElement, FC} from "react";
import {Card, CardContent, Box, Stack, Link, Typography} from "@mui/material";


const Projects: FC<any> = (): ReactElement => {
    return (
        <div>
        <Stack spacing={5}  sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3" fontWeight='bold'>Projects</Typography>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card sx={{ maxWidth: 400 }}>
                    <iframe width="400" height="225" 
                    src="https://www.youtube.com/embed/videoseries?list=PLkGeWJiahCVBYILHEQPxy_9Mno4yxoKn_" 
                    title="Media Projects" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Media Projects in <Link underline="hover" target="_blank" 
                    href="https://www.texastorque.org/">FRC 1477</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    I've created 14 videos as a part of the Media Subteam, and lead the subteam for two years in High School.
                    <br/><br/> The playlist features four teasers, two promotionals, six competition recaps, and three Chairman's Award videos.
                    </Typography>
                </CardContent>
                </Card>     
            </Box>            
        </Stack>

        </div>
    );
};

export default Projects;