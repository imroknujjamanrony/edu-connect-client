// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AllClasses = () => {
//   const navigate = useNavigate();
//   const { data: allClasses, isLoading } = useQuery({
//     queryKey: ["allClasses"],
//     queryFn: async () => {
//       const { data } = await axios(
//         `${import.meta.env.VITE_API_URL}/allClasses`
//       );
//       return data;
//     },
//   });

//   if (isLoading) {
//     return <span className="loading loading-spinner text-success"></span>;
//   }

//   // Filter approved classes
//   const approvedClasses = allClasses.filter(
//     (classItem) => classItem.status === "approved"
//   );
//   console.log(approvedClasses);
//   return (
//     <div>
//       <h1 className="text-3xl ml-8 font-bold mb-6">All Classes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {approvedClasses.map((classItem) => (
//           <div
//             key={classItem._id}
//             className="bg-white p-6 rounded-lg shadow-md"
//           >
//             <img
//               src={classItem.image}
//               alt={classItem.title}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-xl font-bold">{classItem.title}</h2>
//             <p className="text-sm text-gray-600">
//               Name: {classItem.publisher.name}
//             </p>
//             <p className="text-sm text-gray-600">Price: ${classItem.price}</p>
//             <p className="text-sm text-gray-600 mb-4">
//               Description: {classItem.description}
//             </p>
//             <p className="text-sm text-gray-600">
//               Total Enrolment: {classItem.enroll}
//             </p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
//               onClick={() => navigate(`/class/${classItem._id}`)}
//             >
//               Enroll
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllClasses;

//after added two ascending button

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

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
    <div>
      <h1 className="text-3xl ml-8 font-bold mb-6">All Classes</h1>
      <div className="flex justify-end mr-8 mb-4">
        <button
          onClick={sortAscending}
          className="btn btn-outline btn-success mr-2"
        >
          <FaSortAmountUp className="mr-2" /> Ascending Price
        </button>
        <button onClick={sortDescending} className="btn btn-outline btn-error">
          <FaSortAmountDown className="mr-2" /> Descending Price
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayClasses.map((classItem) => (
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
              Total Enrolment: {classItem.enroll}
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

export default AllClasses;
