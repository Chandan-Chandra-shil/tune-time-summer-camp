import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
const Login = () => {
  const [show, setShow] = useState();
  const { logIn, logInGoogle } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then(() => {
        toast.success("Login Successfully");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then(() => {
        toast.success("login successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="mx-auto container  md:my-44 rounded  ">
      <Helmet>
        <title>Tune Time | Login</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body md:w-1/2 mx-auto border rounded p-10 shadow"
      >
        <h2 className="text-3xl font-bold">Please Login!</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true })}
            className="input input-bordered  "
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-lg">Password</span>
          </label>
          <input
            type={show ? "text" : "password"}
            placeholder="password"
            {...register("password", { required: true })}
            className="input input-bordered"
          />
          <p onClick={() => setShow(!show)}>
            {show ? <span>Show Password </span> : <span>Hide Password </span>}
          </p>
          {errors.password && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="border px-8 py-2 bg-orange-200 rounded font-semibold hover:bg-orange-400"
            value="Login"
          />
        </div>
        <div className="divider">or</div>
        <div
          onClick={handleGoogleLogIn}
          className=" btn btn-outline hover:bg-orange-400 flex gap-2 justify-center items-center"
        >
          <span className="text-md">Login With</span>
          <FcGoogle className="w-6 h-6"></FcGoogle>
        </div>
        <p className="text-center mt-4">
          Tune Time New?
          <Link to="/register" className="ms-2 text-orange-400">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
