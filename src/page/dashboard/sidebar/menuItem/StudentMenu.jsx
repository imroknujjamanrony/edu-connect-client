import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudentMenu = () => {
  return (
    <div>
      <nav className="p-6">
        <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-lg font-medium transition-colors ${
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }`
              }
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-enroll-class"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-lg font-medium transition-colors ${
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }`
              }
            >
              <FaBook />
              <span>My Enroll Class</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-lg font-medium transition-colors ${
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }`
              }
            >
              <FaUser />
              <span>My Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentMenu;
