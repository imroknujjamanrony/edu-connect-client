import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { LogIn, signInWithGoogle, loading } = useAuth();
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // Log in
    try {
      await LogIn(email, password);
      navigate("/");
    } catch (error) {
      console.error("ERROR", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const fillCredentials = (role) => {
    if (role === "admin") {
      setCredentials({ email: "instructor@gmail.com", password: "1234Rr" });
    } else if (role === "teacher") {
      setCredentials({ email: "teacher@gmail.com", password: "1234Rr" });
    } else {
      setCredentials({ email: "check@gmail.com", password: "1234Rr" });
    }
  };

  return (
    <div className="min-h-screen flex gap-8 justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-gray-400 text-2xl font-medium text-center py-4">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              type="email"
              name="email"
              placeholder="Email"
              className="input text-gray-500 input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              type="password"
              name="password"
              placeholder="Password"
              className="input text-gray-500 input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex justify-center py-2">
          <button onClick={handleGoogleLogin} className="btn btn-secondary">
            Sign in with Google
          </button>
        </div>
        <p className="text-center text-gray-500 font-semibold py-1">
          Don't have an account?{" "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-400 font-bold text-3xl">
            Demo Credentials For Check
          </h2>
          <div className="flex gap-4">
            <button
              className="btn btn-info"
              onClick={() => fillCredentials("user")}
            >
              User Credentials
            </button>
            <button
              className="btn btn-info"
              onClick={() => fillCredentials("admin")}
            >
              Admin Credentials
            </button>
            <button
              className="btn btn-info"
              onClick={() => fillCredentials("teacher")}
            >
              Teacher Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
