import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Erik from './Erik';

import Pagina2 from './pagina2';
import Vehicles from './Vehicles';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/Erik",
    Component: Erik,
  },
  {
    path: "/Pagina2",
    Component: Pagina2,
  },
  {
    path: "/Vehicles",
    Component: Vehicles,
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