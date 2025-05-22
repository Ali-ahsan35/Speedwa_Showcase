import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BrandDetails from "../pages/BrandCard/BrandDetails";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../pages/AddProduct/AddProduct";
import SingleCarDetails from "../pages/BrandCard/SingleCarDetails";
import UpdateCar from "../pages/BrandCard/UpdateCar";
import MyCart from "../pages/MyCart/MyCart";
import Error from "../pages/Error/Error";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch ('/carbrand.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/branddetails/:name',
        element: <BrandDetails></BrandDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/brand/cars/${params.name}`)
      },
      {
        path: '/addproduct',
        element: <PrivateRoutes>
          <AddProduct></AddProduct>
        </PrivateRoutes>
      },
      {
        path:'/singlecardetails/:id',
        element: <PrivateRoutes><SingleCarDetails></SingleCarDetails></PrivateRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: '/mycart/:id',
        element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: '/updatecar/:id',
        element: <PrivateRoutes><UpdateCar></UpdateCar></PrivateRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
      {
        path: '/aboutus',
        element: <AboutUs/>
      },
      {
        path:'*',
        element:<Error></Error>
      }
    ],
  },
]);

export default router;