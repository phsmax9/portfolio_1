import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    basename: "/pofolpage1.io",
    path: "/", // 경로 설정
    element: <App year="all" />, // 해당 경로에 나올 JSX 설정
  },
  {
    basename: "/pofolpage1.io",
    path: "/all", // 경로 설정
    element: <App year="all" />, // 해당 경로에 나올 JSX 설정
  },
  {
    basename: "/pofolpage1.io",
    path: "/2019", // 경로 설정
    element: <App year="2019" />, // 해당 경로에 나올 JSX 설정
  },
  {
    basename: "/pofolpage1.io",
    path: "/2018", // 경로 설정
    element: <App year="2018" />, // 해당 경로에 나올 JSX 설정
  },
  {
    basename: "/pofolpage1.io",
    path: "/2017", // 경로 설정
    element: <App year="2017" />, // 해당 경로에 나올 JSX 설정
  },
  {
    basename: "/pofolpage1.io",
    path: "/2016", // 경로 설정
    element: <App year="2016" />, // 해당 경로에 나올 JSX 설정
  },
  {
    basename: "/pofolpage1.io",
    path: "/2015", // 경로 설정
    element: <App year="2015" />, // 해당 경로에 나올 JSX 설정
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
