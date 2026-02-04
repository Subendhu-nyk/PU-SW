import HeroCarousel from "@/components/ui/HeroCarousel";
import Navbar from "@/shared/components/HomePage/Navbar";

const HomePage = () => {
    return (
       <div className="min-h-screen">
        <Navbar />
        <main>
           <HeroCarousel/> 
        </main>
        </div>
    );
};

export default HomePage;