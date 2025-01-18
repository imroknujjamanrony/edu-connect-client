import { Outlet } from "react-router-dom";
import StudentMenu from "../page/dashboard/sidebar/menuItem/StudentMenu";
import TeacherMenu from "../page/dashboard/sidebar/menuItem/teacherItem/TeacherMenu";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout flex min-h-screen bg-gray-100">
      <aside className="dashboard-sidebar  max-w-60 bg-blue-600 text-white">
        <div>
          {" "}
          <StudentMenu></StudentMenu>
        </div>
        <div>
          {" "}
          <TeacherMenu></TeacherMenu>
        </div>
      </aside>
      <main className="dashboard-content flex-1  bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
