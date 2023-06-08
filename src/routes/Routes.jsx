import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";

import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import Dashboard from "../layout/Dashboard";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../Pages/Dashboard/Enrolled Classes/EnrolledClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dash-board",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
       {
        path: "enrolled-classes",
        element:<EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'payment-history',
        element:<PaymentHistory></PaymentHistory>
      },
     
    ],
  },
]);

export default router;
