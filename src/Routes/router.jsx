import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Dashboard from "../Components/Dashboard";
import Camp from "../Components/Camp";
import HowToHelp from "../Components/howToHelp";
import Details from "../Components/Details";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";



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
            element: <Camp></Camp>,
            loader: ()=> fetch("/DonationData.json")
           },
           {
            path: "/how-to-help",
            element: <HowToHelp></HowToHelp>
           },
          
           {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
           },
           {
            path: "/details/:id",
            element: <Details></Details>,
            loader: async({params})=>{
                const response = await fetch(`/DonationData.json`);
                const data = await response.json();
                // console.log(data, params.id);
                const singleData = data.find(d=>d.id == params.id);
                // console.log(singleData);
              
                return singleData
 
            },
            
           },
           {
            path: "/login",
            element: <Login></Login>
 
           },
           {
            path: "/register",
            element: <Register></Register>
 
           },

          
        ]
    }
])

export default router;