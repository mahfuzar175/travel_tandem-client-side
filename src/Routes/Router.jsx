import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PopularServices from "../components/PopularServices";
import AllServices from "../components/AllServices";
import ServiceDetails from "../components/ServiceDetails";
import AddService from "../Pages/AddService/AddService";
import MyServices from "../Pages/My Services/MyServices";
import PrivateRoute from "./Private Route/PrivateRoute";
import UpdateService from "../components/UpdateService";
import MySchedules from "../Pages/My Schedules/MySchedules";
import MyBookings from "../Pages/My Schedules/My Bookings/MyBookings";
import MyPendingWorks from "../Pages/My Schedules/My Pending works/MyPendingWorks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/popularServices',
            element: <PopularServices></PopularServices>
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>
        },
        {
          path: '/serviceDetails',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        },
        {
          path: 'myServices',
          element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
          loader: () => fetch('https://b8a11-server-side-mahfuzar175.vercel.app/services')
        },
        {
          path: '/updateService/:id',
          element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a11-server-side-mahfuzar175.vercel.app/services/${params.id}`, {credentials: 'include'})

        },
        {
          path: '/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/mySchedules',
          element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
          loader: () => fetch('https://b8a11-server-side-mahfuzar175.vercel.app/booking')
        },
        {
          path:'/myBookings',
          element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
          loader: () => fetch('https://b8a11-server-side-mahfuzar175.vercel.app/booking',)
        },
        {
          path: '/myPendingWorks',
          element: <PrivateRoute><MyPendingWorks></MyPendingWorks></PrivateRoute>
        },
        {
          path: '/serviceDetails/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://b8a11-server-side-mahfuzar175.vercel.app/services/${params.id}`, {credentials: 'include'})
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;
  