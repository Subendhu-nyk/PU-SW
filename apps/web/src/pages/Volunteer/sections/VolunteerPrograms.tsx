import { motion } from "framer-motion";
import { VolunteerMissionData, VolunteerProgramsData } from "@/shared/constants/volunteer.data";
import { ArrowRight, Trees, HeartPulse, ShieldCheck, Waves, Users } from "lucide-react";
import { Link } from "react-router-dom";
import communityUpliftmentImg from "@/assets/images/Development_Farm.png";
import culturalPreservationImg from "@/assets/images/Care_Education.png";
import TaglineBadge from "@/shared/components/TaglineBadge";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const VolunteerPrograms = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <TaglineBadge text={VolunteerMissionData.tagline} />
        <div className="max-w-5xl mb-16 px-6 mx-auto">
          <motion.h2
            {...fadeInUp}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-6 leading-[1.1]"
          >
            {VolunteerMissionData.headingLine1} <span className="font-serifNoto font-normal italic text-primary">{VolunteerMissionData.headingLine2}</span>
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="font-merriweather font-light text-[17px] leading-relaxed text-slate-600"
          >
            {VolunteerMissionData.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-10">
          {/* Card 1: communityUpliftment (Wide) */}
          <motion.div
            {...fadeInUp}
            className="md:col-span-8 relative rounded-[32px] overflow-hidden group min-h-[400px] md:min-h-[450px]"
          >
            <img src={communityUpliftmentImg} alt="communityUpliftment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute top-6 left-6 bg-[#f15a24] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest z-10">{VolunteerProgramsData.communityUpliftment.tag}</div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
                <div className="max-w-xl text-start">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight uppercase">
                    {VolunteerProgramsData.communityUpliftment.headingLine1} <br />
                    {VolunteerProgramsData.communityUpliftment.headingLine2}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                    {VolunteerProgramsData.communityUpliftment.description}
                  </p>
                </div>
                <Link to={VolunteerProgramsData.communityUpliftment.buttonLink} className="w-full md:w-auto whitespace-nowrap bg-white text-primary text-[11px] font-bold px-8 py-3.5 rounded-full uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-lg flex items-center justify-center gap-2">
                  {VolunteerProgramsData.communityUpliftment.buttonText} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: culturalPreservation Clean-up (Vertical) */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 relative rounded-[32px] overflow-hidden group min-h-[400px] md:min-h-[450px] flex flex-col justify-between p-8 sm:p-10 bg-[#06645a] text-white"
          >
            <div className="absolute inset-0 overflow-hidden opacity-40">
              <img src={culturalPreservationImg} alt="culturalPreservation Clean-up" className="w-full h-full object-cover grayscale mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative z-10 text-start">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight uppercase">
                {VolunteerProgramsData.culturalPreservation.headingLine1} <br />
                {VolunteerProgramsData.culturalPreservation.headingLine2}
              </h3>
            </div>
            <div className="relative z-10 text-start">
              <p className="text-white/80 text-sm mb-6 md:mb-8 leading-relaxed font-light">
                {VolunteerProgramsData.culturalPreservation.description}
              </p>
              <Link to={VolunteerProgramsData.culturalPreservation.buttonLink} className="flex items-center gap-2 w-full sm:w-fit text-white/90 text-[11px] font-bold uppercase tracking-widest border border-white/30 px-6 py-2.5 rounded-full hover:bg-white/10 transition-all justify-center sm:justify-start">
                {VolunteerProgramsData.culturalPreservation.buttonText} <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: healthcareSupport Outreach (Vertical) */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 relative rounded-[32px] overflow-hidden group min-h-[350px] md:min-h-[400px] flex flex-col justify-between p-8 bg-[#00695c] text-white"
          >
            <div className="absolute inset-0 overflow-hidden opacity-40">
              <img src={culturalPreservationImg} alt="culturalPreservation Clean-up" className="w-full h-full object-cover grayscale mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative z-10 text-start">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 uppercase leading-tight">
                {VolunteerProgramsData.healthcareSupport.headingLine1} <br />
                {VolunteerProgramsData.healthcareSupport.headingLine2}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light mb-6">
                {VolunteerProgramsData.healthcareSupport.description}
              </p>
            </div>
            <div className="relative z-10">
              <Link to={VolunteerProgramsData.healthcareSupport.buttonLink} className="flex items-center gap-2 w-full sm:w-fit text-white/90 text-[11px] font-bold uppercase tracking-widest border border-white/30 px-6 py-2.5 rounded-full hover:bg-white/10 transition-all justify-center sm:justify-start">
                {VolunteerProgramsData.healthcareSupport.buttonText} <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Card 4: volunteerSupport Global Volunteers (Stats card) */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 relative rounded-[32px] overflow-hidden p-8 sm:p-10 bg-[#052e28] text-white flex flex-col xl:flex-row items-start xl:items-center gap-8 md:gap-10"
          >
            <div className="absolute inset-0 overflow-hidden opacity-40">
              <img src={culturalPreservationImg} alt="culturalPreservation Clean-up" className="w-full h-full object-cover grayscale mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative z-10 flex-1 text-start">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 md:mb-6 leading-tight uppercase">
                {VolunteerProgramsData.volunteerSupport.headingLine1} {VolunteerProgramsData.volunteerSupport.headingLine2} <br />
                {VolunteerProgramsData.volunteerSupport.headingLine3}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 md:mb-10 font-light">
                {VolunteerProgramsData.volunteerSupport.description}
              </p>
              <Link to={VolunteerProgramsData.volunteerSupport.buttonLink} className="w-full sm:w-fit bg-white text-[#052e28] text-[11px] font-bold px-8 py-3.5 rounded-full uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg">
                {VolunteerProgramsData.volunteerSupport.buttonText} <Users size={14} />
              </Link>
            </div>
            <div className="relative z-10 flex flex-col gap-4 w-full xl:w-auto xl:min-w-[200px]">
              {VolunteerProgramsData.volunteerSupport.stats.map((stat, index) => (
                <div key={index} className={`${index === 0 ? "bg-[#f15a24]" : "bg-[#00695c]"} rounded-2xl p-6 flex flex-col justify-between h-[110px] md:h-[130px] text-white w-full`}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{stat.label}</span>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value},<span className="text-lg opacity-80">{stat.decimal}</span></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Quote Card */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 text-start relative rounded-[32px] overflow-hidden p-8 sm:p-10 bg-[#fef5ec] flex flex-col justify-center min-h-[280px] md:min-h-[400px]"
          >
            <p className="text-[#f15a24] text-lg sm:text-xl md:text-2xl font-serif font-bold italic leading-snug mb-6 md:mb-8">
              "{VolunteerProgramsData.quote.text}"
            </p>
            <div>
              <p className="text-[#f15a24] text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">— {VolunteerProgramsData.quote.author}</p>
              <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{VolunteerProgramsData.quote.role}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerPrograms;
