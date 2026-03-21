import { motion } from "framer-motion";
import React from "react";
import { LucideIcon } from "lucide-react";

interface TaglineBadgeProps {
  text: string;
  className?: string;
  textColor?: string;
  bgClassName?: string;
  alignment?: 'left' | 'center' | 'right';
  icon?: LucideIcon;
}

const TaglineBadge = ({ 
  text, 
  className = "", 
  textColor = "text-primary",
  bgClassName = "bg-orange-100 border-orange-200",
  alignment = 'center',
  icon: Icon
}: TaglineBadgeProps) => {
  const alignmentClasses = {
    left: "text-left justify-start",
    center: "text-center justify-center",
    right: "text-right justify-end"
  };

  return (
    <div className={`flex w-full ${alignmentClasses[alignment]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 border ${bgClassName} ${className}`}
      >
        {Icon && <Icon className={`w-4 h-4 ${textColor}`} strokeWidth={2.5} />}
        <span className={`tracking-[0.1em] text-[0.6rem] md:text-[0.8rem] font-bold uppercase ${textColor}`}>
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default TaglineBadge;
