import { Helmet } from "react-helmet-async";

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["all-users"], async () => {
    const res = await fetch("http://localhost:5000/all-users");
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/all-users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an admin`);
        }
      });
  };
  const handleMakeInstructor = (user) => {
    console.log("test...", user);
    fetch(`http://localhost:5000/admin/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Instructor`);
        }
      });
  };

  return (
    <div className="border md:p-10 p-5 shadow-md">
      <Helmet>
        <title>Tune Time | Manage Users</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold mb-4 text-orange-600">
        Registers All Users
      </h2>
      <div className="overflow-x-auto  ">
        <table className="table">
          {/* head */}
          <thead className="bg-orange-200 text-md">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>

                <td>
                  <button
                    disabled={user?.role === "admin"}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-warning btn-sm"
                  >
                    {user?.role === "admin" ? "admin" : "Make Admin"}
                  </button>
                  <button
                    disabled={user?.role === "instructor"}
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-accent btn-sm ms-2"
                  >
                    {user?.role === "instructor"
                      ? "instructor"
                      : "Make Instructor"}
                  </button>
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
