import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

// Set the root element for accessibility
Modal.setAppElement("#root");

const ModalFeedBack = ({ isOpen, onRequestClose }) => {
  // const { user, loading } = useContext(authContext);
  const { user, loading } = useAuth();
  const [feedback, setFeedback] = useState("");
  // const axiosPublic = useAxiosPublic();
  const [rating, setRating] = useState(0);

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const feedbackData = {
      feedback: feedback,
      rating: rating,
      user: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
    };
    try {
      const response = await axios.post(
        "https://edu-connect-server-ebon.vercel.app/feedback",
        feedbackData
      ); // Send feedback data to the server
      Swal.fire({
        title: "Feedback Sent!",
        icon: "success",
        draggable: true,
      });
      console.log("Feedback sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending feedback:", error);
    }

    console.log("Feedback Data:", feedbackData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Feedback Modal"
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center"
    >
      <div
        className="bg-white p-6 rounded shadow-lg max-w-md w-full "
        inert={isOpen ? null : "inert"}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-xl mb-2 text-black block" htmlFor="feedback">
              Your Valuable Feedback:
            </label>
            <textarea
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Say Whatever You Want"
              className="textarea textarea-bordered textarea-sm w-full max-w-xs"
            />
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                  value={index + 1}
                  checked={rating === index + 1}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <button className="btn btn-accent mr-2" type="submit">
              Submit
            </button>
            <button
              className="btn btn-error"
              type="button"
              onClick={onRequestClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalFeedBack;
