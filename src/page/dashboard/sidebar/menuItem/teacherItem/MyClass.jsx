// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

// const MyClass = ({ classes }) => {
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
//   const navigate = useNavigate(); // Use navigate instead of history

//   const handleUpdateClick = (classItem) => {
//     setSelectedClass(classItem);
//     setUpdateModalOpen(true);
//   };

//   const handleDeleteClick = (classId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won’t be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Simulate delete action
//         const updatedClasses = classes.filter(
//           (classItem) => classItem.id !== classId
//         );
//         // Update state or make API call to delete
//         Swal.fire("Deleted!", "Your class has been deleted.", "success");
//       }
//     });
//   };

//   const handleSeeDetailsClick = (classId) => {
//     navigate(`/dashboard/my-class/${classId}`); // Use navigate instead of history.push
//   };

//   const handleModalClose = () => {
//     setUpdateModalOpen(false);
//     setSelectedClass(null);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Simulate update action
//     handleModalClose();
//     Swal.fire("Updated!", "Your class has been updated.", "success");
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">My Classes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {classes.map((classItem) => (
//           <div key={classItem.id} className="bg-white p-6 rounded-lg shadow-md">
//             <img
//               src={classItem.image}
//               alt={classItem.title}
//               className="w-full h-32 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-xl font-bold">{classItem.title}</h2>
//             <p className="text-sm text-gray-600">Name: {classItem.name}</p>
//             <p className="text-sm text-gray-600">Email: {classItem.email}</p>
//             <p className="text-sm text-gray-600">Price: ${classItem.price}</p>
//             <p className="text-sm text-gray-600 mb-4">
//               Description: {classItem.description}
//             </p>
//             <p
//               className={`text-sm font-semibold mb-4 ${
//                 classItem.status === "approved"
//                   ? "text-green-500"
//                   : "text-yellow-500"
//               }`}
//             >
//               Status: {classItem.status}
//             </p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//               onClick={() => handleUpdateClick(classItem)}
//             >
//               Update
//             </button>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
//               onClick={() => handleDeleteClick(classItem.id)}
//             >
//               Delete
//             </button>
//             <button
//               className={`bg-green-500 text-white px-4 py-2 rounded-md ${
//                 classItem.status !== "approved" &&
//                 "opacity-50 cursor-not-allowed"
//               }`}
//               disabled={classItem.status !== "approved"}
//               onClick={() => handleSeeDetailsClick(classItem.id)}
//             >
//               See Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {isUpdateModalOpen && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Update Class</h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={selectedClass?.title}
//                   onChange={(e) =>
//                     setSelectedClass({
//                       ...selectedClass,
//                       title: e.target.value,
//                     })
//                   }
//                   className="w-full mt-1 p-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Price
//                 </label>
//                 <input
//                   type="text"
//                   name="price"
//                   value={selectedClass?.price}
//                   onChange={(e) =>
//                     setSelectedClass({
//                       ...selectedClass,
//                       price: e.target.value,
//                     })
//                   }
//                   className="w-full mt-1 p-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={selectedClass?.description}
//                   onChange={(e) =>
//                     setSelectedClass({
//                       ...selectedClass,
//                       description: e.target.value,
//                     })
//                   }
//                   className="w-full mt-1 p-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Image URL
//                 </label>
//                 <input
//                   type="text"
//                   name="image"
//                   value={selectedClass?.image}
//                   onChange={(e) =>
//                     setSelectedClass({
//                       ...selectedClass,
//                       image: e.target.value,
//                     })
//                   }
//                   className="w-full mt-1 p-2 border rounded-md"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md"
//               >
//                 Update
//               </button>
//               <button
//                 type="button"
//                 onClick={handleModalClose}
//                 className="ml-4 text-gray-500"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyClass;

//

import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyClass = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const navigate = useNavigate();

  // Sample fake data for classes
  const classes = [
    {
      id: 1,
      title: "Mathematics 101",
      name: "John Doe",
      email: "john.doe@example.com",
      price: 100,
      description: "Basic mathematics class for beginners.",
      image: "https://via.placeholder.com/150",
      status: "approved",
    },
    {
      id: 2,
      title: "Science for Kids",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      price: 150,
      description: "Fun and interactive science class for children.",
      image: "https://via.placeholder.com/150",
      status: "pending",
    },
    {
      id: 3,
      title: "History of Art",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      price: 200,
      description: "Explore the history of art from ancient to modern times.",
      image: "https://via.placeholder.com/150",
      status: "approved",
    },
  ];

  const handleUpdateClick = (classItem) => {
    setSelectedClass(classItem);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (classId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your class has been deleted.", "success");
      }
    });
  };

  const handleSeeDetailsClick = (classId) => {
    navigate(`/dashboard/my-class/${classId}`);
  };

  const handleModalClose = () => {
    setUpdateModalOpen(false);
    setSelectedClass(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleModalClose();
    Swal.fire("Updated!", "Your class has been updated.", "success");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">{classItem.title}</h2>
            <p className="text-sm text-gray-600">Name: {classItem.name}</p>
            <p className="text-sm text-gray-600">Email: {classItem.email}</p>
            <p className="text-sm text-gray-600">Price: ${classItem.price}</p>
            <p className="text-sm text-gray-600 mb-4">
              Description: {classItem.description}
            </p>
            <p
              className={`text-sm font-semibold mb-4 ${
                classItem.status === "approved"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              Status: {classItem.status}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => handleUpdateClick(classItem)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => handleDeleteClick(classItem.id)}
            >
              Delete
            </button>
            <button
              className={`bg-green-500 text-white px-4 py-2 rounded-md ${
                classItem.status !== "approved" &&
                "opacity-50 cursor-not-allowed"
              }`}
              disabled={classItem.status !== "approved"}
              onClick={() => handleSeeDetailsClick(classItem.id)}
            >
              See Details
            </button>
          </div>
        ))}
      </div>

      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Update Class</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={selectedClass?.title || ""}
                  onChange={(e) =>
                    setSelectedClass({
                      ...selectedClass,
                      title: e.target.value,
                    })
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={selectedClass?.price || ""}
                  onChange={(e) =>
                    setSelectedClass({
                      ...selectedClass,
                      price: e.target.value,
                    })
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={selectedClass?.description || ""}
                  onChange={(e) =>
                    setSelectedClass({
                      ...selectedClass,
                      description: e.target.value,
                    })
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={selectedClass?.image || ""}
                  onChange={(e) =>
                    setSelectedClass({
                      ...selectedClass,
                      image: e.target.value,
                    })
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleModalClose}
                className="ml-4 text-gray-500"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClass;
