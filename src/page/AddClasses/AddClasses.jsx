import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const AddClasses = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { title, price, description, image } = formData;
      await axiosSecure.post(`/add-class`, {
        title,
        name: user.displayName,
        email: user.email,
        price,
        description,
        image,
      });

      alert("Class added successfully!");
      // Redirect to "My Classes" page
      window.location.href = "/my-classes";
    } catch (error) {
      console.error("Error adding class:", error);
      alert("Failed to add class. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add a New Class</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.displayName}
          readOnly
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          readOnly
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default AddClasses;
