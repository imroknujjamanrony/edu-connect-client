import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import MyEnrollclass from "../components/MyEnrollClass";
import AddClasses from "../page/AddClasses/AddClasses";
import MyClass from "../page/dashboard/sidebar/menuItem/teacherItem/MyClass";
import MyProfile from "../page/myProfile/MyProfile";
import AllClasses from "../page/Allclass/AllClasses";
import ClassDetails from "../page/Allclass/ClassDetails";
import TeachOnWebsite from "../page/TeachOnWebSite/TeachOnWebsite";
import TeachersRequest from "../page/dashboard/sidebar/menuItem/AdminMenu/AdminItem/TeachersRequest";
import AdminClass from "../page/dashboard/sidebar/menuItem/AdminMenu/AdminItem/AdminClass";
import AllUsers from "../page/dashboard/sidebar/menuItem/AdminMenu/AdminItem/AllUsers";

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
        path: "/all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/class/:id",
        element: <ClassDetails></ClassDetails>,
      },
      {
        path: "/TeachOnWebsite",
        element: <TeachOnWebsite></TeachOnWebsite>,
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
      // admin routes
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "teacherRequest",
        element: <TeachersRequest></TeachersRequest>,
      },
      {
        path: "my-enroll-class",
        element: <MyEnrollclass></MyEnrollclass>,
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "adminAllclasses",
        element: <AdminClass></AdminClass>,
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
