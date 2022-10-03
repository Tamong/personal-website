

import { Stack, Typography} from '@mui/material/';
import React, {ReactElement, FC} from "react";


const Home: FC<any> = (): ReactElement => {
    return (
      <div>
        
        <Stack spacing={1} sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="h3" fontWeight='bold'>Welcome</Typography>
        </Stack>

      </div>
    );
};

export default Home;