import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Erik from './Erik';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/erik",
    Component: Erik,
  },
  {
    path: "*",
    Component: App,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);