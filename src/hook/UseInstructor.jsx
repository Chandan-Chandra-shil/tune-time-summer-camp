import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";

const UserInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const res = await axiosSecure.get(
        `/allusers/admin/instructor/${user?.email}`
      );

      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default UserInstructor;
