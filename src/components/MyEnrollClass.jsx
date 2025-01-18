import { useEffect, useState } from "react";

const MyEnrollClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch the enrolled classes from the server or a mock data source
    const fetchClasses = async () => {
      // Replace the following URL with your actual API endpoint
      const response = await fetch("/api/enrolled-classes");
      const data = await response.json();
      setClasses(data);
    };

    fetchClasses();
  }, []);

  return (
    <div className="my-enroll-class grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className="card bg-white shadow-lg rounded-lg p-4"
        >
          <img
            src={classItem.image}
            alt={classItem.title}
            className="h-48 w-full object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{classItem.title}</h2>
            <p className="text-gray-600 mb-4">Posted by: {classItem.name}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEnrollClass;
