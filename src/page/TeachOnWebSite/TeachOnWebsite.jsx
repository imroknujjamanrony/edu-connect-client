/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const TeachOnWebsite = ({ user }) => {
  const [status, setStatus] = useState("pending"); // Replace with actual status from the backend
  const [role, setRole] = useState("user"); // Replace with actual role from the backend
  const [formData, setFormData] = useState({
    name: "",
    image: user?.image || "", // Assuming user image is fetched and passed as prop
    email: user?.email || "", // Assuming user email is fetched and passed as prop
    experience: "beginner",
    title: "",
    category: "web development",
  });

  useEffect(() => {
    // Fetch user's role and status from backend and set them
    // setStatus(fetchedStatus);
    // setRole(fetchedRole);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend and set status to 'pending'
  };

  const handleRequestAnother = () => {
    // Handle request to apply again
    setStatus("pending");
  };

  if (role === "teacher") {
    return <p>You are already a teacher on this platform.</p>;
  }

  return (
    <div>
      {status === "pending" && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              readOnly
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              readOnly
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label>Experience:</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            >
              <option value="beginner">Beginner</option>
              <option value="experienced">Experienced</option>
              <option value="mid-level">Mid-Level</option>
            </select>
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input input-bordered w-full mb-4"
            />
          </div>
          <div>
            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            >
              <option value="web development">Web Development</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="graphic design">Graphic Design</option>
              <option value="data science">Data Science</option>
              <option value="content writing">Content Writing</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit for Review
          </button>
        </form>
      )}
      {status === "rejected" && (
        <div>
          <p>Your request has been rejected. Please try again.</p>
          <button onClick={handleRequestAnother} className="btn btn-secondary">
            Request to Another
          </button>
        </div>
      )}
    </div>
  );
};

export default TeachOnWebsite;
