import React, {ReactElement, FC} from "react";
import {Chip, Link, Stack, Typography} from "@mui/material";


const About: FC<any> = (): ReactElement => {

    const handleClick = () => {
        // this does nothing!
    };
    
    return (
        <div>
        <Stack spacing={5} sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3" fontWeight='bold' >About Me</Typography>
            <Typography variant="h6" fontWeight='bold' align='left'>
                <div>
                    Hello, my name is Philip Wallis, a 20 year old student at <Link underline="hover" target="_blank" href="https://cs.utdallas.edu/">
                        University of Texas at Dallas</Link>,
                        <br/>
                    planned to graduate in Winter of 2023 with a Bachelor's in Computer Science.
                    <br/>
                    <br/>
                    I have strong experience in teams, problem solving, projects,<br/>
                    communications and leadership, as well as technologies below:
                    <br/><br/>
                </div>

                <Stack spacing={3} sx={{ alignItems: 'left'}} >
                    <Stack direction="row" spacing={1}>
                        <Chip label="C/C++" variant="outlined" onClick={handleClick} />
                        <Chip label="Java" variant="outlined" onClick={handleClick} />
                        <Chip label="Python" variant="outlined" onClick={handleClick} />
                        <Chip label="MIPS" variant="outlined" onClick={handleClick} />
                        <Chip label="Common Lisp" variant="outlined" onClick={handleClick} />
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <Chip label="HTML" variant="outlined" onClick={handleClick} />
                        <Chip label="CSS" variant="outlined" onClick={handleClick} />
                        <Chip label="JavaScript" variant="outlined" onClick={handleClick} />
                        <Chip label="React" variant="outlined" onClick={handleClick} />
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <Chip label="OSX" variant="outlined" onClick={handleClick} />
                        <Chip label="Windows 7-11" variant="outlined" onClick={handleClick} />
                        <Chip label="UNIX" variant="outlined" onClick={handleClick} />
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <Chip label="MS Office" variant="outlined" onClick={handleClick} />
                        <Chip label="Adobe Suite" variant="outlined" onClick={handleClick} />
                    </Stack>
                </Stack>
            </Typography>

        </Stack>

        </div>
    );
};

export default About;