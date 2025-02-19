// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const MyProfile = () => {
//   // Initialize the secure axios instance using the custom hook
//   const axiosSecure = useAxiosSecure();

//   // Fetch user profile data
//   const fetchUserProfile = async () => {
//     const response = await axiosSecure.get(
//       `${import.meta.env.VITE_API_URL}/user`
//     );
//     return response.data;
//   };

//   // Use React Query to handle data fetching, loading, and error states
//   const {
//     data: profileData,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["userProfile"], // Unique key for caching
//     queryFn: fetchUserProfile,
//   });
//   console.log(profileData);

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className="w-full min-h-[calc(100vh-40px)] flex items-center justify-center">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (isError) {
//     return (
//       <div className="w-full min-h-[calc(100vh-40px)] flex items-center justify-center">
//         <p>Error: {error.message}</p>
//       </div>
//     );
//   }

//   // No data state
//   if (!profileData) {
//     return (
//       <div className="w-full min-h-[calc(100vh-40px)] flex items-center justify-center">
//         <p>No user data found!</p>
//       </div>
//     );
//   }

//   // Render user profile
//   return (
//     <div className="w-full min-h-[calc(100vh-40px)] flex flex-col items-center bg-gray-100 py-8">
//       <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Profile Banner */}
//         <div
//           className="relative bg-cover bg-center h-60"
//           style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}
//         >
//           <img
//             className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
//             src={profileData.image || "https://via.placeholder.com/150"}
//             referrerPolicy="no-referrer"
//             alt="User Profile"
//           />
//         </div>

//         {/* Profile Details */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 text-base">
//             User Role: {profileData.role || "N/A"}
//           </p>
//           <span className="inline-block bg-lime-500 text-white text-xs px-2 py-1 rounded mt-1">
//             {profileData.role || "N/A"}
//           </span>
//           <h2 className="text-lg font-semibold mt-4">
//             {profileData.name || profileData.displayName || "N/A"}
//           </h2>
//           <p className="text-gray-500">{profileData.email}</p>
//         </div>

//         {/* Additional Info */}
//         <div className="flex justify-around mt-6 px-4 pb-6">
//           {/* Name */}
//           <div className="text-left">
//             <p className="font-semibold text-gray-700">Name</p>
//             <p className="text-gray-800">{profileData.name || "N/A"}</p>
//           </div>
//           {/* Email */}
//           <div className="text-left">
//             <p className="font-semibold text-gray-700">Email</p>
//             <p className="text-gray-800">{profileData.email}</p>
//           </div>
//         </div>

//         {/* Update Profile Button */}
//         <div className="flex justify-around px-4 pb-6">
//           <button
//             className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-none shadow-lg
//        hover:bg-lime-600"
//           >
//             Update Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();

  const fetchUserProfile = async () => {
    const response = await axiosSecure.get(
      `${import.meta.env.VITE_API_URL}/user`
    );
    return response.data;
  };

  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["userProfile"], queryFn: fetchUserProfile });

  const [additionalInfo, setAdditionalInfo] = useState({
    phone: "",
    address: "",
    bio: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState("");

  const handleInputChange = (e) => {
    setAdditionalInfo({ ...additionalInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const openEditModal = (field) => {
    setFieldToEdit(field);
    setIsEditing(true);
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p>No user data found!</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative bg-cover bg-center h-60"
          style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}
        >
          <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
            src={profileData.image || "https://via.placeholder.com/150"}
            referrerPolicy="no-referrer"
            alt="User Profile"
          />
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-base">
            User Role: {profileData.role || "N/A"}
          </p>
          <h2 className="text-lg font-semibold mt-4">
            {profileData.name || profileData.displayName || "N/A"}
          </h2>
          <p className="text-gray-500">{profileData.email}</p>
        </div>

        <div className="px-6 py-4">
          <div className="flex justify-between">
            <p className="font-semibold">
              Phone: {additionalInfo.phone || "N/A"}
            </p>
            <FaEdit
              className="cursor-pointer"
              onClick={() => openEditModal("phone")}
            />
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="flex justify-between">
            <p className="font-semibold">
              Address: {additionalInfo.address || "N/A"}
            </p>
            <FaEdit
              className="cursor-pointer"
              onClick={() => openEditModal("address")}
            />
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="flex justify-between">
            <p className="font-semibold">Bio: {additionalInfo.bio || "N/A"}</p>
            <FaEdit
              className="cursor-pointer"
              onClick={() => openEditModal("bio")}
            />
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit {fieldToEdit}</h2>
            <input
              type="text"
              name={fieldToEdit}
              value={additionalInfo[fieldToEdit]}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
