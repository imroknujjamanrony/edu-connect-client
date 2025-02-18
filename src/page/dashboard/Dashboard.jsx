import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useMakeTeacher from "../../hooks/useMakeTeacher";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useMakeTeacher();
  return (
    <div className="dashboard-layout flex min-h-screen bg-gray-100">
      <aside className="dashboard-sidebar  max-w-60 bg-blue-600 text-white">
        <div>
          <nav className="p-6">
            <h2 className="text-2xl font-bold mb-6"> Dashboard</h2>
            <ul className="space-y-4">
              {isAdmin ? (
                <>
                  {/* shared */}
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
                      to="/dashboard/profile"
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }`
                      }
                    >
                      <FaUser />
                      <span>Admin Profile</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="teacherRequest"
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }`
                      }
                    >
                      <FaHome />
                      <span>Teachers Request</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="users"
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }`
                      }
                    >
                      <FaUser />
                      <span>Users</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/adminAllclasses"
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }`
                      }
                    >
                      <FaBook />
                      <span>All classes</span>
                    </NavLink>
                  </li>
                  <div className="divider"></div>
                </>
              ) : isTeacher ? (
                <>
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
                      to="/dashboard/addClasses"
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }`
                      }
                    >
                      <FaBook />
                      <span>Add class</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myClass"
                      className={({ isActive }) =>
                        `flex items-center space-x-2 text-lg font-medium transition-colors ${
                          isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }`
                      }
                    >
                      <FaUser />
                      <span>My Class</span>
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
                      <span>Teachers Profile</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
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
                      <span>Student Profile</span>
                    </NavLink>
                  </li>
                </>
              )}
              <div className="divider"></div>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="dashboard-content flex-1  bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
