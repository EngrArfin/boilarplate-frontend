import Footer from "@/components/Home/Shared/Footer";
import NavBar from "@/components/Home/Shared/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const location = useLocation();

  // Routes where NavBar & Footer should be hidden
  const hideLayoutRoutes = ["/login", "/signup"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideLayout && <NavBar />}
      <main className="bg-gradient-to-r from-[#29424C] via-[#0b2521] to-[#052c1e]">
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Layout;
