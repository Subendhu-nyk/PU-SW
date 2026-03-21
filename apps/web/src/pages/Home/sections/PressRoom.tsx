import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { pressItemData } from "@/shared/constants/homepage.data";
import TaglineBadge from "@/shared/components/TaglineBadge";


const PressRoom = () => {
    const featuredItem = pressItemData[0];
    const sideItems = pressItemData.slice(1);

    return (
        <section className="relative py-16 md:py-24 border-t border-border overflow-hidden">
            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />
            <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
                <TaglineBadge text="IN THE NEWS" alignment="center" />
                <h2 className="text-2xl md:text-5xl font-serif font-semibold tracking-tight text-slate-900 text-center mb-12">
                    From the press room
                </h2>

                <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                    {/* Featured press item - ~55% */}
                    <div className="md:w-[55%] bg-[hsl(185,56%,93%)] rounded-sm p-8 md:p-10">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                            {featuredItem.date}
                        </p>
                        <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-900 mb-3">
                            {featuredItem.title}
                        </h3>
                        <p className="text-foreground/70 text-sm leading-relaxed font-merriweather font-light mb-4">
                            {featuredItem.description}
                        </p>
                        <Link
                            to="#"
                            className="inline-flex items-center gap-2 uppercase tracking-widest text-primary hover:opacity-70 transition-opacity font-merriweather font-light text-[14px] leading-[1.4]"
                        >
                            {featuredItem.linkText} <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Side press items - ~45% */}
                    <div className="md:w-[45%] flex flex-col justify-start divide-y divide-border">
                        {sideItems.map((item, index) => (
                            <div key={index} className={index === 0 ? "pb-8" : "pt-8"}>
                                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                                    {item.date}
                                </p>
                                <h3 className="text-lg md:text-xl font-serif text-slate-900 leading-snug mb-3">
                                    {item.title}
                                </h3>
                                <Link
                                    to="#"
                                    className="inline-flex items-center gap-2 uppercase tracking-widest text-primary hover:opacity-70 transition-opacity font-merriweather font-light text-[14px] leading-[1.4]"
                                >
                                    {item.linkText} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="#"
                        className="inline-flex items-center gap-2 uppercase tracking-widest text-primary hover:opacity-70 transition-opacity font-merriweather font-bold text-[14px] leading-[1.4]"
                    >
                        See more news ›
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PressRoom;
