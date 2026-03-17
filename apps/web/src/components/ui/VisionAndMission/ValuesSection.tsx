import { motion } from "framer-motion";
import { VisionValuesData } from "@/shared/constants/constantData";
import { Users,HandFist,CircleStar,HeartHandshake,Award} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  HandFist,
  CircleStar,
  HeartHandshake,
  Award,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const VisionValuesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-4 leading-[1.1] text-center">
            {VisionValuesData.heading1} <span className="font-serifNoto font-normal italic text-primary">{VisionValuesData.heading2}</span>
          </h2>
          <p className="font-serif text-[20px] text-muted-foreground">
            {VisionValuesData.subheading}
          </p>
        </motion.div>

        {/* Top row - 3 values */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {VisionValuesData.items.slice(0, 3).map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              {(() => {
                const IconComponent = iconMap[value.icon];
                return IconComponent ? <IconComponent className="w-16 h-16 text-primary mx-auto mb-5" /> : null;
              })()}
              <p className="text-body leading-relaxed">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 2 values centered */}
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {VisionValuesData.items.slice(3).map((value, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="text-center"
            >
              {(() => {
                const IconComponent = iconMap[value.icon];
                return IconComponent ? <IconComponent className="w-16 h-16 text-primary mx-auto mb-5" /> : null;
              })()}
              <p className="text-body leading-relaxed">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionValuesSection;
