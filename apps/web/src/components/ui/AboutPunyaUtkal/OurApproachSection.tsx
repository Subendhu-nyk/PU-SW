import { motion } from "framer-motion";
import { HandHeart, Users, GraduationCap, Globe } from "lucide-react";
import { OurApproachData } from "@/shared/constants/constantData";

const ICON_MAP: Record<string, any> = {
    HandHeart,
    Users,
    GraduationCap,
    Globe,
};

const OurApproachSection = () => {
  return (
    <section className="bg-background py-20 md:py-28 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <p className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-5xl xl:text-7xl font-light text-[#222] mb-10 leading-[1.1]">
            Our <span className="font-serifNoto font-normal italic">Approach</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {OurApproachData.map(({ title, description, icon }, i) => {
            const IconComponent = ICON_MAP[icon];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-500 ${
                  i % 2 !== 0 ? "xl:mt-12" : ""
                }`}
              >
                <span className="font-display text-6xl font-bold text-primary/10 absolute top-4 right-6">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="font-body font-light text-slate-700 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;