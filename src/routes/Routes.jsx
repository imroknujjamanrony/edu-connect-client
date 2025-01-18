import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home";
import Dashboard from "../page/dashboard/Dashboard";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import AddClasses from "../page/AddClasses/AddClasses";
import DashboardLayout from "../layouts/DashboardLayout";
import MyEnrollclass from "../components/MyEnrollClass";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      // {
      //   path: "/dashboard",
      //   element: <Dashboard></Dashboard>,
      //   children: [
      //     {
      //       path: "add-classes",
      //       element: <AddClasses></AddClasses>,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <MyEnrollclass />, // Default element when visiting /dashboard
      },
      {
        index: true,
        path: "my-enroll-class",
        element: <MyEnrollclass></MyEnrollclass>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
