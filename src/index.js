import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/App.css';
import App from './App';
import { ContextAPI } from './Theme/ThemeContext';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </React.StrictMode>
);
