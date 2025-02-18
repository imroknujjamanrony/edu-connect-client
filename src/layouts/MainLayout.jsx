import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <Navbar></Navbar>

      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
