import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProfile = () => {
  // Initialize the secure axios instance using the custom hook
  const axiosSecure = useAxiosSecure();

  // Fetch user profile data
  const fetchUserProfile = async () => {
    const response = await axiosSecure.get(
      `${import.meta.env.VITE_API_URL}/user`
    );
    return response.data;
  };

  // Use React Query to handle data fetching, loading, and error states
  const {
    data: profileData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile"], // Unique key for caching
    queryFn: fetchUserProfile,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full min-h-[calc(100vh-40px)] flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="w-full min-h-[calc(100vh-40px)] flex items-center justify-center">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  // No data state
  if (!profileData) {
    return (
      <div className="w-full min-h-[calc(100vh-40px)] flex items-center justify-center">
        <p>No user data found!</p>
      </div>
    );
  }

  // Render user profile
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Banner */}
        <div
          className="relative bg-cover bg-center h-60"
          style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}
        >
          <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
            src={profileData.image || "https://via.placeholder.com/150"}
            alt="User Profile"
          />
        </div>

        {/* Profile Details */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-base">
            User Role: {profileData.role || "N/A"}
          </p>
          <span className="inline-block bg-lime-500 text-white text-xs px-2 py-1 rounded mt-1">
            {profileData.role || "N/A"}
          </span>
          <h2 className="text-lg font-semibold mt-4">
            {profileData.name || profileData.displayName || "N/A"}
          </h2>
          <p className="text-gray-500">{profileData.email}</p>
        </div>

        {/* Additional Info */}
        <div className="flex justify-around mt-6 px-4 pb-6">
          {/* Name */}
          <div className="text-left">
            <p className="font-semibold text-gray-700">Name</p>
            <p className="text-gray-800">{profileData.name || "N/A"}</p>
          </div>
          {/* Email */}
          <div className="text-left">
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-gray-800">{profileData.email}</p>
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="flex justify-around px-4 pb-6">
          <button className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
