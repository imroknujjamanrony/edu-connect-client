import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "./ClassCard";

const MyClass = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data: classItems, isLoading } = useQuery({
    queryKey: ["myClasses"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/myClasses`);
      return data;
    },
  });
  if (isLoading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

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
        {classItems.map((classItem) => (
          <ClassCard
            key={classItem.id}
            classItem={classItem}
            onUpdate={handleUpdateClick}
            onDelete={handleDeleteClick}
            onSeeDetails={handleSeeDetailsClick}
          />
        ))}
      </div>

      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Update Class</h2>
            <form onSubmit={handleFormSubmit}>{/* Form fields */}</form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClass;
