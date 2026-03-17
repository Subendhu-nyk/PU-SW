import { motion } from "framer-motion";
import { VisionHeroData } from "@/shared/constants/vision.data";
import heroImage from "@/assets/images/Konark_chakra.jpg"; 

const VisionHeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage} // For now we keep the placeholder
          alt="Vision Hero Image"
          className="w-full h-full object-cover"
        />
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Dark overlay on left side for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        {/* Teal diagonal overlay on right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-40"
          style={{
            background: "linear-gradient(135deg, transparent 40%, hsl(181 100% 34% / 0.6) 100%)",
          }}
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md"
          >
            <h1 className="font-serif text-5xl md:text-8xl font-light tracking-[0.1em] text-white leading-[0.95] mb-8">
              {VisionHeroData.headingLine1}<br />{VisionHeroData.headingLine2}
            </h1>
            <p className="font-serifNoto font-normal italic text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              {VisionHeroData.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionHeroSection;
