import ActionSection from "@/components/ui/ActionSection";
import FeatureActionGridSection from "@/components/ui/FeatureActionGridSection";
import HeroCarousel from "@/components/ui/HeroCarousel";
import Navbar from "@/shared/components/HomePage/Navbar";

const HomePage = () => {
    return (
       <div className="min-h-screen">
        <Navbar />
        <main>
           <HeroCarousel/> 
           <ActionSection/>
           <FeatureActionGridSection/>
        </main>
        </div>
    );
};

export default HomePage;