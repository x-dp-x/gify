import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

declare global {
  interface Window {
    GIPHY_API_KEY: string;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
