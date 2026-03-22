import { Link } from "react-router-dom";
import { AllReleasesData } from "@/shared/constants/press.data";
import { ArrowRight } from "lucide-react";

interface LatestNewsSectionProps {
  currentSlug?: string;
}

const LatestNewsSection = ({ currentSlug }: LatestNewsSectionProps) => {
  // Filter out current news and take latest 4
  const latestNews = AllReleasesData
    .filter(item => item.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-24 border-t border-slate-100 bg-slate-50/30">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#222] tracking-tight italic">Recommended For You</h2>
          <Link 
            to="/press-room/releases" 
            className="text-sm text-primary font-bold uppercase tracking-widest flex items-center group transition-colors"
          >
            See all stories
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {latestNews.map((item, i) => (
            <Link key={i} to={item.href} className="group cursor-pointer block">
              <div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] bg-slate-100 relative shadow-sm border border-slate-100">
                <img
                  src={item.fullContent?.heroImage || "/src/assets/images/placeholder.jpg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-merriweather">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                {item.fullContent?.category || "COMMUNITY"}
                <span className="ml-auto font-sans">{item.date}</span>
              </div>
              <h3 className="font-serif text-[16px] font-bold text-[#222] leading-snug group-hover:text-primary transition-colors mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[13px] text-slate-500 line-clamp-2 font-merriweather font-light leading-relaxed">
                {item.excerpt}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                    {item.fullContent?.readTime || "5 MIN READ"}
                </span>
                <span className="text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    READ STORY →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
