import {createBrowserRouter} from "react-router-dom";
import AllCategories from "../dashboard/AllCategories/AllCategories";
import AllNotes from "../dashboard/AllNotes/AllNotes";
import MyFavorites from "../dashboard/MyFavorites/MyFavorites";
import MyNotes from "../dashboard/MyNotes/MyNotes";
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
                loader: ({params}) => fetch(`https://shamim-sarker-server.vercel.app/notes/id/${params.id}`),
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
                loader: ({params}) => fetch(`https://shamim-sarker-server.vercel.app/notes/id/${params.id}`),
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
                path: "/dashboard",
                element: <Summary></Summary>
            },
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
            },
            {
                path: "/dashboard/all-categories",
                element: <AllCategories></AllCategories>
            },
            {
                path: "/dashboard/all-notes",
                element: <AllNotes></AllNotes>
            },
            {
                path: "/dashboard/my-notes",
                element: <MyNotes></MyNotes>
            },
            {
                path: "/dashboard/my-favorites",
                element: <MyFavorites></MyFavorites>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;