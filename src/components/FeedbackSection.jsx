// import { useQuery } from "@tanstack/react-query";
// import SliderRev from "./SliderRev";
// import axios from "axios";

// const FeedBackSection = () => {
//   const { data: feedbacks = [] } = useQuery({
//     queryKey: ["feedbacks"],
//     queryFn: async () => {
//       const res = await axios.get("http://localhost:5000/feedback");
//       return res.data;
//     },
//   });

//   return (
//     <div className="mt-20">
//       <div className="my-10">
//         <h2>Our Teachers Feedback About This Platform</h2>
//         <p>Universal Opportunity</p>
//       </div>

//       {/* feedback data */}
//       <div>
//         <SliderRev></SliderRev>
//       </div>
//     </div>
//   );
// };

// export default FeedBackSection;
import { useQuery } from "@tanstack/react-query";
import SliderRev from "./SliderRev";
import axios from "axios";
import { FaChalkboardTeacher } from "react-icons/fa"; // Importing icon

const FeedBackSection = () => {
  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/feedback");
      return res.data;
    },
  });

  return (
    <div className="mt-20 px-4 md:px-10 lg:px-20">
      {/* Section Heading */}
      <div className="text-center my-10">
        <div className="flex justify-center items-center gap-2 text-3xl font-bold text-gray-800">
          <FaChalkboardTeacher className="text-blue-500" />
          <h2>Student's Feedback</h2>
        </div>
        <p className="text-gray-500 mt-2 text-lg">
          Universal Opportunity for Every Educator
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Feedback Slider */}
      <div className="max-w-4xl mx-auto">
        <SliderRev feedbacks={feedbacks} />
      </div>
    </div>
  );
};

export default FeedBackSection;
