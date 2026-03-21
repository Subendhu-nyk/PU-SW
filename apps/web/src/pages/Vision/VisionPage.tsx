import VisionHeroSection from "./sections/HeroSection";
import OurVisionSection from "./sections/OurVisionSection";
import VisionTransformSystemsSection from "./sections/TransformSystemsSection";
import VisionOurPathSection from "./sections/OurPathSection";
import VisionValuesSection from "./sections/ValuesSection";
import StatCounterSection from "@/shared/components/StatCounterSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";
import VisionTickerSection from "./sections/TickerSection";
import ImageBannerSection from "@/shared/components/ImageBannerSection";
import odishaHeritageImage from "@/assets/images/Odishaheritage.png";
import odishaPeopleImage from "@/assets/images/Odisha_People.jpg";
import { 
  VisionCtaData, 
  VisionFightGlobalData, 
  VisionForThePeopleData, 
  VisionBeTheChangeData,
  VisionGlobalForceData
} from "@/shared/constants/vision.data";

const VisionPage = () => {
    return (
        <>
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
                <StatCounterSection
                    tagline={VisionGlobalForceData.tagline}
                    heading1={VisionGlobalForceData.heading1}
                    heading2={VisionGlobalForceData.heading2}
                    stats={VisionGlobalForceData.stats}
                    taglineStyle="badge"
                    taglineAlignment="center"
                />
                <SubscriptionSection
                    headingLine1={VisionCtaData.headingLine1}
                    headingLine2={VisionCtaData.headingLine2}
                    description={VisionCtaData.paragraphs.join("\n\n")}
                />
                <VisionTickerSection />
        </>
    );
};

export default VisionPage;
