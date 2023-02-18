import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios';

if (window.location.hostname === 'localhost') {
  axios.defaults.baseURL = 'http://localhost:3001';
} else {
  axios.defaults.baseURL = 'https://admin-tv-material-ui-practice-production.up.railway.app';
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
