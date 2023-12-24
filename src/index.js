import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import App from './App';
import { ColorContextProvider } from './ColorContext/darkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ColorContextProvider>
        <GlobalStyles>
                <App />
            </GlobalStyles>
        </ColorContextProvider>
    </React.StrictMode>
);

