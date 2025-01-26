import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClassCard from "../dashboard/sidebar/menuItem/teacherItem/ClassCard";

const HighlightedClass = () => {
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

  const approvedCourses = allClasses?.filter(
    (item) => item.status === "approved"
  );
  const sliceCourse = approvedCourses?.slice(0, 6);

  //   console.log(approvedCourses);
  if (isLoading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

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
              Total Enrolment: {classItem.totalEnrolment}
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

//

// import React from "react";
// import TitleSection from "../../../components/TitleSection/TitleSection";
// import useCourse from "../../../hooks/useCourse";
// import ClassCard from "../../../components/ClassCard/ClassCard";

// const HighlightClasses = () => {
//   const [course] = useCourse();
//   // console.log(course);

//   return (
//     <div>
//       <div className="my-10">
//         <TitleSection
//           heading={"Highest Enrollment This Session"}
//           subHeading={"Most Demandable Classes"}></TitleSection>
//       </div>

//       <div>
//         <h2 className="text-3xl text-center">Highest Enrolled Classes</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
//           {sliceCourse.map((item, idx) => (
//             <ClassCard key={item._id} item={item}></ClassCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HighlightClasses;
