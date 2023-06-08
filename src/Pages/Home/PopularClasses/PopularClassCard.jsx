import React from 'react';

const PopularClassCard = ({ classItem }) => {
  const { image, name ,price} = classItem || ""
  return (
    <div className="card  border hover:shadow-lg mx-4 hover:bg-orange-50 ">
      <figure className="px-4 pt-10">
        <img
          src={image}
          alt="image"
          className="rounded-xl hover:zoom-in "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className='text-lg font-semibold'>Price : ${price}</p>
        <div className="card-actions">
          <span className='border md:px-8 px-6 py-2 hover:text-white bg-orange-200 font-semibold hover:bg-orange-600 rounded'>Selected</span>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;