import { useQuery } from "@tanstack/react-query";
import SliderRev from "./SliderRev";
import axios from "axios";
import { FaChalkboardTeacher } from "react-icons/fa"; // Importing icon

const FeedBackSection = () => {
  const { data: feedbacks = [] } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axios.get(
        "https://edu-connect-server-ebon.vercel.app/feedback"
      );
      return res.data;
    },
  });

  return (
    <div className=" px-4 md:px-10">
      {/* Section Heading */}
      <div className="text-center my-">
        <div className="flex justify-center items-center gap-2 text-3xl font-bold text-textLight">
          <FaChalkboardTeacher className="text-blue-500" />
          <h2>Student's Feedback</h2>
        </div>
        <p className="text-gray-200 mt-2 text-lg">
          Universal Opportunity for Every Educator
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Feedback Slider */}
      <div className="max-w-8xl gap-2">
        <SliderRev feedbacks={feedbacks} />
      </div>
    </div>
  );
};

export default FeedBackSection;
