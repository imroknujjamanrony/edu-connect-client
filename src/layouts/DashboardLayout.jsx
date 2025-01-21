import Dashboard from "../page/dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div>
      <Dashboard></Dashboard>
    </div>
    // <div className="dashboard-layout flex min-h-screen bg-gray-100">
    //   <aside className="dashboard-sidebar  max-w-60 bg-blue-600 text-white">
    //     <div></div>
    //     <div>
    //       <StudentMenu></StudentMenu>
    //     </div>
    //     <div>
    //       <TeacherMenu></TeacherMenu>
    //     </div>
    //   </aside>
    //   <main className="dashboard-content flex-1  bg-white">
    //     <Outlet />
    //   </main>
    // </div>
  );
};

export default DashboardLayout;
