import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/pages/layout/MainLayout";
import Home from "@/pages/home/Home";
import PlacementsAndStaffing from "@/pages/placements-staffing/PlacementStaffing";
import OurServices from "./pages/our-services/OurServices";
// import OurServices from "@/pages/our-services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/placement-and-staffing",
        element: <PlacementsAndStaffing />,
      },
      {
        path: "/our-services",
        element: <OurServices />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
