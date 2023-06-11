import React, { useContext } from "react";

import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthProvider";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const {refetch, data: selectedItem = [] } = useQuery({
    queryKey: ["all-selectedClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/all-selectedClasses?email=${user?.email}`
      );
      return res.json();
    },
  });
  const handleDelete = (item) => {
    fetch(`http://localhost:5000/all-selectedClasses/${item?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch()
          toast.success("Delete Successfully");
        }
      });
  };
  return (
    <div className="w-[70%] border md:p-10 p-5 shadow-md">
      <Helmet>
        <title>Tune Time | Selected Classes</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold mb-4 text-orange-600">
        All Selected Classes
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor Name</th>

              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectedItem?.map((item, index) => (
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
                <td>{item?.instructor_name}</td>
                <td>{item?.price}</td>
                <td>
                  <span className="border px-4 py-2 rounded-md font-bold hover:bg-orange-600  bg-orange-500">
                    Pay
                  </span>
                  <span
                    onClick={() => handleDelete(item)}
                    className="border px-4 py-2 rounded-md font-bold hover:bg-red-600  bg-red-500 ms-2 text-white"
                  >
                    Delete
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

export default SelectedClasses;
