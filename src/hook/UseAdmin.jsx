import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin = () => {
  const { user,loading} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin",user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allusers/admin/${user?.email}`);
      return res.data.admin;
     
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
