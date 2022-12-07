import {createBrowserRouter} from "react-router-dom";
import AllCategories from "../dashboard/AllCategories/AllCategories";
import AllNotes from "../dashboard/AllNotes/AllNotes";
import MyFavorites from "../dashboard/MyFavorites/MyFavorites";
import MyNotes from "../dashboard/MyNotes/MyNotes";
import RemovedNotes from "../dashboard/RemovedNotes/RemovedNotes";
import RemovedUsers from "../dashboard/RemovedUsers/RemovedUsers";
import Summary from "../dashboard/Summary/Summary";
import Users from "../dashboard/Users/Users";
import DashboardLayout from "../layouts/DashboardLayout";
import InterviewQuestionsLayout from "../layouts/InterviewQuestionsLayout";
import Main from "../layouts/Main";
import NotesLayout from "../layouts/NotesLayout";
import About from "../pages/About/About";
import AddNotesGist from "../pages/AddNotes/AddNotesGist";
import AddNotesInterview from "../pages/AddNotes/AddNotesInterview";
import AddNotesQuill from "../pages/AddNotes/AddNotesQuill";
import UpdateNotesGist from "../pages/AddNotes/UpdateNotesGist";
import UpdateNotesInterview from "../pages/AddNotes/UpdateNotesInterview";
import UpdateNotesQuill from "../pages/AddNotes/UpdateNotesQuill";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Notes from "../pages/Notes/Notes";
import NotesHome from "../pages/Notes/NotesHome";
import ShowQuestions from "../pages/Notes/ShowQuestions";
import ShowQuestionsHome from "../pages/Notes/ShowQuestionsHome";
import Projects from "../pages/Projects/Projects";
import AdminRouter from "./AdminRouter";
import PrivateRouter from "./PrivateRouter";
import SuperAdminRouter from "./SuperAdminRouter";
import WriterRouter from "./WriterRouter";

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
                path: "/notes",
                element: <NotesHome></NotesHome>
            },
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
                path: "/showQuestions",
                element: <ShowQuestionsHome></ShowQuestionsHome>
            },
            {
                path: "/showQuestions/:id",
                loader: ({params}) => fetch(`http://localhost:5000/notes/id/${params.id}`),
                element: <ShowQuestions></ShowQuestions>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/dashboard",
        element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
        children: [
            {
                path: "/dashboard",
                element: <Summary></Summary>
            },
            {
                path: "/dashboard/add-notes",
                element: <WriterRouter><AddNotesGist></AddNotesGist></WriterRouter>
            },
            {
                path: "/dashboard/add-notes-quill",
                element: <WriterRouter><AddNotesQuill></AddNotesQuill></WriterRouter>
            },
            {
                path: "/dashboard/add-notes-interview",
                element: <WriterRouter><AddNotesInterview></AddNotesInterview></WriterRouter>
            },
            {
                path: "/dashboard/users",
                element: <AdminRouter><Users></Users></AdminRouter>
            },
            {
                path: "/dashboard/removed-users",
                element: <SuperAdminRouter><RemovedUsers></RemovedUsers></SuperAdminRouter>
            },
            {
                path: "/dashboard/removed-notes",
                element: <SuperAdminRouter><RemovedNotes></RemovedNotes></SuperAdminRouter>
            },
            {
                path: "/dashboard/all-categories",
                element: <AdminRouter><AllCategories></AllCategories></AdminRouter>
            },
            {
                path: "/dashboard/all-notes",
                element: <AdminRouter><AllNotes></AllNotes></AdminRouter>
            },
            {
                path: "/dashboard/my-notes",
                element: <WriterRouter><MyNotes></MyNotes></WriterRouter>
            },
            {
                path: "/dashboard/my-favorites/:email",
                loader: ({params}) => fetch(`http://localhost:5000/favorites/${params.email}`),
                element: <MyFavorites></MyFavorites>
            },
            {
                path: "/dashboard/gistUpdate/:id",
                loader: ({params}) => fetch(`http://localhost:5000/notes/id/${params.id}`),
                element: <UpdateNotesGist></UpdateNotesGist>
            },
            {
                path: "/dashboard/interviewUpdate/:id",
                loader: ({params}) => fetch(`http://localhost:5000/notes/id/${params.id}`),
                element: <UpdateNotesInterview></UpdateNotesInterview>
            },
            {
                path: "/dashboard/quillUpdate/:id",
                loader: ({params}) => fetch(`http://localhost:5000/notes/id/${params.id}`),
                element: <UpdateNotesQuill></UpdateNotesQuill>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;