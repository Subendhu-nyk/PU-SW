import { motion } from "framer-motion";
import { VisionTickerData } from "@/shared/constants/constantData";

const VisionTickerSection = () => {
  return (
    <section className="bg-navy py-6 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16"
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className="text-primary-foreground/70 text-sm font-heading font-semibold uppercase tracking-[0.15em] shrink-0"
            >
              {VisionTickerData.tickerText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionTickerSection;
