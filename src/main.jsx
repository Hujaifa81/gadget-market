import * as React from "react";
import './index.css'
import * as ReactDOM from "react-dom/client";
import { router } from './routes/Route.jsx';
import {RouterProvider,} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
    </HelmetProvider>
  </React.StrictMode>
);
