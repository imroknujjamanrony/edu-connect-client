import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HighlightedClass = () => {
  const navigate = useNavigate();
  const { data: allClasses, isLoading } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/allClasses`
      );
      return data;
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  const approvedCourses = allClasses?.filter(
    (item) => item.status === "approved"
  );

  // Sort by enrollment count in descending order
  const sortedCourses = approvedCourses?.sort((a, b) => b.enroll - a.enroll);

  // Take the top 6 courses with highest enrollment
  const sliceCourse = sortedCourses?.slice(0, 6);

  return (
    <div id="course" className="mt-12 w-11/12 mx-auto ">
      <h1 className="text-3xl text-center font-bold mb-6">All Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sliceCourse.map((classItem, index) => (
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
            <h2 className="text-xl text-gray-700 font-bold">
              {classItem.title}
            </h2>

            <p className="text-sm text-gray-600">Price: ${classItem.price}</p>
            <p className="text-sm text-gray-600 mb-4">
              Description: {classItem.description}
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

export default HighlightedClass;
