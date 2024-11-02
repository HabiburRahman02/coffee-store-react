import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/pages/Home/Home.jsx';
import Coffees from './components/pages/Coffees/Coffees.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
