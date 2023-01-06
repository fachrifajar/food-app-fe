import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile";
import AddRecipe from "./pages/add-recipe";
import DetailRecipe from "./pages/detail-recipe";
import DetailVid from "./pages/detail-vid";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "detail-recipe",
      element: <DetailRecipe />,
    },
    {
      path: "detail-vid",
      element: <DetailVid />,
    },
  ]);

  return createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
