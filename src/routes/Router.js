import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import NotesLayout from "../layouts/NotesLayout";
import About from "../pages/About/About";
import AddNotes from "../pages/AddNotes/AddNotes";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Notes from "../pages/Notes/Notes";
import Projects from "../pages/Projects/Projects";

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
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/add-notes",
                element: <AddNotes></AddNotes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/notes",
        element: <NotesLayout></NotesLayout>,
        children: [
            {
                path: "/notes/:id",
                loader: ({params}) => fetch(`http://localhost:5000/notes/id/${params.id}`),
                element: <Notes></Notes>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;