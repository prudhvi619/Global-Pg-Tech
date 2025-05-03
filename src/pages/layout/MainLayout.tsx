import { Outlet } from "react-router-dom";
import Navbar from "@/pages/common/Navbar";
import Footer from "@/pages/common/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;