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
import MySchedules from "../Pages/My Schedules/MySchedules";
import MyServices from "../Pages/My Services/MyServices";
import PrivateRoute from "./Private Route/PrivateRoute";
import UpdateService from "../components/UpdateService";

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
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: 'myServices',
          element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/updateService/:id',
          element: <UpdateService></UpdateService>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: '/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/mySchedules',
          element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>
        },
        {
          path: '/serviceDetails/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
  