import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const actions = [
    {
        id: 1,
        title: "SUPPORT EDUCATION FOR EVERY CHILD",
        description:
            "Access to education can change a life. Help children learn, grow, and build a hopeful future with dignity.",
        tag: "Trending",
        signatures: null,
        image:
            "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&q=80",
    },
    {
        id: 2,
        title: "STAND WITH FAMILIES IN NEED",
        description:
            "Many families struggle for basic necessities. Your support brings care, relief, and renewed strength.",
        tag: null,
        signatures: "11,105",
        image:
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
    },
    {
        id: 3,
        title: "CARE FOR OUR ELDERLY WITH DIGNITY",
        description:
            "Elders deserve respect, comfort, and companionship at every stage of life.",
        tag: null,
        signatures: "10,827",
        image:
            "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    },
    {
        id: 4,
        title: "PRESERVE ODIA LANGUAGE & CULTURE",
        description:
            "Our heritage defines who we are. Help protect Odia traditions, literature, and values for generations to come.",
        tag: "Trending",
        signatures: null,
        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80",
    },
    {
        id: 5,
        title: "BUILD STRONGER COMMUNITIES",
        description:
            "Community welfare creates lasting change. Together, we can uplift lives and strengthen Odisha.",
        tag: null,
        signatures: "8,432",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80",
    },
    {
        id: 6,
        title: "JOIN HANDS TO CREATE IMPACT",
        description:
            "Every action counts. Volunteers and supporters together turn compassion into meaningful change.",
        tag: null,
        signatures: "11,105",
        image:
            "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1600&q=80",
    },
];


const ActionSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    const itemsPerView = 3;
    const maxIndex = Math.max(0, actions.length - itemsPerView);

    const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - itemsPerView));
    const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + itemsPerView));

    return (
        <section className="relative bg-[#f4f4f4] py-20 overflow-hidden">
            {/* subtle geometric pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60
        bg-[linear-gradient(135deg,rgba(0,0,0,0.035)_1px,transparent_1px)]
        [background-size:240px_240px]"
            />

            <div className="relative mx-auto max-w-[92rem] px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-[38px] md:text-[44px] leading-[1.05] text-slate-900">
                        <span className="font-serifNoto font-normal italic">
                            One minute of your time can help{" "}
                        </span>
                        <span className="font-montserrat font-bold uppercase tracking-wide">
                            change lives around us
                        </span>
                    </h2>
                    <p className="mt-5 font-serif text-[20px] text-slate-600">
                        Every voice matters—add yours to create real change where it’s needed most.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className={[
                                isMobile
                                    ? "flex flex-col gap-10"
                                    : "flex transition-transform duration-500 ease-out",
                            ].join(" ")}
                            style={
                                isMobile
                                    ? undefined
                                    : { transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }
                            }
                        >
                            {actions.map((action, idx) => {
                                const isFirstInRow = idx % itemsPerView === 0;

                                return (
                                    <div key={action.id} className={isMobile ? "w-full" : "flex-shrink-0 w-full md:w-1/3"}>
                                        {/* divider between cards (like reference) */}
                                        <div
                                            className={[
                                                "h-full px-10",
                                                "border-slate-300/70",
                                                // vertical dividers on desktop between columns
                                                !isFirstInRow ? "md:border-l md:pl-10 md:ml-0" : "",
                                                // subtle horizontal divider on mobile between stacked items
                                                idx !== 0 ? "border-t md:border-t-0 pt-10 md:pt-0" : "",
                                            ].join(" ")}
                                        >
                                            <a href="#" className="group block">
                                                {/* Image (hover zoom OUT / slightly zoomed on hover) */}
                                                <div className="overflow-hidden bg-white">
                                                    <img
                                                        src={action.image}
                                                        alt={action.title}
                                                        className="
                              w-full h-[240px] md:h-[270px] object-cover
                              transform scale-[1.02]
                              transition-transform duration-700 ease-out
                              group-hover:scale-[0.98]
                            "
                                                    />
                                                </div>

                                                {/* Text */}
                                                <div className="pt-8">
                                                    <h3 className="font-montserrat uppercase font-bold tracking-wide text-slate-900 text-[24px] leading-[1.12]">
                                                        {action.title}
                                                    </h3>

                                                    <p className="mt-5 font-merriweather font-light text-slate-700 text-[18px] leading-[1.4]">
                                                        {action.description}
                                                    </p>

                                                    {/* CTA badge/button (rect + angled notch like reference) */}
                                                    {(action.tag || action.signatures) && (
                                                        <span
                                                            className="
                                inline-flex items-center justify-center
                                mt-9
                                bg-[#d71920] text-white
                                px-6 py-3
                                text-[14px] font-extrabold uppercase tracking-wide
                                relative
                                [clip-path:polygon(0_0,94%_0,100%_50%,94%_100%,0_100%)]
                              "
                                                        >
                                                            {action.tag ? action.tag : `${action.signatures} SIGNATURES`}
                                                        </span>
                                                    )}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation (dark square) */}
                    {!isMobile && currentIndex > 0 && (

                        <button
                            onClick={handlePrev}
                            className="
                absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                w-14 h-14 bg-slate-900/90 hover:bg-slate-900
                text-white flex items-center justify-center
                transition-colors
              "
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-7 h-7" />
                        </button>
                    )}

                    {!isMobile && currentIndex < maxIndex && (
                        <button
                            onClick={handleNext}
                            className="
                absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                w-14 h-14 bg-slate-900/90 hover:bg-slate-900
                text-white flex items-center justify-center
                transition-colors
              "
                            aria-label="Next"
                        >
                            <ChevronRight className="w-7 h-7" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ActionSection;
