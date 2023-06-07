import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import avatar from "../../../assets/avatar.jpg"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,logOut } = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
      toast.success('Logout Successfully')
      })
      .catch(err => {
      toast.error(err.message)
    })
  }
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : ""
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive ? "text-orange-400 font-semibold" : ""
          }
        >
          Classes
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="dash-board"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-semibold" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <div className="w-12 rounded-full">
            <img src={user?.photoURL ? user.photoURL : avatar} />
          </div>
          <li>
            <div
              onClick={handleLogOut}
              className="border px-8 py-2 hover:bg-orange-400 bg-orange-200 rounded hover:text-white font-bold"
            >
              Log out
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-orange-400 font-semibold" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-orange-50 shadow-sm">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  ">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              Tune Time
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="w-8 h-8 text-gray-600"></FaBars>
              
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                       
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Time Tune
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaTimes className="w-8 h-8 text-gray-600"></FaTimes>
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">{navItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Navbar;
