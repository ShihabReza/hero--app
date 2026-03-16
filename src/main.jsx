import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Hone from './components/Home/Home.jsx';
import Apps from './components/Apps/Apps.jsx';
const router = createBrowserRouter([
   {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component:Hone
      },
      {
        path:'/apps',
        Component:Apps
      },
      
    ]
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
