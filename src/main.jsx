import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { RouterProvider } from 'react-router-dom';
import  router  from './routes.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={4000} />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
