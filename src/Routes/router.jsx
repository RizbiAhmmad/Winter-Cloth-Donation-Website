import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Dashboard from "../Components/Dashboard";
import Camp from "../Components/Camp";
import HowToHelp from "../Components/howToHelp";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
           {
            path: "/",
            element: <Home></Home>
           },
           {
            path: "/campaigns",
            element: <Camp></Camp>
           },
           {
            path: "/how-to-help",
            element: <HowToHelp></HowToHelp>
           },
          
           {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
           },
           
          
        ]
    }
])

export default router;