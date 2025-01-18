import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import MyEnrollclass from "../components/MyEnrollClass";
import Profile from "../page/myProfile/Profile";
import AddClasses from "../page/AddClasses/AddClasses";
import MyClass from "../page/dashboard/sidebar/menuItem/teacherItem/MyClass";

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
      {
        path: "addClasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
    ],
  },
]);

export default router;
