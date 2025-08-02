import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import './App.css'
import HomePage from "./pages/HomePage";
function App() {
  const my_router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ]
  );

  
  return (
    <>
      <RouterProvider router={my_router} />
    </>
  );
}

export default App;
