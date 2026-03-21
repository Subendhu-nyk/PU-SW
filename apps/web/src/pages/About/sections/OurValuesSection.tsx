import { motion } from "framer-motion";
import { OurValuesData, OurValuesIntroData } from "@/shared/constants/about.data";
import TaglineBadge from "@/shared/components/TaglineBadge";

const OurValuesSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            {OurValuesIntroData.map((intro, index) => (
              <div key={index}>
                <TaglineBadge text={intro.tagline} alignment="left" />

                <h2 className="font-serif text-5xl xl:text-7xl font-light text-[#222] mb-10 leading-[1.1]">
                  {intro.headingLine1}
                  <br />
                  <span className="font-serifNoto font-normal italic">{intro.headingLine2}</span>
                </h2>

                <p className="font-body font-light text-muted-foreground text-base leading-relaxed">
                  {intro.description}
                </p>
              </div>
            ))}

            <div className="w-16 h-1 bg-primary rounded-full mt-8" />
          </motion.div>

          {/* Right - Value cards as timeline */}
          <div className="lg:col-span-8 relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8 lg:space-y-12">
              {OurValuesData.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="relative lg:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-0 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div className="bg-primary rounded-2xl p-8 transition-colors duration-300">
                    <div className="flex items-start gap-5">
                      <span className="font-serif text-4xl font-bold text-primary-foreground/20 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">
                          {val.title}
                        </h3>

                        <p className="font-body font-light text-primary-foreground/80 leading-relaxed text-sm">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;