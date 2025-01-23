import useAuth from "../hooks/useAuth";
import Dashboard from "../page/dashboard/Dashboard";

const DashboardLayout = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-4xl flex justify-center mt-5 font-bold text-green-600 ">
        Welcome {user?.displayName}
      </h2>
      <Dashboard></Dashboard>
    </div>
  );
};

export default DashboardLayout;
