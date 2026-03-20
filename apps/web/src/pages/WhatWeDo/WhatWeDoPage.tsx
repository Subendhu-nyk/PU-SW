import HeroSection from "./sections/HeroSection";
import PillarSection from "./sections/PillarSection";
import ImageBannerSection from "@/shared/components/ImageBannerSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";
import {
  WhatWeDoHeroData,
  CulturalPreservationData,
  ChildEducationData,
  WomenEmpowermentData,
  ElderlyCareData,
  CommunityWelfareData,
  WhatWeDoBannerData
} from "@/shared/constants/whatwedo.data";

// Images
import heritageImg from "@/assets/images/Odishaheritage.png";
import childrenImg from "@/assets/images/Care_Education.png";
import impactImg from "@/assets/images/Odisha_People.jpg";
import communityImg from "@/assets/images/Heart_Odisha.png";

const WhatWeDoPage = () => {
  return (
    <>
      <HeroSection />
      
      {/* 1. Cultural Preservation */}
      <PillarSection data={CulturalPreservationData} />
      
      <ImageBannerSection 
        imageSrc={heritageImg}
        imageAlt="Cultural Heritage"
        mainHeading="LEGACY"
        topHeading="PRESERVING THE"
      />

      {/* 2. Child Education */}
      <PillarSection data={ChildEducationData} bgColor="bg-slate-50" />

      {/* 3. Women Empowerment */}
      <PillarSection data={WomenEmpowermentData} />

      <ImageBannerSection 
        imageSrc={impactImg}
        imageAlt="Women and Community"
        mainHeading="EMPOWERED"
        topHeading="STRONGER WHEN"
      />

      {/* 4. Elderly Care */}
      <PillarSection data={ElderlyCareData} bgColor="bg-slate-50" />

      {/* 5. Community Welfare */}
      <PillarSection data={CommunityWelfareData} />

      <ImageBannerSection 
        imageSrc={communityImg}
        imageAlt={WhatWeDoBannerData.imageAlt}
        mainHeading={WhatWeDoBannerData.mainHeading}
        topHeading={WhatWeDoBannerData.topHeading}
        description={WhatWeDoBannerData.description}
      />

      <SubscriptionSection 
        tag="Join the Cause"
        headingLine1="HELP US BUILD"
        headingLine2="a better odisha"
        description="Your support can change lives. Join our mission as a volunteer or donor to make these actions possible across every corner of our state."
      />
    </>
  );
};

export default WhatWeDoPage;
