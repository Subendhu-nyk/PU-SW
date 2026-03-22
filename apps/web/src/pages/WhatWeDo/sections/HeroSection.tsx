import { motion } from "framer-motion";
import { WhatWeDoHeroData } from "@/shared/constants/whatwedo.data";
import heroImage from "@/assets/images/Konark_chakra.jpg";
import TaglineBadge from "@/shared/components/TaglineBadge";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="What We Do Hero"
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        {/* Teal diagonal overlay on right */}
        <div
            className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 backdrop-blur-[2px] hidden md:block z-10"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      {/* Bottom diagonal cut transition */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" className="w-full fill-primary" preserveAspectRatio="none">
          <path d="M0,120 L1440,40 L1440,120 Z" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <TaglineBadge 
                text="WHAT WE DO" 
                textColor="text-white" 
                bgClassName="bg-primary/80 border-primary/30" 
                alignment="left"
            />

            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tight text-white leading-[0.95] mb-8 uppercase">
              {WhatWeDoHeroData.headingLine1}<br />
              <span className="text-primary font-bold">{WhatWeDoHeroData.headingLine2}</span>
            </h1>

            <div className="w-20 h-1 bg-primary rounded-full mb-8" />

            <p className="font-merriweather font-light text-lg md:text-xl text-white/90 max-w-xl leading-relaxed italic">
              {WhatWeDoHeroData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
