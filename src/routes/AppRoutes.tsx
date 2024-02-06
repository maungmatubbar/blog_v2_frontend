import AboutPage from "../pages/frontend/AboutPage/AboutPage";
import BlogPage from "../pages/frontend/BlogPages/BlogPage";
import HomePage from "../pages/frontend/homePage/HomePage";

export const AppRoutes = [
  {
    path: "/",
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
];
