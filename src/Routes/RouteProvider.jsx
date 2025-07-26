import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Rajniti from "../Pages/Rajniti";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
        {index:true , Component:Home},
        {path:'politics',Component:Rajniti}
    ]
  },
]);

export default router;