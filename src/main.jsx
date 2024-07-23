import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ShopContextProvider from './Context/ShopContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
