import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="w-full min-h-[calc(100vh-40px)]  flex flex-col items-center bg-gray-100 py-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          className="relative bg-cover bg-center h-60"
          style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}
        >
          <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2  w-full h-full rounded-lg border-4 border-white"
            src={user?.photoURL}
            alt="User Profile"
          />
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">User ID: {user?.userId}</p>
          <span className="inline-block bg-lime-500 text-white text-xs px-2 py-1 rounded mt-1">
            {user?.role}
          </span>
          <h2 className="text-lg font-semibold mt-4">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
        <div className="flex justify-around mt-6 px-4 pb-6">
          <div className="text-left">
            <p className="font-semibold text-gray-700">Name</p>
            <p className="text-gray-800">{user?.displayName}</p>
          </div>
          <div className="text-left">
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-gray-800">{user?.email}</p>
          </div>
        </div>
        <div className="flex justify-around px-4">
          <button className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
