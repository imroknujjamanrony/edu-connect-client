import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TeacherSection = () => {
  const {
    data: allTeachers = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-teacher"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/all-teacher`
        );
        return response.data;
      } catch (err) {
        console.error("API Error:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        throw new Error(err.message || "Failed to fetch teachers");
      }
    },
  });

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            Meet Our Teachers
          </h1>
          <p className="text-white text-lg">
            Discover the experts who will guide you to success
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center p-6 bg-red-100 text-red-700 rounded-lg">
            <p className="text-lg font-medium">
              Error: {error.message || "Unable to load teachers"}
            </p>
            <p className="text-sm mt-2">
              Check the console for more details or try again.
            </p>
            <button
              onClick={refetch}
              className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Teachers Grid */}
        {!isLoading && !error && allTeachers.length === 0 && (
          <div className="text-center p-6 bg-gray-100 text-gray-600 rounded-lg">
            <p className="text-lg font-medium">No teachers found.</p>
            <p className="text-sm mt-2">
              It looks like there are no teachers available at the moment.
            </p>
          </div>
        )}

        {!isLoading && !error && allTeachers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTeachers.map((teacher) => (
              <div
                key={teacher._id}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <img
                    className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
                    src={teacher.photoURL || "https://via.placeholder.com/150"}
                    alt={teacher.name || "Teacher"}
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 text-center">
                  {teacher.name || "Unknown"}
                </h2>
                <p className="text-gray-600 text-center mt-1">
                  {teacher.title || "No title"}
                </p>
                <p className="text-gray-500 text-center text-sm mt-1 capitalize">
                  {teacher.experience || "Unknown"} Level
                </p>
                <p className="text-gray-500 text-center text-sm mt-1">
                  {teacher.category || "No category"}
                </p>
                <p className="text-gray-600 text-center text-sm mt-2 truncate">
                  {teacher.email || "No email"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherSection;
