import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GithubProvider } from './context/context'
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-3jrt8ayzxqvhmozb.us.auth0.com
// jqkuQHnnjLMw0KZmze7kwC4syxDgr6A8
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Auth0Provider 
      domain="dev-3jrt8ayzxqvhmozb.us.auth0.com"
      clientId="jqkuQHnnjLMw0KZmze7kwC4syxDgr6A8"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      cacheLocation='localstorage'>

      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
)
