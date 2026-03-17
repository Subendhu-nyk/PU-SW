import AboutLeaderSection from "./sections/AboutLeaderSection";
import LeaderSection from "./sections/LeaderSection";
import LeadershipMovementSection from "./sections/LeadershipMovementSection";
import LeadershipTeamMembersSection from "./sections/LeadershipTeamMembersSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";

const LeadershipPage = () => {
    return (
        <>
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
        </>
    );
};

export default LeadershipPage;
