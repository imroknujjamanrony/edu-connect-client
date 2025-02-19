import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import { motion } from "framer-motion";

const AllClasses = () => {
  const navigate = useNavigate();
  const { data: allClasses, isLoading } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allClasses`
      );
      return data;
    },
  });

  const [sortedClasses, setSortedClasses] = useState([]);

  if (isLoading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  // Filter approved classes
  const approvedClasses = allClasses.filter(
    (classItem) => classItem.status === "approved"
  );

  const sortAscending = () => {
    const sorted = [...approvedClasses].sort((a, b) => a.price - b.price);
    setSortedClasses(sorted);
  };

  const sortDescending = () => {
    const sorted = [...approvedClasses].sort((a, b) => b.price - a.price);
    setSortedClasses(sorted);
  };

  // Use sortedClasses if sorting is applied, otherwise use approvedClasses
  const displayClasses =
    sortedClasses.length > 0 ? sortedClasses : approvedClasses;

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl ml-8 font-bold mb-6">All Classes</h1>
      <div className="flex justify-end mr-8 mb-4">
        <button
          onClick={sortAscending}
          className="btn btn-outline bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-none shadow-lg mr-2 flex items-center"
        >
          <FaSortAmountUp className="mr-2" /> Ascending Price
        </button>
        <button
          onClick={sortDescending}
          className="btn btn-outline bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-none shadow-lg flex items-center"
        >
          <FaSortAmountDown className="mr-2" /> Descending Price
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayClasses.map((classItem, index) => (
          <motion.div
            key={classItem._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
          >
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl text-gray-600 font-bold">
              {classItem.title}
            </h2>
            <p className="text-sm text-gray-600">
              Name: {classItem.publisher.name}
            </p>
            <p className="text-sm text-gray-600">Price: ${classItem.price}</p>
            <p className="text-sm text-gray-600 mb-4">
              Description: {classItem.description}
            </p>
            <p className="text-sm text-gray-600">
              Total Enrolment: {classItem.enroll}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => navigate(`/class/${classItem._id}`)}
            >
              Enroll
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
