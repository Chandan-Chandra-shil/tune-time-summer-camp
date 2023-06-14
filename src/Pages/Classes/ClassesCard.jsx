import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const ClassesCard = ({ classItem }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { image, name, price, instructor_name, available_seats, _id } =
    classItem || "";

  const handleSelectedClasses = (classItem) => {
    if (user && user.email) {
      const selectedItems = {
        selectedId: _id,
        image,
        name,
        price,
        instructor_name,
        available_seats,
        email: user.email,
      };

      fetch(" https://tune-time-server.vercel.app/all-selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedItems),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("selected successfully");
          }
        });
    } else {
      toast.error("Please login then select the class");
      navigate("/login", { state: { from: location } });
    }
  };

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
          <span className="text-lg "> Instructor Name</span> : {instructor_name}
        </p>

        <div className="card-actions justify-end items-center">
          <div className=""> Price: ${price}</div>

          <div
            onClick={() => handleSelectedClasses(classItem)}
            className="border px-4 py-2 hover:text-white bg-orange-100 font-semibold hover:bg-orange-600 rounded"
          >
            Select
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
