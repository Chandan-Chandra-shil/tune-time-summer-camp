import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
   
     
    <div className="mx-auto container  md:my-6 rounded  ">
      <Helmet>
        <title>Tune Time | Register</title>
      </Helmet>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body md:w-1/2 mx-auto border rounded p-10 shadow"
        >
          <h2 className="text-3xl font-bold">Please Register!</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
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
              type="password"
              placeholder="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 10,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
              })}
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-600">
                password must be six characters
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="text-red-600">
                password must be less than 10 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-600">
                password must have one uppercase and one special characters
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-lg">Conform Password</span>
            </label>
            <input
              type="password"
              placeholder="conform password"
              className="input input-bordered"
              {...register("conform", { required: true })}
            />
            {errors.conform && (
              <span className="text-red-600">
                Password must be six characters
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-lg">Photo URL</span>
            </label>
            <input
              type="photo"
              placeholder="photo url"
              className="input input-bordered"
              {...register("photo", { required: true })}
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
            Already Have an Account?
            <Link to="/login" className="ms-2 text-orange-400">
              Login
            </Link>
          </p>
        </form>
      </div>
   
  );
};

export default Register;
