// import React, { useContext } from "react";

// import { useQuery } from "@tanstack/react-query";
// import { AuthContext } from "../Provider/AuthProvider";
// const UseSelectedAllClasses = () => {
//   const { user } = useContext(AuthContext);
//   const { isLoading, data: selectedItem = [] } = useQuery({
//     queryKey: ["all-selectedClasses", user?.email],
//     queryFn: async () => {
//       const res = await fetch(
//         `http://localhost:5000/all-selectedClasses?email=${user?.email}`
//       );
//       return res.json();
//     },
//   });
//   return [selectedItem,isLoading];
// };

// export default UseSelectedAllClasses;
