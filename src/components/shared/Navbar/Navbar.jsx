import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/4f984418-1b26-4f21-97be-1c6965c39022.jpg";
const Navbar = () => {
  const isLoggedIn = true; // Replace with your actual logic for checking login status
  const userName = "John Doe"; // Replace with actual user's name
  const userImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"; // Replace with user's profile picture

  return (
    <div className="navbar fixed z-20 bg-base-100">
      <div className="flex-1">
        {/* Website Logo and Name */}
        <img className="w-14" src={logo} alt="" />
        <Link to={"/"} className="btn btn-ghost text-xl">
          EduConnect
        </Link>
      </div>
      <div className="flex-none">
        {/* Navbar Items */}
        <div className="flex space-x-4">
          <NavLink to={"/"} className="btn btn-ghost">
            Home
          </NavLink>
          <NavLink to={"/all-classes"} className="btn btn-ghost">
            All Classes
          </NavLink>
          <NavLink to={"/teachonEduconnect"} className="btn btn-ghost">
            Teach on EduConnect
          </NavLink>
        </div>

        {/* Login/Sign Out button and Profile dropdown */}
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Profile" src={userImage} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {userName}
                  {/* You can add a badge for notifications if needed */}
                </a>
              </li>
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
              <li>
                <button className="btn btn-success">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to={"/login"} className="btn btn-ghost">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
