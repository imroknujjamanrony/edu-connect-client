// import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/education .png";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { ThemeContext } from "../../../providers/ThemeContext";
// import { AuthContext } from "../../../providers/AuthProvider";

// import useAuth from "../../../hooks/useAuth";
// import { useContext, useState } from "react";

// const Navbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const { user, logOut } = useAuth();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const userName = user?.displayName || "User"; // Fallback to "User" if displayName is not available

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       setDropdownOpen(false); // Close dropdown on logout
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className="navbar fixed z-20 text-white bg-purple-600/30 backdrop-blur-md">
//       {/* left side logo and text */}
//       <div className="flex-1 lg:ml-12">
//         <img className="w-14 rounded-2xl" src={logo} alt="Logo" />
//         <Link to="/" className="btn btn-ghost text-xl">
//           EduConnect
//         </Link>
//       </div>
//       <div className="flex-none lg:mr-12">
//         {/* Desktop Links */}
//         <div className="hidden sm:flex space-x-4">
//           <NavLink to="/" className="btn btn-ghost">
//             Home
//           </NavLink>
//           <NavLink to="/all-classes" className="btn btn-ghost">
//             All Classes
//           </NavLink>
//           <NavLink to="/TeachOnWebsite" className="btn btn-ghost">
//             Teach on EduConnect
//           </NavLink>
//           {/* Theme Toggle Button */}
//           <div className="rounded-full flex justify-center items-center pl-2 pr-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white transition">
//             <button onClick={toggleTheme} className=" ">
//               {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="sm:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             className="btn btn-ghost btn-circle"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {mobileMenuOpen && (
//           <ul className="menu menu-compact bg-base-100 absolute right-0 top-full mt-2 w-48 rounded-box shadow-md">
//             <li>
//               <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/all-classes"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 All Classes
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/TeachOnWebsite"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Teach on EduConnect
//               </NavLink>
//             </li>
//           </ul>
//         )}

//         {user ? (
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//               onClick={toggleDropdown}
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="User Profile"
//                   src={
//                     user && user.photoURL
//                       ? user.photoURL
//                       : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                   }
//                 />
//               </div>
//             </div>
//             {dropdownOpen && (
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//               >
//                 <li>
//                   <span className="justify-between">{userName}</span>
//                 </li>
//                 <li>
//                   <NavLink to="/dashboard">Dashboard</NavLink>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout} className="btn btn-success">
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             )}
//           </div>
//         ) : (
//           <NavLink to="/login" className="btn btn-ghost">
//             Sign In
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//

//good works

import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/4f984418-1b26-4f21-97be-1c6965c39022.jpg";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useMakeTeacher from "../../../hooks/useMakeTeacher";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../providers/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
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

  // Define role-based links
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
    <div className="navbar fixed z-20 bg-red-500">
      <div className="flex-1 lg:ml-12">
        <img className="w-14" src={logo} alt="Logo" />
        <Link to="/" className="btn btn-ghost text-xl">
          EduConnect
        </Link>
      </div>

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

          {/* Dashboard Links Based on Role */}
          {user && (
            <div className="dropdown dropdown-hover">
              <button className="btn btn-ghost">Dashboard</button>
              <ul className="dropdown-content bg-base-100 shadow-lg rounded-box p-2 w-52">
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
            </div>
          )}
          {/* Theme Toggle Button */}
          <div className="rounded-full flex justify-start items-center mr-2  text-gray-900 dark:text-white transition">
            <button onClick={toggleTheme} className=" mr-2">
              {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          </div>
        </div>

        {/* User Profile Image and Hover Dropdown */}
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
                <div className="absolute right-0  top-12 bg-white shadow-lg rounded-lg p-4 w-48">
                  <p className="text-base font-semibold">{userName}</p>
                  <p className="text-base font-semibold">
                    {" "}
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </p>

                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full text-left text-sm text-red-500 hover:bg-purple-400 p-2 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-ghost bg-white text-red-500 hover:bg-gray-100"
            >
              Sign In
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
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

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <ul className="menu menu-compact bg-base-100 absolute right-0 top-full mt-2 w-48 rounded-box shadow-md">
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
