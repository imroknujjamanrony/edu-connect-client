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
          {/* <Link to="/dashboard/payment">
            <button
             onClick={() => handlePurchase(classDetail)} className="btn bg-blue-500">Enroll</button>
          </Link> */}
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
