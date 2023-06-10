import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [users, setUsers] = useState(null);
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/all-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Tune Time | Manage Users</title>
      </Helmet>
      <h2> </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-orange-200 text-md">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                
                <td>
                  <span className="border px-4 py-2 rounded-md text-white font-bold hover:bg-orange-600  bg-orange-500">
                    Make Admin
                  </span>
                  <span className="border px-4 py-2 rounded-md font-bold hover:bg-orange-600  bg-orange-500 ms-2 text-white">
                    Make Instructor
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
