import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { WhereWeWorkIntroData } from "@/shared/constants/about.data";
import { WorkingLocations } from "@/shared/constants/vision.data";



const WhereWeWorkSection = () => {
  return (
    <section className="bg-white py-20 md:py-28 px-6 lg:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {WhereWeWorkIntroData.map((intro, index) => (
              <div key={index}>
                <p className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4">
                  {intro.tagline}
                </p>

                <h2 className="font-serif text-5xl xl:text-7xl font-light text-[#222] mb-10 leading-[1.1]">
                  {intro.headingLine1}
                  <br />
                  <span className="font-serifNoto font-normal italic">{intro.headingLine2}</span>
                </h2>

                <p className="font-body font-light text-muted-foreground text-base leading-relaxed max-w-lg mb-8">
                  {intro.description}
                </p>
              </div>
            ))}

            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* Right - Location cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {WorkingLocations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="flex items-center gap-3 bg-primary px-5 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>

                <span className="font-body font-medium text-sm text-white">
                  {loc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWorkSection;