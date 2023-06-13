import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../hook/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: myPayment = [], refetch } = useQuery({
    queryKey: ["myPayment", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/my-payment?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Tune Time | Payment History</title>
      </Helmet>
      <h2 className="md:text-4xl text-center text-2xl text-orange-600 font-bold ">
        Payment History Page
      </h2>
      <div className=" w-full ">
        <div className="overflow-x-auto bg-white">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>#</th>
                <th>email</th>
                <th>Class Name</th>
                <th>price</th>
                <th>Transaction ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {myPayment.map((payment, idx) => (
                <tr key={payment._id}>
                  <th>{idx + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.className}</td>
                  <td>
                    <span className="badge badge-ghost">${payment.price}</span>
                  </td>
                  <td>
                    <span >
                      {payment.transactionId}
                    </span>
                  </td>
                  <td>
                    <span >
                      {payment.date}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;