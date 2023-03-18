import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);
