import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = true;

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
          <ul className="menu p-4  w-80  h-full bg-orange-100 ">
            {/* Sidebar content here */}

            {/*  {isAdmin ? (
              <>
                <p className="text-center text-2xl font-bold mt-6">
                  Admin Dashboard
                </p>
              </>
            ) : isInstructor ? (
              <>
                <p className="text-center text-2xl font-bold mt-6">
                  Instructor Dashboard
                </p>
              </>
            ) : (
              <>
                <p className="text-center text-2xl font-bold mt-6">
                  Student Dashboard
                </p>
              </>
            )} */}

            <p className="text-center text-2xl font-bold mt-6">
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
            
                {/* instructor dashboard */}
           {/*    <li>
                <Link to="/dash-board/add-class">Add a Class</Link>
              </li>
              <li>
                <Link to="/dash-board/my-classes">My Classes</Link>
              </li> */}
          
            {/*  student dashboard */}
            <li>
              <Link to="/dash-board/selected-classes">Selected Classes</Link>
            </li>
            <li>
              <Link to="/dash-board/enrolled-classes">Enrolled Classes</Link>
            </li>
            <li>
              <Link to="/dash-board/payment-history">payment History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
