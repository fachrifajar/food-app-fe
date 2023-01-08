import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile";
import AddRecipe from "./pages/add-recipe";
import DetailRecipe from "./pages/detail-recipe";
import DetailVid from "./pages/detail-vid";
import Maintenance from "./pages/maintenance";
import ForgotPassword from "./pages/forgot-password";

function App() {
  const maintenance = ["/forgot-password"];
  const isMaintenance =
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
    maintenance.find((result) => result === document.location.pathname);

  if (isMaintenance) {
    return <Maintenance />;
  }

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
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
