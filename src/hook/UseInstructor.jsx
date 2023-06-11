import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";

const UserInstructor = () => {
  const { user,loading} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!loading && user?.email) {
        const res = await axiosSecure.get(`/allusers/admin/instructor/${user?.email}`
        );
        return res.data.instructor;
      }
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default UserInstructor;
