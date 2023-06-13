import React from "react";

const PopularClassCard = ({ classItem }) => {
  const { image, name, price } = classItem || "";
  return (
    <div className="card  border hover:shadow-lg mx-4 hover:bg-orange-50 ">
      <figure className="px-4 pt-10">
        <img src={image} alt="image" className="rounded-xl hover:scale-110 " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold">Price : ${price}</p>
      </div>
      
    </div>
  );
};

export default PopularClassCard;
