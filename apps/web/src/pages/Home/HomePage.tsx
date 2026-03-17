import HeroCarousel from "./sections/HeroCarousel";
import MissionHeadlineBanner from "./sections/MissionHeadlineBanner";
import ActionSection from "./sections/ActionSection";
import FeatureActionGridSection from "./sections/FeatureActionGridSection";
import FeaturedStories from "./sections/FeaturedStories";
import PressRoom from "./sections/PressRoom";
import SloganSection from "./sections/SloganSection";
import AnniversaryHero from "./sections/AnniversaryHero";
import DonationSection from "./sections/DonationSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";

const HomePage = () => {
    return (
        <>
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
        </>
    );
};

export default HomePage;