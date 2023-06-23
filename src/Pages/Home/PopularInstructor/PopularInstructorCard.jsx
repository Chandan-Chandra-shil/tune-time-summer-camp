import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularInstructorCard = ({ instructor }) => {
  const { image, name } = instructor || "";

  return (
    <div className="">
      <div className="border  justify-between mx-4 px-10 py-5 shadow items-center gap-4 flex">
        <div className="rounded-full ring  hover:ring-orange-400 ring-offset-base-100 ring-offset-2">
          <img className="rounded-full w-48 hover:rotate-2 " src={image} alt="Shoes" />
        </div>
        <div>
          <h2 className=" text-2xl font-bold"> Name: {name}</h2>
          <div className="flex md:gap-6 gap-4 mt-4">
            <h1>
              <Link to="/">
                <FaLinkedin className=" text-2xl text-orange-600 rounded "></FaLinkedin>
              </Link>
            </h1>
            <h1>
              <Link to="/">
                <FaFacebookSquare className=" text-2xl text-orange-600 rounded "></FaFacebookSquare>
              </Link>
            </h1>
            <h1>
              <Link>
                <FaYoutube className=" text-2xl text-orange-600 rounded "></FaYoutube>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
