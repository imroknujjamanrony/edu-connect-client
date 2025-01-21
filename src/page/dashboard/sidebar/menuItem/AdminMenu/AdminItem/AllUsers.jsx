import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return data;
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (error) {
    return <div className="text-red-500">Error loading users</div>;
  }

  const handleMakeAdmin = (user) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            timer: 1500,
            title: `${user.name} is an Admin now.`,
            text: "Class Added Successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => {
        console.error("Error making admin:", err);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="font-medium">{index + 1}</td>
                <td>
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="font-medium">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg"
                  >
                    <FaUser className="text-xl" />
                    <span>Make Admin</span>
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

export default AllUsers;
