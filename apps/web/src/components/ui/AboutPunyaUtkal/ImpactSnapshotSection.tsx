import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bgImage from "../../../assets/images/Punya_Utkal_1.png";

const stats = [
  { value: 50, suffix: "+", label: "Communities Served" },
  { value: 10000, suffix: "+", label: "Lives Lifted" },
  { value: 500, suffix: "+", label: "Active Volunteers" },
  { value: 20, suffix: "+", label: "Cultural Events" },
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(1);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(1, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
      onComplete() {
        setCount(value);
        setCompleted(true);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  const finalText = `${value.toLocaleString()}${suffix}`;
  const currentText = `${count.toLocaleString()}${completed ? suffix : ""}`;

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="invisible whitespace-nowrap">{finalText}</span>
      <span className="absolute inset-0 whitespace-nowrap">{currentText}</span>
    </span>
  );
};

const ImpactSnapshotSection = () => {
  return (
    <section 
      className="relative bg-foreground py-24 md:py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--background))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-sm"
          >
            <p className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4">
              Our Impact
            </p>

            <h2 className="font-serif text-5xl xl:text-7xl font-light text-background mb-10 leading-[1.1]">
              Impact
              <br />
              <span className="font-serifNoto font-normal italic">Snapshot</span>
            </h2>

            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12 xl:gap-x-16 justify-items-center lg:self-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="w-full max-w-[220px] text-center"
              >
                <span className="block font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>

                <span className="block font-body text-background/60 font-medium tracking-wider text-[0.7rem] uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshotSection;