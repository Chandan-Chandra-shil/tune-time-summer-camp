import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>Tune Time | Instructors</title>
      </Helmet>
      <h1 className="text-center py-12  font-bold md:text-5xl text-4xl   bg-orange-400">
        Our Instructors
      </h1>

      <div className="overflow-x-auto  container mx-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {instructors?.map((item, index) => (
              <tr key={item._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={item.image} alt="instructor image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
