import { motion } from "framer-motion";
import heroImage from "@/assets/images/Konark_chakra.jpg";
import TaglineBadge from "@/shared/components/TaglineBadge";
import { PressHeroData } from "@/shared/constants/press.data";

const PressHeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Press Room Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Teal diagonal overlay on right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 backdrop-blur-[2px]"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-primary" preserveAspectRatio="none">
          <path d="M0,120 L1440,40 L1440,120 Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <TaglineBadge 
              text={PressHeroData.tagline} 
              textColor="text-white" 
              bgClassName="bg-primary border-primary/30" 
              alignment="left"
            />
            <h1 className="font-serif text-5xl md:text-8xl font-light text-white leading-[0.95] mb-8 uppercase">
              {PressHeroData.headingLine1}<br />{PressHeroData.headingLine2}
            </h1>
            <p className="font-merriweather font-light text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              {PressHeroData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PressHeroSection;
