import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import AdBlogs from "../pages/AdBlog/AdBlogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/ad-blogs",
                element: <AdBlogs></AdBlogs>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;