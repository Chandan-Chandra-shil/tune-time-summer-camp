
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import useAdmin from "../hook/UseAdmin";
import UserInstructor from "../hook/UseInstructor";
const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  //  const isInstructor = false;
  const [isInstructor] = UserInstructor();
 

  return (
    <div>
      <Helmet>
        <title>Tune Time | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary  drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  w-80 h-full bg-orange-200   ">
         

            {isAdmin ? (
              <>
               
                <p className="text-center text-orange-600 text-2xl font-bold mt-6">
                  Admin Dashboard
                </p>
                <Link
                  className=" hover:text-orange-400 flex justify-center items-center gap-2 my-4"
                  to="/"
                >
                  <FaArrowLeft></FaArrowLeft>
                  <span> Back Home</span>
                </Link>
                <div className="divider"></div>
                <li>
                  <NavLink to="/dash-board/manage-classes">
                    Manege Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dash-board/manage-users">Manage Users</NavLink>
                </li>
              </>
            ) : (
              <>
                {isInstructor ? (
                  <>
                    <p className="text-center text-orange-600 text-2xl font-bold mt-6">
                      Instructor Dashboard
                    </p>
                    <Link
                      className=" hover:text-orange-400 flex justify-center items-center gap-2 my-4"
                      to="/"
                    >
                      <FaArrowLeft></FaArrowLeft>
                      <span> Back Home</span>
                    </Link>
                    <div className="divider"></div>
                    <li>
                      <NavLink to="/dash-board/add-class">Add a Class</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dash-board/my-classes">My Classes</NavLink>
                    </li>
                  </>
                ) : (
                  <>
            
                    <p className="text-center text-orange-600 text-2xl font-bold mt-6">
                      Student Dashboard
                    </p>
                    <Link
                      className=" hover:text-orange-400 flex justify-center items-center gap-2 my-4"
                      to="/"
                    >
                      <FaArrowLeft></FaArrowLeft>
                      <span> Back Home</span>
                    </Link>
                    <div className="divider"></div>
                    <li>
                      <NavLink to="/dash-board/selected-classes">
                        Selected Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dash-board/enrolled-classes">
                        Enrolled Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dash-board/payment-history">
                        payment History
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
