import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/globals.css';
import './styles/layout.css';
import initScrollAnimations from './utils/observe.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Initialize scroll animations after mount
if (typeof window !== 'undefined') {
  // small delay to ensure DOM nodes are rendered
  setTimeout(() => initScrollAnimations(), 120);
}
