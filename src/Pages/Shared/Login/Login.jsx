import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="mx-auto container  md:my-44 rounded  ">
      <form className="card-body md:w-1/2 mx-auto border rounded p-10 shadow">
        <h2 className="text-3xl font-bold">Please Login!</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered  "
          />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-lg">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="border px-8 py-2 bg-orange-200 rounded font-semibold hover:bg-orange-400"
            value="Login"
          />
        </div>
        <div className="divider">or</div>
        <div className=" btn btn-outline hover:bg-orange-400 flex gap-2 justify-center items-center">
          <span className="text-md">Login With</span>
          <FcGoogle className="w-6 h-6"></FcGoogle>
        </div>
        <p className="text-center mt-4">Tune Time New?<Link to="/register" className="ms-2 text-orange-400">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
