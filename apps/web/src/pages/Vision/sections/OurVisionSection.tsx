import { motion } from "framer-motion";
import { VisionForceForChangeData } from "@/shared/constants/vision.data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const OurVisionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl text-center">
        <motion.h2
          {...fadeInUp}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-8 leading-[1.1] text-center"
        >
          {VisionForceForChangeData.headingLine1} <span className="font-serifNoto font-normal italic text-primary">{VisionForceForChangeData.headingLine2}</span>
        </motion.h2>

        {VisionForceForChangeData.paragraphs.map((text, i) => (
          <motion.p
            key={i}
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
            className={`leading-relaxed ${i === 0 ? "font-serif text-[20px] text-slate-600 text-muted-foreground mb-4" : i === VisionForceForChangeData.paragraphs.length - 2 ? "font-serifNoto font-normal italic font-heading font-bold text-navy mb-4" : i === VisionForceForChangeData.paragraphs.length - 1 ? "font-serif text-primary text-[20px] mt-4" : "font-merriweather font-light text-[16px] leading-[1.4] mb-4"}`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default OurVisionSection;
