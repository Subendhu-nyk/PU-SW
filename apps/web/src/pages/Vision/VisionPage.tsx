import VisionHeroSection from "./sections/HeroSection";
import OurVisionSection from "./sections/OurVisionSection";
import VisionTransformSystemsSection from "./sections/TransformSystemsSection";
import VisionOurPathSection from "./sections/OurPathSection";
import VisionValuesSection from "./sections/ValuesSection";
import EmpoweringCommunitySection from "./sections/EmpoweringCommunitySection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";
import VisionTickerSection from "./sections/TickerSection";
import ImageBannerSection from "@/shared/components/ImageBannerSection";
import odishaHeritageImage from "@/assets/images/Odishaheritage.png";
import odishaPeopleImage from "@/assets/images/Odisha_People.jpg";
import { 
  VisionCtaData, 
  VisionFightGlobalData, 
  VisionForThePeopleData, 
  VisionBeTheChangeData 
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
                <EmpoweringCommunitySection />
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
