import { useState, useEffect, useCallback } from "react";
import heroPerson from "@/assets/images/hero-person.png";
import konarkbg from "@/assets/images/konark-2.jpg";
import { chairmanVisionHeading, chairmanVisionPhrases } from "@/shared/constants/leadership.data";

const TYPING_SPEED = 100;
const ERASING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_ERASE = 500;

const LeaderSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentPhrase = chairmanVisionPhrases?.[currentIndex] || "";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, ERASING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % chairmanVisionPhrases.length);
          setIsTyping(true);
        }, PAUSE_AFTER_ERASE);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentPhrase]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Konark background specifically for this section */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-fixed"
        style={{ backgroundImage: `url(${konarkbg})` }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/60 z-0" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle gradient blobs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-60 left-1/6 w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[60dvh] lg:min-h-screen px-6 lg:px-16 pt-24 lg:pt-0">
        <div className="w-full max-w-6xl">
          <p className="tracking-[0.1em] text-[0.7rem] lg:text-[1.2rem] font-light uppercase mb-4 lg:mb-6">{chairmanVisionHeading}</p>

          <div className="relative min-h-[3em] lg:h-[1.2em] font-display font-light text-[clamp(1.5rem,8vw,4rem)] tracking-[0.02em] text-primary leading-tight lg:leading-[1.1]">
            <h1 className="font-serif font-light text-[2rem] md:text-[5rem] tracking-[0.02em] text-primary leading-tight lg:leading-[1.1]">
              {displayText}
              <span
                className="inline-block w-[2px] lg:w-[3px] h-[0.85em] bg-primary ml-1 align-middle"
                style={{ animation: "blink 1s steps(1) infinite" }}
              />
            </h1>
          </div>
        </div>
      </div>

      {/* Person image */}
      <div className="absolute right-0 bottom-0 h-[50dvh] lg:h-[85%] w-full lg:w-auto flex items-end justify-center lg:justify-end pointer-events-none z-10">
        <img
          src={heroPerson}
          alt="Business advisor"
          className="h-full w-auto object-contain object-bottom"
        />
      </div>

      {/* Bottom dark bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 lg:h-3 bg-card z-30" />
    </section>
  );
};

export default LeaderSection;
