import React from "react";
import error from "../../assets/error.jpg"
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container mx-auto w-[89vh]">
      <div className=" text-center mt-10 ">
        <Link
          to="/"
          className="text-5xl font-bold underline hover:text-warning px-10 rounded"
        >
          Back Home
        </Link>
        <img className=" w-full" src={error} alt="error image" />
      </div>
    </div>
  );
};

export default ErrorPage;
