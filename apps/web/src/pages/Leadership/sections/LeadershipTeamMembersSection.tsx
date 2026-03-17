import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import team1 from "@/assets/images/team-1.jpg";
import team2 from "@/assets/images/team-2.jpg";
import team3 from "@/assets/images/team-3.jpg";
import team4 from "@/assets/images/team-4.jpg";
import team5 from "@/assets/images/team-5.jpg";
import team6 from "@/assets/images/team-6.jpg";
import team7 from "@/assets/images/team-7.jpg";
import team8 from "@/assets/images/team-8.jpg";
import { leadershipTeamMembers } from "@/shared/constants/leadership.data";

const teamImageMap: Record<string, string> = {
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
};

const COLS = 4;

const LeadershipTeamMembersSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const displayIndex = clickedIndex ?? hoveredIndex;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (clickedIndex !== null && sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setClickedIndex(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [clickedIndex]);

  const handleClick = useCallback((index: number) => {
    setClickedIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    if (clickedIndex === null && window.innerWidth >= 1024) setHoveredIndex(index);
  }, [clickedIndex]);

  const handleMouseLeave = useCallback(() => {
    if (clickedIndex === null) setHoveredIndex(null);
  }, [clickedIndex]);

  // Determine expanded card placement
  // The active card stays visible; the expanded card spans the remaining 3 columns
  const getExpandedLayout = (index: number) => {
    const col = index % COLS; // 0-based column position
    // Active card column and expanded card spanning remaining columns
    // If card is in col 0 or 1, expanded goes right. If col 2 or 3, expanded goes left.
    const expandRight = col <= 1;
    return { col, expandRight };
  };

  const getRowMembers = (rowStart: number) => {
    return leadershipTeamMembers.slice(rowStart, rowStart + COLS);
  };

  const rows: number[][] = [];
  for (let i = 0; i < leadershipTeamMembers.length; i += COLS) {
    rows.push(Array.from({ length: Math.min(COLS, leadershipTeamMembers.length - i) }, (_, j) => i + j));
  }

  return (
    <section className="relative border-y border-foreground/10 bg-background py-10 lg:py-28 overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-8xl mx-auto px-8 lg:px-16" ref={sectionRef}>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="max-w-7xl mx-auto leading-[1.05] text-slate-900 flex flex-col items-center">
            <span className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] uppercase text-primary mb-2">
              MEET THE LEADERS WHO CARRY THE MISSION FORWARD
            </span>
            <span className="max-w-6xl mx-auto font-serifNoto font-normal italic text-lg md:text-xl lg:text-2xl text-foreground/70 mt-3 leading-relaxed">
              Dedicated individuals united by compassion, culture, and a shared vision for humanity.
            </span>
          </h2>
          <p className="max-w-5xl mx-auto font-merriweather font-light text-justify [text-justify:inter-word] [hyphens:auto] [overflow-wrap:anywhere] text-slate-700 text-[0.875rem] md:text-lg leading-relaxed my-5 px-1">
            Behind every meaningful movement stands a team of leaders driven by service, integrity, and purpose. Guided by our founder’s vision, they dedicate their experience and passion to strengthening communities and preserving Odisha’s cultural heritage. United by compassion and responsibility, they work tirelessly to uplift lives, protect traditions, and build a stronger future. Together, their collective voice and commitment keep the mission of humanity and culture moving forward.
          </p>
        </div>

        {/* Team Grid - row by row */}
        <div className=" max-w-6xl mx-auto flex flex-col gap-6 lg:gap-8">
          {rows.map((rowIndices, rowIdx) => {
            const activeInRow = displayIndex !== null && rowIndices.includes(displayIndex) ? displayIndex : null;
            const { expandRight } = activeInRow !== null ? getExpandedLayout(activeInRow) : { expandRight: true };

            return (
              <div key={rowIdx} className="relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                  {rowIndices.map((memberIdx) => {
                    const member = leadershipTeamMembers[memberIdx];
                    const isActive = displayIndex === memberIdx;
                    const isHiddenByExpand = activeInRow !== null && !isActive;

                    return (
                      <motion.div
                        key={member.name}
                        className="group"
                        animate={{
                          opacity: isHiddenByExpand ? 0 : 1,
                          scale: isHiddenByExpand ? 0.95 : 1,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          pointerEvents: isHiddenByExpand ? "none" : "auto",
                        }}
                      >
                        {/* Image */}
                        <div
                          className={`relative overflow-hidden rounded-lg mb-3 aspect-[3/4] bg-secondary transition-all duration-300 ${isActive
                            ? "ring-2 ring-foreground shadow-lg shadow-foreground/10"
                            : ""
                            }`}
                        >
                          <img
                            src={teamImageMap[member.image as keyof typeof teamImageMap] || member.image}
                            alt={member.name}
                            className={`w-full h-full object-cover object-top transition-all duration-500 ${isActive
                              ? "grayscale-0 brightness-100 saturate-100"
                              : "grayscale brightness-75 contrast-110 saturate-0"
                              }`}
                            style={
                              !isActive
                                ? {
                                  filter:
                                    "grayscale(100%) brightness(0.75) contrast(1.1) sepia(30%) hue-rotate(180deg) saturate(1.5)",
                                }
                                : { filter: "none" }
                            }
                          />
                        </div>

                        {/* Info row - interactive trigger */}
                        <div
                          className="flex items-start justify-between cursor-pointer"
                          onClick={() => handleClick(memberIdx)}
                          onMouseEnter={() => handleMouseEnter(memberIdx)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div>
                            <p className="text-foreground font-medium text-sm">{member.name}</p>
                            <p className="text-muted-foreground text-xs">{member.role}</p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-0.5 opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Expanded info card overlay */}
                <AnimatePresence>
                  {activeInRow !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-0 h-full"
                      style={{
                        // Position: span 3 columns next to the active card
                        ...(expandRight
                          ? {
                            left: `calc(${((activeInRow % COLS) + 1) / COLS * 100}% + ${(activeInRow % COLS) < 3 ? "0.75rem" : "0"
                              })`,
                            right: "0",
                          }
                          : {
                            left: "0",
                            right: `calc(${(COLS - (activeInRow % COLS)) / COLS * 100}% + 0.75rem)`,
                          }),
                      }}
                    >
                      <div className="h-full rounded-lg bg-card border border-border/50 p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
                        {/* Background subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

                        {/* Close button (only for clicked state) */}
                        {clickedIndex === activeInRow && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setClickedIndex(null);
                            }}
                            className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}

                        <div className="relative z-10">
                          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-2">
                            {leadershipTeamMembers[activeInRow].role}
                          </p>
                          <h3 className="font-display text-2xl lg:text-3xl font-light text-foreground mb-4">
                            {leadershipTeamMembers[activeInRow].name}
                          </h3>
                          <div className="space-y-3">
                            {leadershipTeamMembers[activeInRow].bio.map((paragraph, i) => (
                              <p
                                key={i}
                                className="text-muted-foreground text-sm leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamMembersSection;
