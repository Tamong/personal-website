import React from 'react';

// Routers
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";

import Header from "./components/header";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material/';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
    <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </Box>

    </ThemeProvider>
  );
}

export default App;
