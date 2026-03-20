import { motion } from "framer-motion";

interface PillarSectionProps {
  data: {
    tagline: string;
    heading1: string;
    heading2: string;
    paragraphs: string[];
  };
  bgColor?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const PillarSection = ({ data, bgColor = "bg-background" }: PillarSectionProps) => {
  return (
    <section className={`py-24 md:py-32 ${bgColor}`}>
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-center">
        <motion.p
          {...fadeInUp}
          className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4"
        >
          {data.tagline}
        </motion.p>
        <motion.h2
          {...fadeInUp}
          className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-10 leading-[1.1]"
        >
          {data.heading1} <span className="font-serifNoto font-normal italic text-primary">{data.heading2}</span>
        </motion.h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {data.paragraphs.map((text, i) => (
            <motion.p
              key={i}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className={`leading-relaxed text-slate-600 ${
                i === data.paragraphs.length - 1 
                  ? "font-serif text-primary text-[20px] mt-6" 
                  : i === 0 
                    ? "text-lg font-medium text-slate-700"
                    : "font-merriweather font-light text-[17px]"
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarSection;
