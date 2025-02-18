import { useState } from "react";
import { useLocation } from "react-router-dom";
import ModalFeedBack from "../page/modal/ModalFeedBack";

const MyEnrollDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { enrolledClass } = location.state || {};
  console.log(enrolledClass);
  const assignment = enrolledClass?.myClass?.assignments;
  console.log(assignment);
  if (!assignment) {
    return (
      <p className="text-center text-gray-500">
        Assignment is not arrived yet.
      </p>
    );
  }

  return (
    <div>
      <h4 className="text-3xl text-green-500 font-bold flex text-center justify-center">
        My Assignments
      </h4>
      <div className="flex justify-center items-center">
        <button
          className="btn btn-neutral text-xl"
          onClick={() => setIsModalOpen(true)}
        >
          + Feedback Us
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Assignment Title</th>
              <th>Description:</th>
              <th>Total Marks</th>
              <th>Last Date:</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>{assignment.title}</td>
              <td>{assignment.description}</td>
              <td>{assignment.marks}</td>
              <td>{assignment.date}</td>
              <td>
                <button className="btn btn-primary">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalFeedBack
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MyEnrollDetails;
