import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/4f984418-1b26-4f21-97be-1c6965c39022.jpg";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const userName = user?.displayName || "User"; // Fallback to "User" if displayName is not available

  const handleLogout = async () => {
    try {
      await logOut();
      setDropdownOpen(false); // Close dropdown on logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar fixed z-20 bg-base-100">
      <div className="flex-1">
        <img className="w-14" src={logo} alt="Logo" />
        <Link to="/" className="btn btn-ghost text-xl">
          EduConnect
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex space-x-4">
          <NavLink to="/" className="btn btn-ghost">
            Home
          </NavLink>
          <NavLink to="/all-classes" className="btn btn-ghost">
            All Classes
          </NavLink>
          <NavLink to="/TeachOnWebsite" className="btn btn-ghost">
            Teach on EduConnect
          </NavLink>
        </div>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={toggleDropdown}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile"
                  src={
                    user && user.photoURL
                      ? user.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <span className="justify-between">{userName}</span>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn btn-success">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <NavLink to="/login" className="btn btn-ghost">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
