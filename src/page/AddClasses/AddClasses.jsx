import useAuth from "../../hooks/useAuth";

const AddClasses = () => {
  const { user } = useAuth();
  return (
    <div className="w-full min-h-screen py-10 flex flex-col justify-center items-center text-gray-800 bg-gray-100">
      <form className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#2563EB]">
          Add a New Class
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
              name="title"
              id="title"
              type="text"
              placeholder="Class Title"
              required
            />
          </div>

          {/* Name */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md bg-gray-200"
              name="name"
              id="name"
              type="text"
              value={user.displayName} // Example value, replace with dynamic value as needed
              readOnly
            />
          </div>

          {/* Email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md bg-gray-200"
              name="email"
              id="email"
              type="email"
              value={user.email} // Example value, replace with dynamic value as needed
              readOnly
            />
          </div>

          {/* Price */}
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block text-gray-600">
              Price
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
              name="price"
              id="price"
              type="number"
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-1 text-sm mt-6">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter class description..."
            className="block w-full h-32 px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white"
            name="description"
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="space-y-1 text-sm mt-6">
          <label htmlFor="image" className="block text-gray-600">
            Image
          </label>
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  required
                />
                <div className="bg-[#2563EB] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-600">
                  Upload Image
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Add Class Button */}
        <button
          type="submit"
          className="w-full p-3 mt-8 text-center font-medium text-white bg-[#2563EB] rounded-md hover:bg-lime-600 transition duration-200"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClasses;
