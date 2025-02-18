// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const SliderRev = () => {
//   const {
//     data: feedbacks = [],
//     error,
//     isLoading,
//   } = useQuery({
//     queryKey: ["feedbacks"],
//     queryFn: async () => {
//       const res = await axios.get("http://localhost:5000/feedback");
//       return res.data;
//     },
//   });

//   return (
//     <div className="mt-20 max-w-screen-2xl mx-auto">
//       <Carousel
//         arrows={true}
//         autoPlay={true}
//         autoPlaySpeed={5000}
//         infinite
//         responsive={responsive}
//       >
//         {isLoading ? (
//           <p>Loading feedback...</p>
//         ) : error ? (
//           <p>Error loading feedback: {error.message}</p>
//         ) : feedbacks.length === 0 ? (
//           <p>No feedback available at the moment.</p>
//         ) : (
//           feedbacks.map((feedback, index) => (
//             <div key={index}>
//               <div className="bg-[#140c1c] p-6 rounded shadow-lg mb-4">
//                 <div className="flex justify-center items-center mb-2">
//                   <img
//                     src={feedback.user.image}
//                     alt={`${feedback.user.name}'s profile`}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="text-xl font-semibold text-slate-50">
//                       {feedback.user.name}
//                     </h3>
//                     <p className="text-gray-500">{feedback.user.email}</p>
//                   </div>
//                 </div>
//                 <p className="text-slate-300 text-center">
//                   {feedback.feedback.slice(0, 150)}
//                 </p>
//                 <div className="rating mt-2 flex justify-center items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <span
//                       key={i}
//                       className={`mask mask-star-2 bg-orange-400 ${
//                         i < feedback.rating
//                           ? "text-orange-400"
//                           : "text-gray-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </Carousel>
//     </div>
//   );
// };

// export default SliderRev;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const SliderRev = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
  }, []);

  const {
    data: feedbacks = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/feedback");
      return res.data;
    },
  });

  return (
    <div className="mt-20 max-w-screen-2xl mx-auto px-4">
      <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
        responsive={responsive}
      >
        {isLoading ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            Loading feedback...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error.message}</p>
        ) : feedbacks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No feedback available at the moment.
          </p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div key={index} className="p-4">
              <div
                className={`p-6 rounded-lg shadow-lg transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                }`}
              >
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={feedback.user.image}
                    alt={`${feedback.user.name}'s profile`}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {feedback.user.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {feedback.user.email}
                    </p>
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-gray-700 dark:text-gray-300 text-center italic">
                  "{feedback.feedback.slice(0, 150)}..."
                </p>

                {/* Star Rating */}
                <div className="mt-3 flex justify-center items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < feedback.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default SliderRev;
