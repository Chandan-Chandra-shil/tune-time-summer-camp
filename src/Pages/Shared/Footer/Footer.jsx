import React from 'react';
import { FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="  p-10 bg-orange-200 shadow ">
      <div className="container  mx-auto grid sm:grid-cols-1 md:grid-cols-4">
        <div>
          <p className="mb-4">
            <FaMusic className="text-orange-700 h-8 md:w-12 w-12 font-extrabold"></FaMusic>
          </p>
          <p>
            Tune Time
            <br />
          We are here
          to answer your questions and assist <br/> you in any way we can.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold ">Company</h2>
          <li className="list-none">
            <Link to="/">About</Link>
          </li>

          <li className="list-none">
            <Link to="/">Project</Link>
          </li>
          <li className="list-none">
            <Link to="/">Our Team</Link>
          </li>
          <li className="list-none">
            <Link to="/">Terms Conditions</Link>
          </li>
         
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Quick Link</h2>

          <li className="list-none">
            <Link to="/">Home</Link>
          </li>

          <li className="list-none">
            <Link to="/">Classes</Link>
          </li>
          <li className="list-none">
            <Link to="/">Instructors</Link>
          </li>
          <li className="list-none">
            <Link to="/">Terms Conditions</Link>
          </li>
          
        </div>

        <div>
          <span className="text-2xl font-bold">Newsletter</span>
          <div className="form-control md:w-80 w-72">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered md:w-full md:pr-16"
              />
              <button className="btn  bg-orange-500 text-white hover:bg-orange-600 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
