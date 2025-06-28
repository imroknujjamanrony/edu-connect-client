import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: classDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classDetails", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/class/${id}`
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-success w-12 h-12"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-lg mt-8">
        Error fetching class details
      </div>
    );
  }

  const handlePurchase = (classDetails) => {
    navigate("/dashboard/payment", {
      state: { classDetails },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={classDetails.image}
              alt={classDetails.title}
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full px-4 py-2 font-semibold text-lg shadow-md">
              ${classDetails.price}
            </div>
          </div>
          <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                {classDetails.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                {classDetails.description}
              </p>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={classDetails.publisher.image}
                  alt={classDetails.publisher.name}
                  className="w-10 h-10 rounded-full border-2 border-blue-200"
                />
                <div>
                  <p className="text-gray-700 font-medium">
                    Teacher: {classDetails.publisher.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Email: {classDetails.publisher.email}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Total Enrolment: {classDetails.enroll}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePurchase(classDetails)}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md"
            >
              Pay Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassDetails;
