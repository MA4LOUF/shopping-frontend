import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.tsx";
import Footer from "../Footer.tsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 container mx-auto max-w-screen-2xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
