// Material UI 5 (MUI) React Tutorial | MUI Responsive Real Project
// By Lama Dev
// https://www.youtube.com/watch?v=fzxEECHnsvU

import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
