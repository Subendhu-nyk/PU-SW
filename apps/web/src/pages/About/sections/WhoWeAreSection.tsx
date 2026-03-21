import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import developmentFarm from "@/assets/images/Development_Farm.png";
import { WhoWeAreIntroData } from "@/shared/constants/about.data";
import TaglineBadge from "@/shared/components/TaglineBadge";

const WhoWeAreSection = () => {
    return (
        <section className="relative bg-background py-24 md:py-36 overflow-hidden">
            {/* Full section Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${developmentFarm})` }}
            />
            {/* Transparent Black Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Floating decorative line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/50 relative z-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left - Large typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {WhoWeAreIntroData.map((intro, index) => (
                            <div key={index}>
                                <TaglineBadge 
                                    text={intro.tagline} 
                                    alignment="left"
                                    textColor="text-white"
                                    bgClassName="bg-primary/40 border-primary/20 backdrop-blur-sm"
                                    icon={Heart}
                                />

                                <h1 className="font-serif text-5xl md:text-8xl font-light tracking-[0.1em] text-white leading-[0.95] mb-8">
                                    {intro.headingLine1}
                                    <br />
                                    <span className="text-primary font-bold">{intro.headingLine2}</span>{" "}
                                    <span className="italic font-normal">{intro.headingLine3}</span>
                                </h1>

                                <div className="w-20 h-1 bg-primary/60 rounded-full mb-8" />

                                <p className="font-serifNoto font-normal italic text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                                    {intro.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right - Decorative card stack */}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
