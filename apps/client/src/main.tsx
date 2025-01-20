import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from '@mui/material';
import { themeUGram } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeUGram}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
