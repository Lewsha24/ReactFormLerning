import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorComponent from "./ErrorComponent";
import Signin from "./Signin";
import Signup from "./Signin";
import TextInputComponent from "./TextInputComponent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorComponent/>
    },
    {
        path: '/Signin',
        element: <Signin/>,
        errorElement: <ErrorComponent/>
    },
    {
        path: '/Signup',
        element: <Signup/>,
        errorElement: <ErrorComponent/>
    },
    {
        path: '/textInputComponent',
        element: <TextInputComponent/>,
        errorElement: <ErrorComponent/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
