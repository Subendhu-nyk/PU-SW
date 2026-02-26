import ActionSection from "@/components/ui/ActionSection";
import AnniversaryHero from "@/components/ui/AnniversaryHero";
import FeatureActionGridSection from "@/components/ui/FeatureActionGridSection";
import HeroCarousel from "@/components/ui/HeroCarousel";
import Navbar from "@/shared/components/HomePage/Navbar";
import MissionHeadlineBanner from "@/components/ui/MissionHeadlineBanner";
import DonationSection from "@/components/ui/DonationSection";

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Spacer for fixed navbar */}
            <div className="h-[104px]" />
            <main>
                <HeroCarousel />
                <ActionSection />
                <FeatureActionGridSection />
                <AnniversaryHero />
                <MissionHeadlineBanner />
                <DonationSection />
            </main>
        </div>
    );
};

export default HomePage;