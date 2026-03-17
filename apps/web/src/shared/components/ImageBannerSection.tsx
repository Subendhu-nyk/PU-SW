import { motion } from "framer-motion";
import React from "react";

interface ImageBannerSectionProps {
  imageSrc: string;
  imageAlt?: string;
  topHeading?: React.ReactNode;
  mainHeading: React.ReactNode;
  description?: string;
}

const ImageBannerSection = ({
  imageSrc,
  imageAlt = "Banner Background",
  topHeading,
  mainHeading,
  description,
}: ImageBannerSectionProps) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex items-end h-full pb-16 md:pb-24 px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-primary-foreground max-w-5xl"
        >
          {topHeading && (
            <span className="block text-2xl md:text-3xl font-heading font-bold uppercase tracking-wider mb-2">
              {topHeading}
            </span>
          )}
          <span className="block text-5xl md:text-8xl lg:text-[120px] font-heading font-black uppercase tracking-tight leading-none mb-4">
            {mainHeading}
          </span>
          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/90 font-serifNoto font-light max-w-3xl leading-relaxed mt-4">
              {description}
            </p>
          )}
        </motion.h2>
      </div>
    </section>
  );
};

export default ImageBannerSection;
