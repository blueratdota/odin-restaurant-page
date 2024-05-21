import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StyledEngineProvider } from '@mui/material';
import Exhausts from './pages/exhausts.jsx';
import Contacts from './pages/contacts.jsx';


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "pages/:pageId",
        // element: <Contact />,
        // loader: contactLoader,
      },
      { path: "exhausts", element: <Exhausts /> },
      { path: "contacts", element: <Contacts /> }


    ]
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>,
)
