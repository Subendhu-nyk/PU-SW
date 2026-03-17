import { motion } from "framer-motion";
import { HeartHandshake, BookType, ShipWheel } from "lucide-react";
import transformImage from "@/assets/images/Development_Farm.png";
import { VisionTransformSystemsData } from "@/shared/constants/constantData";

const iconMap = {
  HeartHandshake,
  BookType,
  ShipWheel,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const VisionTransformSystemsSection = () => {
  return (
    <section className="py-20 md:py-18 bg-light-gray">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={transformImage}
              alt="Animals in a peaceful setting"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div {...fadeInUp}>
            <p className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4">
              {VisionTransformSystemsData.tagline}
            </p>
            <h2 className="font-serif text-5xl xl:text-7xl font-light text-[#222] mb-4 leading-[1.1]">
              {VisionTransformSystemsData.heading}
            </h2>
            <p className="font-body font-light text-muted-foreground text-base leading-relaxed mb-4">
              {VisionTransformSystemsData.description}
            </p>
            <ul className="space-y-4">
              {VisionTransformSystemsData.listItems.map((item, i) => {
                const Icon = item.icon ? iconMap[item.icon as keyof typeof iconMap] : null;

                return (
                  <li key={i} className="flex gap-3 items-start">
                    {Icon ? (
                      <Icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                    )}
                    <span className="text-foreground font-body font-light">
                      <strong className="font-merriweather font-bold text-primary">{item.bold}</strong> {item.rest}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="font-body font-light text-muted-foreground text-base leading-relaxed mt-4">
              {VisionTransformSystemsData.bottomText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionTransformSystemsSection;
