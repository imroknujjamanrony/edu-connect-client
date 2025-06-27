import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useMakeTeacher from "../../../hooks/useMakeTeacher";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../providers/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoLogoReact } from "react-icons/io5";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isTeacher] = useMakeTeacher();

  const userName = user?.displayName || "User";

  const handleLogout = async () => {
    try {
      await logOut();
      setDropdownOpen(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const dashboardLinks = isAdmin
    ? [
        { path: "/dashboard/profile", label: "Admin Profile" },
        { path: "/dashboard/teacherRequest", label: "Teachers Request" },
        { path: "/dashboard/users", label: "Users" },
        { path: "/dashboard/adminAllclasses", label: "All Classes" },
      ]
    : isTeacher
    ? [
        { path: "/dashboard/addClasses", label: "Add Class" },
        { path: "/dashboard/myClass", label: "My Class" },
        { path: "/dashboard/profile", label: "Teacher Profile" },
      ]
    : [
        { path: "/dashboard/my-enroll-class", label: "My Enroll Class" },
        { path: "/dashboard/profile", label: "Student Profile" },
      ];

  return (
    <div className="navbar fixed z-50 bg-sectionColor">
      {/* Logo and Site Name */}
      <div className="flex-1 lg:ml-12 flex items-center space-x-2">
        <IoLogoReact className="text-4xl text-blue-500" />
        <Link to="/" className="btn btn-ghost text-xl">
          EduConnect
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none lg:mr-12">
        <div className="hidden sm:flex space-x-4">
          <NavLink to="/" className="btn btn-ghost">
            Home
          </NavLink>
          <NavLink to="/all-classes" className="btn btn-ghost">
            All Classes
          </NavLink>
          <NavLink to="/TeachOnWebsite" className="btn btn-ghost">
            Teach on EduConnect
          </NavLink>

          {/* Dashboard Dropdown */}
          {user && (
            <div className="dropdown dropdown-hover">
              <button className="btn btn-ghost dark:text-gray-200">
                Dashboard
              </button>
              <ul className="dropdown-content bg-white dark:bg-gray-800 shadow-lg rounded-box p-2 w-52 border border-gray-200 dark:border-gray-700">
                {dashboardLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm transition rounded ${
                          isActive
                            ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                            : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Theme Toggle */}
          <div className="rounded-full flex justify-start items-center mr-2 text-gray-900 dark:text-white transition">
            <button onClick={toggleTheme} className="mr-2">
              {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>
        </div>

        {/* User Avatar + Dropdown */}
        <div className="relative">
          {user ? (
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />

              {dropdownOpen && (
                <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-48 border border-gray-200 dark:border-gray-700">
                  <p className="text-base font-semibold text-gray-700 dark:text-white text-center">
                    {userName}
                  </p>

                  <NavLink
                    to="/dashboard"
                    className="block text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 hover:opacity-90 px-3 py-2 rounded transition duration-200 text-center"
                  >
                    Dashboard
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full text-white text-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 px-3 py-2 rounded transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-outline  text-base font-semibold text-white  hover:bg-blue-600 hover:text-white opacity-90  rounded transition duration-200 text-center"
            >
              Sign In
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <ul className="menu menu-compact bg-base-100 absolute right-0 top-full mt-2 w-48 rounded-box shadow-md z-50">
            <li>
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-classes"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/TeachOnWebsite"
                onClick={() => setMobileMenuOpen(false)}
              >
                Teach on EduConnect
              </NavLink>
            </li>
            {user && (
              <li>
                <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2 bg-white rounded shadow-md">
                    {dashboardLinks.map((link) => (
                      <li key={link.path}>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition ${
                              isActive ? "bg-gray-300" : "hover:bg-gray-200"
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
