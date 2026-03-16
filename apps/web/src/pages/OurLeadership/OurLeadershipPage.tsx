import Navbar from "@/shared/components/HomePage/Navbar";
import Footer from "@/shared/components/HomePage/Footer";
import AboutLeaderSection from "@/components/ui/OurLeadership/AboutLeaderSection";
import LeaderSection from "@/components/ui/OurLeadership/LeaderSection";
import LeadershipMovementSection from "@/components/ui/OurLeadership/LeadershipMovementSection";
import LeadershipTeamMembersSection from "@/components/ui/OurLeadership/LeadershipTeamMembersSection";
import SubscriptionSection from "@/components/ui/SubscriptionSection";

const OurLeadershipPage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Spacer for fixed navbar */}
            <div className="h-[104px]" />
            <main>
                <LeaderSection />
                <AboutLeaderSection />
                <LeadershipTeamMembersSection />
                <LeadershipMovementSection />
                <SubscriptionSection
                    tag="Join the Movement"
                    headingLine1="BE PART OF THE"
                    headingLine2="change we wish to see"
                    description="Join thousands of others in supporting our leaders’ vision for a stronger, culturally proud Odisha. Sign up for updates on our initiatives, campaigns, and ways you can get involved in making a real difference."
                />
            </main>
            <Footer />
        </div>
    );
};

export default OurLeadershipPage;
