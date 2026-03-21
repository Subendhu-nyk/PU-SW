import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VolunteerFAQData } from "@/shared/constants/volunteer.data";
import { Plus, Minus, ArrowRight } from "lucide-react";
import TaglineBadge from "@/shared/components/TaglineBadge";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const VolunteerFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl px-12">
        <TaglineBadge text="GOT QUESTIONS?" alignment="left" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16 text-left">
           <div className="max-w-md">
              <motion.h2 
                {...fadeInUp}
                className="font-serif text-4xl md:text-5xl font-bold text-[#222] leading-tight uppercase"
              >
                ANSWERS FOR <br /> YOUR NEXT STEP
              </motion.h2>
           </div>
           {/* <motion.button 
             {...fadeInUp}
             transition={{ delay: 0.2 }}
             className="flex items-center gap-2 text-primary font-bold text-sm border-2 border-primary/20 px-6 py-3 rounded-full hover:bg-primary/5 transition-all uppercase tracking-widest"
           >
              More FAQs <ArrowRight size={16} />
           </motion.button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {VolunteerFAQData.map((item, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
              className={`border-b border-slate-200 py-6 transition-all ${openIndex === i ? "border-primary/40" : ""}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className={`font-serif text-lg md:text-xl font-bold transition-colors ${openIndex === i ? "text-primary" : "text-slate-800 group-hover:text-primary"}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-slate-600 leading-relaxed font-merriweather font-light text-[15px] max-w-xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerFAQ;
