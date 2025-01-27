import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMakeTeacher = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isTeacher,
    isPending: isTeacherPending,
    error,
  } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teacher-req/teacher/${user?.email}`);
      return res.data?.teacher;
    },
  });

  return [isTeacher, isTeacherPending];
};

export default useMakeTeacher;
