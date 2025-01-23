// import { useState } from "react";
// import useAuth from "../../hooks/useAuth";

// const TeachOnWebsite = () => {
//   const { user } = useAuth();
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     category: "",
//     experience: "beginner",
//   });

//   const categories = [
//     "Web Development",
//     "Digital Marketing",
//     "Graphic Design",
//     "Data Science",
//     "Mobile App Development",
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted: ", formData);
//     // Add your submit logic here
//   };

//   return (
//     <div className="flex justify-center py-8 items-center  min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <div className="flex justify-center">
//           <img
//             className="w-24 h-24 rounded-full"
//             src={user?.photoURL}
//             alt="Profile"
//           />
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               value={user?.email}
//               readOnly
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Enter a title"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Experience
//             </label>
//             <select
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             >
//               <option value="beginner">Beginner</option>
//               <option value="mid-level">Mid-Level</option>
//               <option value="experienced">Experienced</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Category
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             >
//               <option value="">Select a category</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit for Review
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TeachOnWebsite;

//

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TeachOnWebsite = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    category: "",
    experience: "beginner",
  });

  const categories = [
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
    "Data Science",
    "Mobile App Development",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      email: user?.email,
      photoURL: user?.photoURL,
    };

    try {
      const response = await axiosSecure.post("/teacher-req", dataToSubmit);
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Your application has been submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          name: "",
          title: "",
          category: "",
          experience: "beginner",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex justify-center py-8 items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center">
          <img
            className="w-24 h-24 rounded-full"
            src={user?.photoURL}
            alt="Profile"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter a title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="beginner">Beginner</option>
              <option value="mid-level">Mid-Level</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeachOnWebsite;
