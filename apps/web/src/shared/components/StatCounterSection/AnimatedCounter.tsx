import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
}

export const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
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
