import React from "react";

const PopularInstructorCard = ({ instructor }) => {
  const { image, name } = instructor || "";

  return (
    <div className="">
      <div className="border justify-between mx-4 px-10 py-5 shadow items-center gap-4 flex">
        <div className="rounded-full ring  hover:ring-orange-400 ring-offset-base-100 ring-offset-2">
          <img className="rounded-full w-56 " src={image} alt="Shoes" />
        </div>
        <div>
          <h2 className="card-title text-2xl font-bold"> Name: {name}</h2>
          
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
