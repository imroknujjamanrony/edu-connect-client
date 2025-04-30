import { useState, useEffect } from "react";
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
    location: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState("");

  // Load from localStorage
  useEffect(() => {
    const storedInfo = localStorage.getItem("additionalInfo");
    if (storedInfo) {
      setAdditionalInfo(JSON.parse(storedInfo));
    }
  }, []);

  const handleInputChange = (e) => {
    setAdditionalInfo({ ...additionalInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("additionalInfo", JSON.stringify(additionalInfo));
    setIsEditing(false);
    setFieldToEdit("");
  };

  const openEditModal = (field) => {
    setFieldToEdit(field);
    setIsEditing(true);
  };

  if (isLoading || !profileData) {
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

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-[#eaf7f9] px-4 py-10">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 max-w-sm bg-white rounded-lg shadow-md p-4 text-center">
        <div className="flex justify-center">
          <div className="relative w-28 h-28 rounded-full border-4 border-white overflow-hidden">
            <img
              src={profileData.image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-4">{profileData.name}</h2>
        <p className="text-sm text-gray-500">
          UserId: {profileData._id?.slice(0, 24)}
        </p>

        <div className="mt-4 text-left space-y-3">
          <button className="w-full text-left py-2 px-4 bg-[#e6f7ff] rounded-md font-semibold">
            Profile Info
          </button>
        </div>
      </div>

      {/* Main Profile Info */}
      <div className="w-full lg:w-3/4 mt-6 lg:mt-0 lg:ml-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#047d9d] mb-6">Profile Info</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{profileData.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium">No username</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{profileData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium flex justify-between items-center">
              {additionalInfo.location || "Dhaka, Bangladesh"}
              <FaEdit
                className="ml-2 cursor-pointer text-gray-500 hover:text-gray-800"
                onClick={() => openEditModal("location")}
              />
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium flex justify-between items-center">
              {additionalInfo.address || "N/A"}
              <FaEdit
                className="ml-2 cursor-pointer text-gray-500 hover:text-gray-800"
                onClick={() => openEditModal("address")}
              />
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Bio</p>
            <p className="font-medium flex justify-between items-center">
              {additionalInfo.bio || "Hey kiddo"}
              <FaEdit
                className="ml-2 cursor-pointer text-gray-500 hover:text-gray-800"
                onClick={() => openEditModal("bio")}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && fieldToEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4 capitalize">
              Edit {fieldToEdit}
            </h2>
            <input
              type="text"
              name={fieldToEdit}
              value={additionalInfo[fieldToEdit] || ""}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={`Enter your ${fieldToEdit}`}
            />
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
