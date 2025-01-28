import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Stats = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users-stat`
      );
      return data;
    },
  });

  const { data: allClasses } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allClasses`
      );
      return data;
    },
  });

  return (
    <div className="flex justify-center space-x-8 my-10">
      {/* Card for Total Users */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-center mb-4">
          <img
            src="https://i.ibb.co.com/Ph8mKK7/5.jpg" // Replace with a relevant image URL for users
            alt="Users Icon"
            className="w-16 h-16 object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-700">
          Total Users
        </h3>
        <p className="text-4xl font-bold text-center text-blue-600 mt-4">
          {users?.length}
        </p>
      </div>

      {/* Card for Total Classes */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-center mb-4">
          <img
            src="https://i.ibb.co.com/jL4wpHj/total-recall-learning-how-to-learn-anything-faster-1024x555.png" // Replace with a relevant image URL for classes
            alt="Classes Icon"
            className="w-16 h-16 object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-700">
          Total Classes
        </h3>
        <p className="text-4xl font-bold text-center text-green-600 mt-4">
          {allClasses?.length}
        </p>
      </div>
    </div>
  );
};

export default Stats;
