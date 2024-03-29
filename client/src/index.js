import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
document.title = process.env.REACT_APP_NAME || 'App title';
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);
