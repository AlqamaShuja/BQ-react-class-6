import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import "./App.css";
import HomePage from "./pages/HomePage";
import Test from "./components/Test";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/Layout";
function App() {
  const my_router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /> <HomePage /></>,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/posts",
      element: <PostsPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={my_router} />
    </>
  );
}

export default App;
