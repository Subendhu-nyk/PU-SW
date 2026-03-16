import ActionSection from "@/components/ui/Homepage/ActionSection";
import AnniversaryHero from "@/components/ui/Homepage/AnniversaryHero";
import FeatureActionGridSection from "@/components/ui/Homepage/FeatureActionGridSection";
import HeroCarousel from "@/components/ui/Homepage/HeroCarousel";
import Navbar from "@/shared/components/HomePage/Navbar";
import MissionHeadlineBanner from "@/components/ui/Homepage/MissionHeadlineBanner";
import DonationSection from "@/components/ui/Homepage/DonationSection";
import SloganSection from "@/components/ui/Homepage/SloganSection";
import FeaturedStories from "@/components/ui/Homepage/FeaturedStories";
import PressRoom from "@/components/ui/Homepage/PressRoom";
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