import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (error) {
    return <p>Error fetching class details</p>;
  }
  const handlePurchase = (classDetails) => {
    navigate("/dashboard/payment", {
      state: { classDetails },
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={classDetails.image}
          alt={classDetails.title}
          className="w-full md:w-1/2 object-cover"
        />
        <div className="p-6 md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">{classDetails.title}</h3>
          <p className="text-gray-700 mb-4">{classDetails.description}</p>
          <p className="text-lg font-semibold mb-2">
            Price: ${classDetails.price}
          </p>
          <div className="text-gray-600 md:flex items-center gap-4 mb-2">
            Teacher: {classDetails.publisher.name}
            <img
              src={classDetails.publisher.image}
              alt={classDetails.publisher.name}
              className="w-8 h-8 rounded-full mb-4"
            />
          </div>
          <p className="text-gray-600 mb-4">
            Email: {classDetails.publisher.email}
          </p>

          <p className="text-sm text-gray-500">
            Total Enrolment: {classDetails.enroll}
          </p>

          <button
            onClick={() => handlePurchase(classDetails)}
            className="btn btn-info w-full"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;

// import { useNavigate, useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import {
//   FaChalkboardTeacher,
//   FaEnvelope,
//   FaUsers,
//   FaMoneyBillWave,
// } from "react-icons/fa";

// const ClassDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const {
//     data: classDetails,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["classDetails", id],
//     queryFn: async () => {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/class/${id}`
//       );
//       return data;
//     },
//   });

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading loading-spinner text-info"></span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-red-500 text-lg font-medium">
//           Error fetching class details.
//         </p>
//       </div>
//     );
//   }

//   const handlePurchase = (classDetails) => {
//     navigate("/dashboard/payment", {
//       state: { classDetails },
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row bg-base-100 shadow-md rounded-2xl overflow-hidden">
//         <div className="w-full md:w-1/2">
//           <img
//             src={classDetails.image}
//             alt={classDetails.title}
//             className="w-full h-64 md:max-h-[400px] object-cover"
//           />
//         </div>

//         <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">{classDetails.title}</h2>
//             <p className="text-gray-700 mb-4">{classDetails.description}</p>

//             <p className="text-lg font-semibold text-info mb-3 flex items-center gap-2">
//               <FaMoneyBillWave /> Price: ${classDetails.price}
//             </p>

//             <div className="flex items-center gap-3 mb-2">
//               <FaChalkboardTeacher className="text-gray-600" />
//               <span className="font-medium text-gray-600">
//                 Teacher: {classDetails.publisher.name}
//               </span>
//               <img
//                 src={classDetails.publisher.image}
//                 alt={classDetails.publisher.name}
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//             </div>

//             <p className="text-gray-500 mb-2 flex items-center gap-2">
//               <FaEnvelope /> {classDetails.publisher.email}
//             </p>

//             <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
//               <FaUsers /> Total Enrolment: {classDetails.enroll}
//             </p>
//           </div>

//           <button
//             onClick={() => handlePurchase(classDetails)}
//             className="btn btn-info w-full mt-4 md:mt-0"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassDetails;
