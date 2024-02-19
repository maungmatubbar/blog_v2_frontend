import BLayout from "../components/Backend/Layout/Layout";
import Layout from "../components/frontend/Layout/Layout";
import Contact from "../features/frontend/Contact/Contact";
import Login from "../features/frontend/Login/Login";
import { BlogIcon, CategoryIcon, DashboardIcon, UserIcon } from "../icons/MenuIcons";
import Category from "../pages/backend/category/Category";
import DashboardPage from "../pages/backend/dashboard/DashboardPage";
import User from "../pages/backend/users/User";
//import Login from "../features/frontend/Login/Login";
import AboutPage from "../pages/frontend/AboutPage/AboutPage";
import BlogPage from "../pages/frontend/BlogPages/BlogPage";
import NotFoundPage from "../pages/frontend/NotFoundPage/404";
import HomePage from "../pages/frontend/homePage/HomePage";
//import HomePage from "../pages/frontend/homePage/HomePage";
//import { RouteInterface } from "./RouteInterface";

export const AppRoutes = [
  {
    path: "/",
    label: "Layout",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        label: "Home",
        element: <HomePage />,
      },
      {
        path: "/about",
        label: "About",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        label: "Blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        label: "Contact",
        element: <Contact />,
      },
      
      {
        path: "/Login",
        label: "Login",
        element: <Login />,
        hideFromLable: true,
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: <BLayout />,
    hideFromLable: true,
    isAuthorized: false,
    children: [
      {
        index: true,
        label: "Dashboard",
        element: <DashboardPage />,
        icon: <DashboardIcon />
      },
      {
        path: "/dashboard/category",
        label: "Category",
        element: <Category />,
        icon: <CategoryIcon />
      },
      {
        path: "/dashboard/blog",
        label: "Blogs",
        element: <BlogPage />,
        icon: <BlogIcon  />
      },
      {
        path: "/dashboard/users",
        label: "Users",
        element: <User />,
        icon: <UserIcon />
      },
      
    ]
  },
  {
    path: "*",
    label: "404",
    element: <NotFoundPage />,
    hideFromLable: true,
  },
];
