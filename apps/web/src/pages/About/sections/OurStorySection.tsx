import { useState, useRef, Fragment } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import storyImage1 from "@/assets/images/konark-1.jpg";
import storyImage2 from "@/assets/images/Development_Farm.png";
import storyImage3 from "@/assets/images/konark-1.jpg";
import { StoryIntroData, StoryTimelineData } from "@/shared/constants/about.data";
import TaglineBadge from "@/shared/components/TaglineBadge";



const IMAGE_MAP: Record<string, string> = {
    storyImage1,
    storyImage2,
    storyImage3
};

const EventCard = ({ event }: { event: any }) => (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-[0_2px_20px_-6px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.14)] transition-shadow duration-[400ms] cursor-default w-full">
        {/* Image — full width top */}
        <div className="relative h-[200px] overflow-hidden">
            <img
                src={IMAGE_MAP[event.image] || event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="px-5 py-5">
            <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-1">
                <h3 className="font-montserrat font-semibold text-[17px] text-primary leading-tight">
                    {event.title}
                </h3>

                <p className="font-montserrat text-[14px] font-medium text-primary tracking-wide">
                    {event.subtitle}
                </p>
            </div>

            <p className="text-[13px] text-[#6b6560] leading-[1.5] font-merriweather font-light">
                {event.description}
            </p>
        </div>
    </div>
);

const DesktopTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const total = StoryTimelineData.length;
        if (total <= 1) return;
        const index = Math.min(Math.round(latest * (total - 1)), total - 1);
        if (index !== activeIndex) {
            setDirection(index > activeIndex ? 1 : -1);
            setActiveIndex(index);
        }
    });

    return (
        <div
            ref={containerRef}
            style={{ height: `${StoryTimelineData.length * 100}vh` }}
            className="relative hidden lg:block w-full bg-[#fafafa] py-10"
        >
            <div className="sticky top-0 h-screen w-full flex overflow-hidden max-w-7xl mx-auto px-6">
                {/* Left Column Story Panel */}
                <div className="w-6/12 h-full flex flex-col justify-center pr-16 relative">
                    {StoryIntroData.map((data, index) => (
                        <Fragment key={index}>
                            <TaglineBadge text={data.tagline} alignment="left" />
                            <h2 className="font-serif text-5xl xl:text-7xl font-light text-[#222] mb-10 leading-[1.1]">
                                {data.headingLine1}
                                <br />
                                <span className="font-serifNoto font-normal italic">{data.headingLine2}</span>
                            </h2>
                            <div className="bg-[#f5f2eb] rounded-[24px] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-white">
                                {data.paragraphs.map((para, pIndex) => (
                                    <p key={pIndex} className={`text-[#555] text-[0.95rem] font-merriweather font-light [hyphens:auto] [overflow-wrap:anywhere] text-slate-700 leading-relaxed ${pIndex !== data.paragraphs.length - 1 ? "mb-6" : ""}`}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </Fragment>
                    ))}
                </div>

                {/* Timeline Center Divider */}
                <div className="w-px h-full bg-primary relative z-0 ms-4" />

                {/* Right Column Events */}
                <div className="w-8/12 h-full relative flex flex-col justify-center pl-16 xl:pl-28">
                    {/* Fixed Year Badge on Center Line */}
                    <div className="absolute left-[calc(40px)] top-1/2 -translate-y-1/2 z-20 w-0 h-0 flex items-center justify-end">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={{
                                    enter: (dir: number) => ({ y: dir * 40, opacity: 0 }),
                                    center: { y: 0, opacity: 1 },
                                    exit: (dir: number) => ({ y: dir * -40, opacity: 0 }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="flex items-center absolute right-[1px]"
                            >
                                <div className="bg-white border border-red-500 rounded-full px-5 py-1.5 text-sm font-bold text-primary shadow-sm">
                                    {StoryTimelineData[activeIndex].year}
                                </div>
                                {/* <div className="w-8 xl:w-16 h-px bg-gray-300" /> */}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Timeline Events Column */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({ y: dir * 80, opacity: 0 }),
                                center: { y: 0, opacity: 1 },
                                exit: (dir: number) => ({ y: dir * -80, opacity: 0 }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                            className="flex flex-col gap-5 w-full relative z-10 py-10"
                        >
                            {StoryTimelineData[activeIndex].events.map((ev, i) => (
                                <div
                                    key={i}
                                    className="relative flex items-center w-full max-w-2xl"
                                >
                                    {/* Line Connector from right timeline edge to left card edge */}
                                    <div className="absolute left-[calc(-4rem)] xl:left-[calc(-7rem)] w-[4rem] xl:w-[7rem] flex items-center justify-start pointer-events-none z-10">
                                        <div className="w-[10px] h-[10px] rounded-full bg-primary ring-[3px] ring-white shadow-sm absolute left-[-5px]" />
                                        <div className="w-full h-px bg-primary ml-[5px]" />
                                    </div>
                                    <EventCard event={ev} />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const MobileTimeline = () => {
    return (
        <div className="block lg:hidden bg-[#fafafa] py-20 px-6 sm:px-12 font-body overflow-hidden">
            <div className="mb-16">
                {StoryIntroData.map((data, index) => (
                    <Fragment key={index}>
                        <TaglineBadge text={data.tagline} />
                        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#222] mb-10 leading-[1.1] text-center">
                            {data.headingLine1}
                            <br />
                            <span className="font-serifNoto font-normal italic">{data.headingLine2}</span>
                        </h2>
                        <div className="bg-[#f5f2eb] rounded-[24px] p-8 shadow-sm border border-white">
                            {data.paragraphs.map((para, pIndex) => (
                                <p key={pIndex} className={`text-[0.85rem] font-merriweather font-light [hyphens:auto] [overflow-wrap:anywhere] text-slate-700 leading-relaxed ${pIndex !== data.paragraphs.length - 1 ? "mb-4" : ""}`}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>

            <div className="hidden relative pl-6 sm:pl-10">
                <div className="absolute left-[8px] sm:left-[16px] top-0 bottom-0 w-px bg-gray-200" />

                <div className="flex flex-col gap-16">
                    {StoryTimelineData.map((yearGroup, yIdx) => (
                        <div key={yIdx} className="relative z-10 flex flex-col gap-8">
                            <div className="relative w-max">
                                <div className="absolute left-[-28px] sm:left-[-36px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#bf2ae0] ring-4 ring-[#fafafa]" />
                                <div className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-[0.8rem] font-bold text-gray-800 shadow-sm ml-2">
                                    {yearGroup.year}
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 w-full opacity-100 mt-2">
                                {yearGroup.events.map((ev, i) => (
                                    <div
                                        key={i}
                                        className="relative flex items-center w-full max-w-sm"
                                    >
                                        <div className="absolute left-[-24px] sm:left-[-32px] w-4 sm:w-8 flex items-center justify-start pointer-events-none z-10">
                                            <div className="w-[8px] h-[8px] rounded-full bg-[#bf2ae0] ring-[2px] ring-white shadow-sm absolute left-[-4px]" />
                                            <div className="w-full h-px bg-[#d4cfc8] ml-[4px]" />
                                        </div>
                                        <EventCard event={ev} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const OurStorySection = () => {
    return (
        <section className="relative w-full">
            <DesktopTimeline />
            <MobileTimeline />
        </section>
    );
};

export default OurStorySection;
