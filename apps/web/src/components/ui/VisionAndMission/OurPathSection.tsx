import { motion } from "framer-motion";
import { VisionOurPathData } from "@/shared/constants/constantData";
// Using existing placeholders
import iconMission from "@/assets/images/icon-mission.png";
import iconVision from "@/assets/images/icon-vision.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const VisionOurPathSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-4 leading-[1.1] text-center">
            {VisionOurPathData.heading1} <span className="font-serifNoto font-normal italic text-primary">{VisionOurPathData.heading2}</span>
          </h2>
          <p className="font-serif text-[20px] text-muted-foreground">
            {VisionOurPathData.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <img src={iconMission} alt="Mission icon" className="w-24 h-24 mx-auto mb-6 object-contain" />
            <h3 className="text-md font-heading font-black uppercase tracking-[0.2em] text-navy mb-3">
              {VisionOurPathData.mission.title}
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {VisionOurPathData.mission.description}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <img src={iconVision} alt="Vision icon" className="w-24 h-24 mx-auto mb-6 object-contain" />
            <h3 className="text-md font-heading font-black uppercase tracking-[0.2em] text-navy mb-3">
              {VisionOurPathData.vision.title}
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {VisionOurPathData.vision.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionOurPathSection;
