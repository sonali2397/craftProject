import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
// importing
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-etkwi3rvo66mrcc1.us.auth0.com"
    clientId="e6MwFcbNvn0yX6Fcp1HmLOcSlGqK8pCe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
