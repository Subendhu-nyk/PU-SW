import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VolunteerStoriesData } from "@/shared/constants/volunteer.data";
import { Play } from "lucide-react";
import team1 from "@/assets/images/team-1.jpg";
import team2 from "@/assets/images/team-2.jpg";
import team3 from "@/assets/images/team-3.jpg";
import team4 from "@/assets/images/team-4.jpg";
import team5 from "@/assets/images/team-5.jpg";
import odishaPeopleImage from "@/assets/images/Odisha_People.jpg";
import workImg from "@/assets/images/Care_Education.png";
import TaglineBadge from "@/shared/components/TaglineBadge";

const faces = [team4, team2, team3, team1, team5];
const rotations = [-5, 3, -2, 0, 4];

const VolunteerStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = VolunteerStoriesData.stories[activeIndex] || VolunteerStoriesData.stories[0];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-16 text-center mb-16">
        <TaglineBadge text={VolunteerStoriesData.tagline} />
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-6 leading-[1.1]"
        >
          {VolunteerStoriesData.headingLine1} <span className="font-serifNoto font-normal italic text-primary">{VolunteerStoriesData.headingLine2}</span>
          
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serifNoto font-light text-[17px] leading-relaxed text-slate-600 max-w-xl mx-auto"
        >
          {VolunteerStoriesData.description}
        </motion.p>
      </div>

      {/* Faces Gallery */}
      <div className="flex justify-center gap-2 md:gap-4 mb-24 px-4 md:px-10 overflow-x-auto pb-8 hide-scrollbar">
        {faces.map((face, i) => {
          const isActive = (i === 3 && activeIndex === 0) || (i !== 3 && activeIndex === i + 1); // Simple mapping to match design where i=3 is Sarah
          // Actually let's just make it simple: 4th card (i=3) is the primary one for the screenshot.
          const isSarahInDesign = i === 3;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => isSarahInDesign ? setActiveIndex(0) : setActiveIndex((i + 1) % VolunteerStoriesData.stories.length)}
              className="relative group cursor-pointer"
            >
              <div 
                className={`w-36 h-48 md:w-48 md:h-64 rounded-xl overflow-hidden shadow-xl transition-all duration-500 border-2 ${isSarahInDesign ? "border-white scale-110 z-20" : "border-transparent opacity-90 z-10"}`}
                style={{ transform: `rotate(${rotations[i]}deg)` }}
              >
                <img src={face} alt="Volunteer" className="w-full h-full object-cover" />
                {/* Overlay for inactive */}
                {!isSarahInDesign && (
                  <div className="absolute inset-0 bg-[#052e28]/70 group-hover:bg-[#052e28]/40 transition-colors" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Story Detail */}
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left: Text Content */}
            <div className="relative">
              {/* Quote Mark */}
              <div className="absolute -top-10 -left-6 text-7xl font-serif text-slate-200 opacity-50 font-black">
                “
              </div>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#E15A2B] mb-8 leading-[1.1] uppercase tracking-tight">
                {activeStory.storyHeading || "A TRANSFORMATIVE JOURNEY"}
              </h3>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-10 font-serifNoto font-medium">
                {activeStory.storyDescription}
              </p>
              <div className="flex items-center gap-2 text-slate-400 font-serifNoto font-light italic text-lg">
                <span className="w-8 h-[1px] bg-slate-200 mr-2" />
                — {activeStory.name}, {activeStory.duration}, {activeStory.role}, {activeStory.location}
              </div>
            </div>

            {/* Right: Images Section */}
            <div className="flex gap-4 h-[300px] md:h-[400px]">
              {/* Action Shot */}
              <div className="flex-[2] relative rounded-3xl overflow-hidden group shadow-2xl">
                 <img src={odishaPeopleImage} alt="Volunteer action" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/10" />
                 {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl hover:scale-110 transition-transform cursor-pointer">
                       <Play size={24} fill="white" />
                    </div>
                 </div> */}
              </div>
              {/* At Work shot */}
              <div className="flex-1 rounded-3xl overflow-hidden shadow-xl border border-white/10 grayscale-[10%] group">
                 <img src={activeIndex === 0 ? workImg : faces[activeIndex]} alt="Volunteer at work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VolunteerStories;
