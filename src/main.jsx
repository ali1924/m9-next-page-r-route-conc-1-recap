import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Books from './components/Books/Books';
import Header from './components/Header/Header';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: 'books',
        element:<Books/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}></RouterProvider>
)
