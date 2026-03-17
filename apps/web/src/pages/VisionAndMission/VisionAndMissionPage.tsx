import Navbar from "@/shared/components/HomePage/Navbar";
import Footer from "@/shared/components/HomePage/Footer";
import VisionHeroSection from "@/components/ui/VisionAndMission/HeroSection";
import OurVisionSection from "@/components/ui/VisionAndMission/OurVisionSection";
import VisionTransformSystemsSection from "@/components/ui/VisionAndMission/TransformSystemsSection";
import VisionOurPathSection from "@/components/ui/VisionAndMission/OurPathSection";
import VisionValuesSection from "@/components/ui/VisionAndMission/ValuesSection";
import EmpoweringCommunitySection from "@/components/ui/VisionAndMission/EmpoweringCommunitySection";
import SubscriptionSection from "@/components/ui/SubscriptionSection";
import VisionTickerSection from "@/components/ui/VisionAndMission/TickerSection";
import ImageBannerSection from "@/components/ui/ImageBannerSection";
import odishaHeritageImage from "@/assets/images/Odishaheritage.png";
import odishaPeopleImage from "@/assets/images/Odisha_People.jpg";
import { 
  VisionCtaData, 
  VisionFightGlobalData, 
  VisionForThePeopleData, 
  VisionBeTheChangeData 
} from "@/shared/constants/constantData";

const VisionAndMissionPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Spacer for fixed navbar */}
            <div className="h-[104px]" />
            <main>
                <VisionHeroSection />
                <OurVisionSection />
                <ImageBannerSection
                    imageSrc={odishaPeopleImage}
                    imageAlt="Vision Be The Change Background"
                    topHeading={VisionBeTheChangeData.headingLine1}
                    mainHeading={VisionBeTheChangeData.headingLine2}
                />
                <VisionTransformSystemsSection />
                <div className="w-[80%] h-px bg-border mx-auto" />
                <VisionOurPathSection />
                <ImageBannerSection
                    imageSrc={odishaPeopleImage}
                    imageAlt="Vision For The People Background"
                    topHeading={<>{VisionForThePeopleData.line1}<span className="mx-2">{VisionForThePeopleData.line2}</span></>}
                    mainHeading={VisionForThePeopleData.line3}
                />
                <VisionValuesSection />
                <ImageBannerSection
                    imageSrc={odishaHeritageImage}
                    imageAlt="Vision Fight Global Background"
                    topHeading={VisionFightGlobalData.line1}
                    mainHeading={VisionFightGlobalData.line2}
                />
                <EmpoweringCommunitySection />
                <SubscriptionSection
                    headingLine1={VisionCtaData.headingLine1}
                    headingLine2={VisionCtaData.headingLine2}
                    description={VisionCtaData.paragraphs.join("\n\n")}
                />
                <VisionTickerSection />
            </main>
            <Footer />
        </div>
    );
};

export default VisionAndMissionPage;
