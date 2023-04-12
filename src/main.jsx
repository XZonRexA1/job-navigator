import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import JobDetails from "./components/JobDetails/JobDetails";
import Header from "./components/Header/Header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "jobDetails/:jobDetailsId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch("/jobData.json")
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
