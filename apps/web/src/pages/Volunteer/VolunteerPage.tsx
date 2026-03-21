import VolunteerHero from "./sections/VolunteerHero";
import VolunteerPrograms from "./sections/VolunteerPrograms";
import VolunteerImpact from "./sections/VolunteerImpact";
import VolunteerStories from "./sections/VolunteerStories";
import VolunteerFAQ from "./sections/VolunteerFAQ";
import VolunteerSignup from "./sections/VolunteerSignup";
import SubscriptionSection from "@/shared/components/SubscriptionSection";

const VolunteerPage = () => {
  return (
    <main className="min-h-screen">
      <VolunteerHero />
      <VolunteerPrograms />
      <VolunteerImpact />
      <VolunteerStories />
      <VolunteerFAQ />
      <VolunteerSignup />
      
      {/* Reusing Subscription Section for additional engagement */}
      {/* <SubscriptionSection 
        tag="Volunteer Network"
        headingLine1="BECOME PART OF"
        headingLine2="something bigger"
        description="Join thousands of volunteers making a real difference. Sign up for our newsletter to stay updated on new programs and impact stories."
      /> */}
    </main>
  );
};

export default VolunteerPage;
