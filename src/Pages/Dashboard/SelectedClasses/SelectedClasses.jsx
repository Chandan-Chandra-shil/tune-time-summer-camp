import React from 'react';
import UseSelectedAllClasses from '../../../hook/UseSelectedAllClasses';
import { Helmet } from 'react-helmet-async';

const SelectedClasses = () => {
  const [selectedItem] = UseSelectedAllClasses()
  // const {image, name, price, instructor_name, available_seats ,_id}
  return (
    <div>
      <Helmet>
        <title>Tune Time | Selected Classes</title>
      </Helmet>
      <h2>Selected Classes </h2>
      <p>{selectedItem?.length}</p>
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
            {selectedItem.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructor_name}</td>
                <td>{item.price}</td>
                <td>
                  <span className="border px-4 py-2 rounded-md font-bold hover:bg-orange-600  bg-orange-500">
                    Pay
                  </span>
                  <span className="border px-4 py-2 rounded-md font-bold hover:bg-red-600  bg-red-500 ms-2 text-white">
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