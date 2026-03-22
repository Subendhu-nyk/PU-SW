import { motion } from "framer-motion";
import PressHeroSection from "./sections/PressHeroSection";
import PressReleaseSection from "./sections/PressReleaseSection";
import PressRoomSection from "./sections/PressRoomSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";
import TaglineBadge from "@/shared/components/TaglineBadge";
import { PressRoomContentData } from "@/shared/constants/press.data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const PressRoomPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <PressHeroSection />

      <div className="container mx-auto px-6 lg:px-16 py-24">
        {/* Page Title */}
        <div className="flex flex-col items-center mb-16">
          <TaglineBadge
            text={PressRoomContentData.tagline}
            alignment="center"
          />
          <motion.h2
            {...fadeInUp}
            className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-8 leading-[1.1] text-center"
          >
            {PressRoomContentData.headingLine1} <span className="font-serifNoto font-normal italic text-primary">{PressRoomContentData.headingLine2}</span>
          </motion.h2>
        </div>

        {/* Punya Utkal in the News Section */}
        <PressRoomSection />

        {/* Divider */}
        <div className="h-px bg-slate-100 mb-24" />

        {/* News Releases and Alerts Section */}
        <PressReleaseSection />

        {/* Divider */}
        <div className="h-px bg-slate-100" />
      </div>

      <SubscriptionSection
        tag="Be Part of Something Meaningful"
        headingLine1="EVERY SMALL STEP"
        headingLine2="CREATES A BIG CHANGE"
        description="When people come together with purpose, lives begin to transform. Join our community to stay connected with stories, initiatives, and opportunities where your support can truly make a difference."
      />
    </main>
  );
};

export default PressRoomPage;
