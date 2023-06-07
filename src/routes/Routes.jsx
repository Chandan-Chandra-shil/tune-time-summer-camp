import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Shared/Login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/instructors',
        element:<Instructors></Instructors>,
      },
      {
        path: '/classes',
        element:<Classes></Classes>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
    
    ]
  }
])

export default router;