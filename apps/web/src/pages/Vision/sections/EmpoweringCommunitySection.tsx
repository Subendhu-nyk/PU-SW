import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { VisionGlobalForceData } from "@/shared/constants/vision.data";

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/,/g, "").replace(/\D/g, ""), 10) || 0;
  const hasPlus = value.includes("+");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        onComplete: () => setFinished(true),
      });
      return () => controls.stop();
    }
  }, [count, numericValue, inView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {hasPlus && (
        <span className={`transition-opacity duration-300 ${finished ? "opacity-100" : "opacity-0"}`}>
          +
        </span>
      )}
    </span>
  );
};

const EmpoweringCommunitySection = () => {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4">
            {VisionGlobalForceData.tagline}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-4 leading-[1.1] text-center">
            {VisionGlobalForceData.heading1} <span className="font-serifNoto font-normal italic text-primary">{VisionGlobalForceData.heading2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 pb-6">
          {VisionGlobalForceData.stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-heading font-black text-primary pb-6">
                <AnimatedCounter value={stat.number} />
              </p>
              <p className="text-body leading-relaxed mb-3">
                {stat.label}
              </p>           
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoweringCommunitySection;
