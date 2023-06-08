import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary  drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4  w-80  h-full bg-orange-200 ">
            {/* Sidebar content here */}
            <p className="text-center text-2xl font-bold mt-6">
              {" "}
              Student Dashboard
            </p>
            <div className=" divider "></div>
            <li>
              <Link>My Selected Classes</Link>
            </li>
            <li>
              <Link>My Enrolled Classes</Link>
            </li>
            <li>
              <Link>payment history</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;