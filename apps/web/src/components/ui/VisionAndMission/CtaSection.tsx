import { motion } from "framer-motion";
import { VisionCtaData } from "@/shared/constants/constantData";

const VisionCtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-8 leading-[1.1] text-center">
            {VisionCtaData.headingLine1} <span className="font-serifNoto font-normal italic text-primary">{VisionCtaData.headingLine2}</span>
          </h2>
          {VisionCtaData.paragraphs.map((text, i) => (
            <p key={i} className={`text-muted-foreground leading-relaxed ${i === VisionCtaData.paragraphs.length - 1 ? "mb-10" : "mb-6"}`}>
              {text}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {VisionCtaData.buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className={`${btn.className} text-primary font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 hover:opacity-90 transition-opacity`}
              >
                {btn.text}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionCtaSection;
