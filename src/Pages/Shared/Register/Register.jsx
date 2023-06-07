import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="mx-auto container  md:my-6 rounded  ">
      <form className="card-body md:w-1/2 mx-auto border rounded p-10 shadow">
        <h2 className="text-3xl font-bold">Please Register!</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered  "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            required
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
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-lg"> Conform Password</span>
          </label>
          <input
            type="text"
            placeholder=" conform password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-lg">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="border px-8 py-2 bg-orange-200 rounded font-semibold hover:bg-orange-400"
            value="Register"
          />
        </div>
        <div className="divider">or</div>
        <div className=" btn btn-outline hover:bg-orange-400 flex gap-2 justify-center items-center">
          <span className="text-md">Login With</span>
          <FcGoogle className="w-6 h-6"></FcGoogle>
        </div>
        <p className="text-center mt-4">
          Already Have an Account?<Link to="/login" className="ms-2 text-orange-400">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
