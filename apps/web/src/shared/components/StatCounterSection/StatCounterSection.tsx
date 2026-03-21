import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import TaglineBadge from "../TaglineBadge";
import { LucideIcon } from "lucide-react";

interface Stat {
  number: string;
  label: string;
}

interface StatCounterSectionProps {
  tagline: string;
  heading1: string;
  heading2?: string;
  stats: Stat[];
  className?: string;
  backgroundImage?: string;
  showBackgroundImage?: boolean;
  overlayClassName?: string;
  taglineStyle?: 'minimal' | 'badge';
  taglineAlignment?: 'left' | 'center' | 'right';
  taglineIcon?: LucideIcon;
}

const StatCounterSection = ({
  tagline,
  heading1,
  heading2,
  stats,
  className = "bg-navy",
  backgroundImage,
  showBackgroundImage = false,
  overlayClassName = "bg-black/70 md:bg-black/60",
  taglineStyle = 'minimal',
  taglineAlignment = 'center',
  taglineIcon,
}: StatCounterSectionProps) => {
  const isDarkBg = showBackgroundImage && backgroundImage;

  return (
    <section className={`py-24 md:py-32 ${className} relative overflow-hidden`}>
      {showBackgroundImage && backgroundImage && (
        <>
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </>
      )}
      
      <div className={`container mx-auto px-6 lg:px-16 max-w-6xl relative z-10 ${isDarkBg ? "text-white" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {taglineStyle === 'badge' ? (
            <TaglineBadge text={tagline} alignment={taglineAlignment} icon={taglineIcon} />
          ) : (
            <p className="tracking-[0.1em] text-[0.8rem] font-bold uppercase text-primary mb-4">
              {tagline}
            </p>
          )}
          <h2 className={`font-serif text-4xl sm:text-5xl font-bold mb-4 leading-[1.1] text-center ${isDarkBg ? "text-white" : "text-[#222]"}`}>
            {heading1} {heading2 && <span className="font-serifNoto font-normal italic text-primary">{heading2}</span>}
          </h2>
        </motion.div>

        <div className={`grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-8 pb-6 ${
          stats.length === 4 
            ? "md:grid-cols-4" 
            : stats.length === 2 
              ? "md:grid-cols-2" 
              : "md:grid-cols-3"
        }`}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-primary pb-3 md:pb-6">
                <AnimatedCounter value={stat.number} />
              </p>
              <p className={`text-sm md:text-[17px] leading-relaxed mb-3 ${isDarkBg ? "text-white/80" : "text-slate-600"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCounterSection;
