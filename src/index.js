import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import './index.css';

const rootElement = document.getElementById('root');

// Render the app using the createRoot API
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
