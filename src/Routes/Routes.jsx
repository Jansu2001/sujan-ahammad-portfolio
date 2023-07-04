import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Pages/HomePage/Home/Home";
import Projects from "../Pages/ProjectsPage/Projects";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Contact from "../Pages/Contact/Contact";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/aboutme',
            element:<AboutMe></AboutMe>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        }
      ]
    },
  ]);

  export default router