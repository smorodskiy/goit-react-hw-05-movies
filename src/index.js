import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';

// Normalize style
import GlobalStyle from './globalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter basename='/goit-react-hw-05-movies'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
