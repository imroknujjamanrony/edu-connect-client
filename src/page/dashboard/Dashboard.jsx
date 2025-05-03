/* eslint-disable react/jsx-key */
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import useMakeTeacher from "../../hooks/useMakeTeacher";
import Stats from "../../components/Home/Stats";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useMakeTeacher();
  const location = useLocation();
  const isRootPath = location.pathname === "/dashboard";

  // Sidebar link styling
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-yellow-400 text-blue-900 shadow"
        : "text-white hover:bg-yellow-200 hover:text-blue-900"
    }`;

  // Function to render a link, conditionally add `end` for /dashboard overview
  const renderLink = (key, to, icon, label) => (
    <li key={key}>
      <NavLink
        to={to}
        className={linkClass}
        end={to === "/dashboard"} // Only match exactly for overview link
      >
        <span className="text-xl">{icon}</span>
        <span className="text-base font-medium">{label}</span>
      </NavLink>
    </li>
  );

  // Admin Links
  const adminLinks = [
    ["/", <FaHome />, "Home"],
    ["/dashboard", <FaHome />, "Dashboard overview"],
    ["/dashboard/profile", <FaUser />, "Admin Profile"],
    ["teacherRequest", <FaHome />, "Teachers Request"],
    ["users", <FaUser />, "Users"],
    ["/dashboard/adminAllclasses", <FaBook />, "All Classes"],
  ];

  // Teacher Links
  const teacherLinks = [
    ["/", <FaHome />, "Home"],
    ["/dashboard", <FaHome />, "Dashboard overview"],
    ["/dashboard/addClasses", <FaBook />, "Add Class"],
    ["/dashboard/myClass", <FaUser />, "My Class"],
    ["/dashboard/profile", <FaUser />, "Teachers Profile"],
  ];

  // Student Links
  const studentLinks = [
    ["/", <FaHome />, "Home"],
    ["/dashboard", <FaHome />, "Dashboard overview"],
    ["/dashboard/my-enroll-class", <FaBook />, "My Enroll Class"],
    ["/dashboard/profile", <FaUser />, "Student Profile"],
  ];

  const userLinks = isAdmin
    ? adminLinks
    : isTeacher
    ? teacherLinks
    : studentLinks;

  return (
    <div className="dashboard-layout flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="dashboard-sidebar sticky top-0 w-full md:w-60 bg-blue-600 text-white p-6 md:min-h-screen">
        <nav className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
            <ul className="space-y-2">
              {userLinks.map(([to, icon, label], i) =>
                renderLink(i, to, icon, label)
              )}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="dashboard-content flex-1 bg-white p-6 overflow-y-auto">
        {isRootPath && <Stats />}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
