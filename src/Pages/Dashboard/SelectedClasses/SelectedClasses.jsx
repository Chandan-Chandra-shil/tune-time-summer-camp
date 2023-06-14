import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

import { Link } from "react-router-dom";
import UseSelectedAllClasses from "../../../hook/UseSelectedAllClasses";

const SelectedClasses = () => {
  const [selectedItem, refetch] = UseSelectedAllClasses();

  const handleDelete = (item) => {
    fetch(
      ` https://tune-time-server.vercel.app/all-selectedClasses/${item?._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete Successfully");
        }
      });
  };
  const handlePrice = (id) => {
    localStorage.setItem("id", id);
  };

  return (
    <div className=" border md:p-10 p-5 shadow-md">
      <Helmet>
        <title>Tune Time | Selected Classes</title>
      </Helmet>
      <h2 className="md:text-4xl text-center text-2xl text-orange-600 font-bold ">
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
                <td>${item?.price}</td>

                <td>
                  <span className="border px-4 py-2 rounded-md font-bold hover:bg-orange-600  bg-orange-500">
                    <Link to="/dash-board/payment">
                      <button onClick={() => handlePrice(item._id)}>Pay</button>
                    </Link>
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
