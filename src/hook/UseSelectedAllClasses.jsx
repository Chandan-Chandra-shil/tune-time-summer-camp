import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const UseSelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedItem = [] } = useQuery({
    queryKey: ["all-selectedClasses", user?.email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axiosSecure(
        `/all-selectedClasses?email=${user?.email}`
      );
     
      return res.data;
    },
  });

  return [selectedItem, refetch];
};
export default UseSelectedClasses;
