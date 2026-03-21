import { VolunteerImpactData } from "@/shared/constants/volunteer.data";
import StatCounterSection from "@/shared/components/StatCounterSection";
import odishaPeopleImage from "@/assets/images/Odisha_People.jpg";

const VolunteerImpact = () => {
  return (
    <StatCounterSection
      tagline={VolunteerImpactData.tagline}
      taglineStyle="badge"
      heading1={VolunteerImpactData.headingLine1}
      heading2={VolunteerImpactData.headingLine2}
      className="bg-[#052e28]"
      backgroundImage={odishaPeopleImage}
      showBackgroundImage={true}
      overlayClassName="bg-[#052e28]/80"
      stats={VolunteerImpactData.stats.map((stat) => ({
        number: stat.value,
        label: stat.label,
      }))}
    />
  );
};

export default VolunteerImpact;
