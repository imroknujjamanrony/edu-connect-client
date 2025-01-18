import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaBook, FaUser } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout flex min-h-screen bg-gray-100">
      <aside className="dashboard-sidebar w-72 bg-blue-600 text-white">
        <nav className="p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
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
                <span>Profile</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content flex-1 p-8 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
