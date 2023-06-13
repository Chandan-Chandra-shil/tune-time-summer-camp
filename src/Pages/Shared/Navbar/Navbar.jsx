import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaMusic, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import avatar from "../../../assets/avatar.jpg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
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
            <img
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatar}
            />
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
      <div className=" px-4 py-5 container mx-auto  ">
        <div className="relative flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide flex justify-center items-center gap-2 text-gray-800">
              <FaMusic className="text-orange-700 font-extrabold"></FaMusic>
              Tune Time
            </span>
          </Link>

          <ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="w-8 h-8 text-orange-600"></FaBars>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold flex justify-center items-center gap-2 tracking-wide text-gray-800 uppercase">
                          <FaMusic className="text-orange-700 font-extrabold"></FaMusic>
                          Time Tune
                        </span>
                      </Link>
                    </div>

                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaTimes className="w-8 h-8 text-orange-600"></FaTimes>
                      </button>
                    </div>
                  </div>

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
