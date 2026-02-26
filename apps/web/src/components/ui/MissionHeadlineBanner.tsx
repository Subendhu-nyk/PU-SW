import { useState, useEffect } from "react";
import { Heart, HeartHandshake } from "lucide-react";
import Konark_chakra from "@/assets/images/Konark_chakra.jpg";
// const missionLines = [
//     { text: "every child deserves care & education.", duration: 700, cta: null },
//     { text: "compassion strengthens families and communities.", duration: 1100, cta: null },
//     { text: "together, we can build a stronger Odisha—through service and culture.", duration: 1600, cta: "Our mission »" },
// ];

const missionLines = [
    { text: "every child deserves care & education.", duration: 700 },
    { text: "compassion strengthens families and communities.", duration: 1000 },
    { text: "dignity and respect must guide elderly care.", duration: 900 },
    { text: "our heritage shapes our identity and future.", duration: 900 },
    { text: "volunteers turn small acts into lasting impact.", duration: 1000 },
    { text: "strong communities create shared progress.", duration: 900 },
    { text: "service today builds a better tomorrow.", duration: 1000 },
    { text: "together, we can build a stronger Odisha.", duration: 1400, cta: "Our mission »" },
];

const MissionHeadlineBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");

    useEffect(() => {
        const currentDuration = missionLines[currentIndex].duration;

        const timeout = setTimeout(() => {
            setPhase("exit");

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % missionLines.length);
                setPhase("enter");

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => setPhase("visible"));
                });
            }, 500);
        }, currentDuration + 2000);

        return () => clearTimeout(timeout);
    }, [currentIndex]);

    const getTransformStyle = () => {
        switch (phase) {
            case "exit":
                return { transform: "translateY(-100%)", opacity: 0 };
            case "enter":
                return { transform: "translateY(100%)", opacity: 0, transition: "none" };
            case "visible":
            default:
                return { transform: "translateY(0)", opacity: 1 };
        }
    };

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url(${Konark_chakra})`,
                }}
            >
                <div className="absolute inset-0 bg-foreground/60" />
            </div>

            {/* Content */}
            <div className="relative py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 h-[30vh]">
                <div className="relative flex items-center gap-4 md:gap-6 max-w-4xl w-full">
                    {/* Static label + icon (replaces BECAUSE) */}
                    <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                        <span className="font-serif text-4xl md:text-4xl font-bold text-white uppercase tracking-wide whitespace-nowrap">
                            WE BELIEVE
                        </span>
                        <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary flex-shrink-0" />
                    </div>

                    {/* Rotating sentence container */}
                    <div className="relative overflow-hidden flex items-center min-w-[200px] md:min-w-[350px]">
                        <p
                            className="text-2xl md:text-3xl text-white/90 text-start transition-all duration-500 ease-out font-serifNoto font-normal italic"
                            style={getTransformStyle()}
                        >
                            {missionLines[currentIndex].text}
                            {missionLines[currentIndex].cta && (
                                <span className="block not-italic">
                                    <a
                                        href="#"
                                        className="text-white font-semibold underline underline-offset-4 hover:text-secondary transition-colors text-lg md:text-xl"
                                    >
                                        {missionLines[currentIndex].cta}
                                    </a>
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* Yellow bottom bar */}
            <div className="h-10 bg-[#ff9b0f] w-full relative z-10" />
        </section>
    );
};

export default MissionHeadlineBanner;
