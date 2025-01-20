import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { AppBar, Box, Typography } from '@mui/material';


export function App() {
  return (
    <div>
      <Box className={"mb-2"}>
        <header>
          <AppBar position={"static"}>
            <div className="container mx-auto py-2">
              <Typography
                variant={"h5"}
              >
                UGram
              </Typography>
            </div>
          </AppBar>
        </header>
      </Box>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
