import ActionSection from "@/components/ui/ActionSection";
import AnniversaryHero from "@/components/ui/AnniversaryHero";
import FeatureActionGridSection from "@/components/ui/FeatureActionGridSection";
import HeroCarousel from "@/components/ui/HeroCarousel";
import Navbar from "@/shared/components/HomePage/Navbar";
import MissionHeadlineBanner from "@/components/ui/MissionHeadlineBanner";
import DonationSection from "@/components/ui/DonationSection";
import SloganSection from "@/components/ui/SloganSection";
import FeaturedStories from "@/components/ui/FeaturedStories";
import PressRoom from "@/components/ui/PressRoom";
import SubscriptionSection from "@/components/ui/SubscriptionSection";
import Footer from "@/shared/components/HomePage/Footer";

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
                <SloganSection />
                <FeaturedStories />
                <PressRoom />
                <SubscriptionSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;