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
import React from "react";

// import redux
import store, { persistor } from "./store/index";
import { Provider } from "react-redux";

// functional component
function App() {
  const maintenance = ["/forgot-password"];
  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  );

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
      path: "detail-recipe/:title",
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

  if (isPageMaintenance) {
    return (
      <Maintenance
        maintenanceList={maintenance}
        turnOnMaintenance={() => setIsPageMaintenance(true)}
        turnOffMaintenance={() => setIsPageMaintenance(false)}
      />
    );
  } else {
    // JSX
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  }
}

export default App;
