import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ClassDetails = () => {
  const { id } = useParams();

  // Correcting the useQuery call to use an object argument
  const {
    data: classDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classDetails", id], // Array format for queryKey
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

  return (
    <div>
      <h3>{classDetails.title}</h3>
      <img src={classDetails.image} alt={classDetails.title} />
      <p>{classDetails.description}</p>
      <p>Price: ${classDetails.price}</p>
      <p>Total Enrolment: {classDetails.totalEnrolment}</p>
    </div>
  );
};

export default ClassDetails;
