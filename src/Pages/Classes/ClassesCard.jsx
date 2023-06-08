import React from "react";

const ClassesCard = ({ classItem }) => {
  const { image, name, price, instructor_name, available_seats } =
    classItem || "";
  return (
    <div className="card  border hover:shadow-lg mx-4 hover:bg-orange-50 ">
      <figure className="px-4 pt-10">
        <img src={image} alt="image" className="rounded-xl hover:zoom-in " />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {name}</h2>
        <h2 className="  font-semibold">
          Available seats
          <div className="badge badge-warning ms-2">{available_seats}</div>
        </h2>

        <p className="text-md">
          <span className="text-lg font-bold"> Name</span> : {instructor_name}
        </p>

        <div className="card-actions justify-end items-center">
          <div className=""> Price: ${price}</div>

          <div className="border px-4 py-2 hover:text-white bg-orange-100 font-semibold hover:bg-orange-600 rounded">
            Selected Course
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
