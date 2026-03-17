import WhoWeAreSection from "./sections/WhoWeAreSection";
import OurStorySection from "./sections/OurStorySection";
import OurApproachSection from "./sections/OurApproachSection";
import ImpactSnapshotSection from "./sections/ImpactSnapshotSection";
import OurValuesSection from "./sections/OurValuesSection";
import WhereWeWorkSection from "./sections/WhereWeWorkSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";

const AboutPage = () => {
    return (
        <>
            <WhoWeAreSection />
                <OurStorySection />
                <OurApproachSection />
                <ImpactSnapshotSection />
                <OurValuesSection />
                <WhereWeWorkSection />
            <SubscriptionSection
                tag="Get Involved"
                headingLine1="BE PART OF THE"
                headingLine2="change we wish to see"
                description="Join thousands of others in supporting our vision for a stronger, culturally proud Odisha. Sign up for updates on our initiatives, campaigns, and ways you can volunteer or partner with us."
            />
        </>
    );
};

export default AboutPage;
