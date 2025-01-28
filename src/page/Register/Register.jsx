import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { imageUpload } from "../../components/api/utils";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.files[0];

    const photoURL = await imageUpload(image);

    // Validate password
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        title: "Invalid Password",
        text: "Please use at least one uppercase, one lowercase, and one digit.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      // User Registration
      createUser(email, password).then((res) => {
        console.log(res);
        updateUserProfile(name, photoURL).then((result) => {
          axios.post(`${import.meta.env.VITE_API_URL}/users/${email}}`, {
            name,
            image: photoURL,
            email,
          });
          console.log(result);
        });
      });

      // Navigate to the home page
      navigate("/");

      // Show success alert
      Swal.fire({
        title: "Signup Successful",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      console.error(err);
      // Show error alert
      Swal.fire({
        title: "Error",
        text: err?.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-gray-400 text-2xl font-medium text-center py-4">
          Register Your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="Enter Your Photo URL"
              className="input input-bordered"
              required
            />
          </div> */}
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Enter Your Number"
              className="input input-bordered"
              required
            />
          </div> */}
          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Select Image:
            </label>
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold py-1">
          Already have an account?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
