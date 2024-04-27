import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CredentialsContextProvider } from './context/CredentialContext'
import { AuthContextProvider } from './context/AuthContext'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CredentialsContextProvider>
        <App />
      </CredentialsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);