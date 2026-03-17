import { Outlet } from "react-router-dom";
import Navbar from "@/shared/components/layout/Navbar";
import Footer from "@/shared/components/layout/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen">
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
