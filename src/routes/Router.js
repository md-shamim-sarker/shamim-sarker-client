import {createBrowserRouter} from "react-router-dom";
import RemovedUsers from "../dashboard/RemovedUsers/RemovedUsers";
import Users from "../dashboard/Users/Users";
import DashboardLayout from "../layouts/DashboardLayout";
import InterviewQuestionsLayout from "../layouts/InterviewQuestionsLayout";
import Main from "../layouts/Main";
import NotesLayout from "../layouts/NotesLayout";
import About from "../pages/About/About";
import AddNotesGist from "../pages/AddNotes/AddNotesGist";
import AddNotesInterview from "../pages/AddNotes/AddNotesInterview";
import AddNotesQuill from "../pages/AddNotes/AddNotesQuill";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Notes from "../pages/Notes/Notes";
import ShowQuestions from "../pages/Notes/ShowQuestions";
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
    },
    {
        path: "/showQuestions",
        element: <InterviewQuestionsLayout></InterviewQuestionsLayout>,
        children: [
            {
                path: "/showQuestions/:id",
                loader: ({params}) => fetch(`http://localhost:5000/questions/id/${params.id}`),
                element: <ShowQuestions></ShowQuestions>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/add-notes",
                element: <AddNotesGist></AddNotesGist>
            },
            {
                path: "/dashboard/add-notes-quill",
                element: <AddNotesQuill></AddNotesQuill>
            },
            {
                path: "/dashboard/add-notes-interview",
                element: <AddNotesInterview></AddNotesInterview>
            },
            {
                path: "/dashboard/users",
                element: <Users></Users>
            },
            {
                path: "/dashboard/removed-users",
                element: <RemovedUsers></RemovedUsers>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;