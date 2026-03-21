import { motion } from "framer-motion";
import { VolunteerSignupData } from "@/shared/constants/volunteer.data";
import TaglineBadge from "@/shared/components/TaglineBadge";
import { ContactForm } from "@/shared/components/ContactForm";

// Import local assets for scroller
import img1 from "@/assets/images/Care_Education.png";
import img2 from "@/assets/images/Heart_Odisha.png";
import img3 from "@/assets/images/konark-1.jpg";
import img4 from "@/assets/images/Development_Farm.png";
import img5 from "@/assets/images/Odishaheritage.png";
import img6 from "@/assets/images/Old_Age.png";
import img7 from "@/assets/images/Odisha_People.jpg";
import img8 from "@/assets/images/Punya_Utkal_1.png";
import img9 from "@/assets/images/konark-2.jpg";

const colA = [img1, img2, img3];
const colB = [img4, img5, img6];
const colC = [img7, img8, img9];

interface ScrollColumnProps {
  images: string[];
  direction: "up" | "down";
}

function ScrollColumn({ images, direction }: ScrollColumnProps) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="scroll-fade-mask overflow-hidden h-full flex-1 min-w-0">
      <div
        className={
          direction === "up" ? "scroll-track-up" : "scroll-track-down"
        }
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="mb-3 overflow-hidden rounded-xl"
            style={{ borderRadius: "calc(var(--radius) + 4px)" }}
          >
            <img
              src={src}
              alt=""
              className="w-full object-cover aspect-[3/4] transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function VerticalScroller() {
  return (
    <div className="flex gap-3 h-full w-full overflow-hidden">
      <ScrollColumn images={colA} direction="up" />
      <ScrollColumn images={colB} direction="down" />
      <ScrollColumn images={colC} direction="up" />
    </div>
  );
}


const VolunteerSignup = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Vertical Scroller */}
      <div className="absolute inset-0 z-0">
        <VerticalScroller />
        {/* Deep Green Overlay with Blur */}
        <div className="absolute inset-0 bg-[#0a2e29]/90 backdrop-blur-[2px] z-10" />
      </div>

      {/* Centered Form Card */}
      <div className="relative z-20 w-full max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[48px] overflow-hidden shadow-3xl"
        >
          <div className="flex flex-col lg:flex-row h-full">
             {/* Left side of card - Header Info (matches previous image style) */}
             <div className="lg:w-[45%] relative min-h-[400px] flex flex-col justify-center p-12 lg:p-16 overflow-hidden">
                {/* Internal bg image for header */}
                <div className="absolute inset-0 z-0">
                  <img src={img3} alt="" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-[#0a2e29]/95" />
                </div>
                
                <div className="relative z-10">
                   <div className="inline-block px-4 py-1.5 rounded-full bg-[#7a3d2e] text-white text-[10px] font-bold tracking-[0.15em] uppercase mb-8">
                     START YOUR JOURNEY
                   </div>
                   <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] text-white mb-8 font-serif tracking-tight uppercase">
                     BEGIN <span className="text-white/95">YOUR</span><br />
                     IMPACT
                   </h2>
                   <p className="text-white/70 text-lg leading-relaxed italic font-serif max-w-md">
                     Right now is the time to start your journey that makes a difference in communities worldwide.
                   </p>
                </div>
             </div>

             {/* Right side of card - Actual Form */}
             <div className="flex-1 p-12 lg:p-16 bg-[#f8fcf9] overflow-y-auto">
                <ContactForm />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSignup;
