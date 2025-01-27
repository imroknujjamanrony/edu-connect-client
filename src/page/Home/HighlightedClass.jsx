import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1 className="text-3xl font-bold mb-6">All Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sliceCourse.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">{classItem.title}</h2>
            <p className="text-sm text-gray-600">
              Name: {classItem.publisher.name}
            </p>
            <p className="text-sm text-gray-600">Price: ${classItem.price}</p>
            <p className="text-sm text-gray-600 mb-4">
              Description: {classItem.description}
            </p>
            <p className="text-sm text-gray-600">
              Total Enrollment: {classItem.enroll}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={() => navigate(`/class/${classItem._id}`)}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedClass;
