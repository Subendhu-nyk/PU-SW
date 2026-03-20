import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/layout/Navbar";
import Footer from "@/shared/components/layout/Footer";
import ScrollToTop from "@/shared/components/layout/ScrollToTop";

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <ScrollToTop />
            <Navbar />
            {/* Spacer for fixed navbar */}
            <div className="h-[104px]" />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
