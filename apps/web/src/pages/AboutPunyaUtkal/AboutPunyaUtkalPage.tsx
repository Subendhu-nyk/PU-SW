import Navbar from "@/shared/components/HomePage/Navbar";
import Footer from "@/shared/components/HomePage/Footer";
import WhoWeAreSection from "@/components/ui/AboutPunyaUtkal/WhoWeAreSection";
import OurStorySection from "@/components/ui/AboutPunyaUtkal/OurStorySection";
import OurApproachSection from "@/components/ui/AboutPunyaUtkal/OurApproachSection";
import ImpactSnapshotSection from "@/components/ui/AboutPunyaUtkal/ImpactSnapshotSection";
import OurValuesSection from "@/components/ui/AboutPunyaUtkal/OurValuesSection";
import WhereWeWorkSection from "@/components/ui/AboutPunyaUtkal/WhereWeWorkSection";
import SubscriptionSection from "@/components/ui/SubscriptionSection";

const AboutPunyaUtkalPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Spacer for fixed navbar */}
            <div className="h-[104px]" />
            <main>
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
            </main>
            <Footer />
        </div>
    );
};

export default AboutPunyaUtkalPage;
