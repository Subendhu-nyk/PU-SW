import { Link } from "react-router-dom";
import { AllReleasesData, InTheNewsData } from "@/shared/constants/press.data";

interface NewsSidebarProps {
  currentSlug?: string;
}

const NewsSidebar = ({ currentSlug }: NewsSidebarProps) => {
  // Trending: "Punya Utkal in the News" items
  const trending = InTheNewsData.slice(0, 4);
  
  // Editor's Pick: Other news releases (excluding current)
  const editorsPick = AllReleasesData
    .filter(item => item.slug !== currentSlug)
    .slice(0, 3);

  return (
    <aside className="w-full lg:w-80 shrink-0">
      {/* Trending Post */}
      <div className="mb-12">
        <h3 className="font-serif font-bold text-xl text-[#222] mb-6 pb-2 border-b-2 border-primary/20 italic tracking-tight">Trending Post</h3>
        <div className="space-y-8">
          {trending.map((item, i) => (
            <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-4 group cursor-pointer"
            >
              <span className="text-4xl font-serif font-black text-slate-100 group-hover:text-primary/10 transition-colors leading-none">
                {i + 1}
              </span>
              <div>
                <h4 className="font-serif text-[14px] font-bold text-[#222] leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest flex items-center gap-2 font-merriweather">
                  <span className="w-1 h-1 rounded-full bg-primary/40 block"></span>
                  {item.category} · {item.readTime || "4 MIN READ"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Editor's Pick */}
      <div className="sticky top-24">
        <h3 className="font-serif font-bold text-xl text-[#222] mb-6 pb-2 border-b-2 border-primary/20 italic tracking-tight">Editor's Pick</h3>
        <div className="space-y-10">
          {editorsPick.map((item, i) => (
            <Link key={i} to={item.href} className="group cursor-pointer block">
              <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-100 shadow-sm border border-slate-50">
                <img 
                  src={item.fullContent?.heroImage || "/src/assets/images/placeholder.jpg"} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-merriweather italic">
                {item.fullContent?.category || "IMPACT"}
              </span>
              <h4 className="font-serif text-[15px] font-bold text-[#222] leading-snug group-hover:text-primary transition-colors mt-2">
                {item.title}
              </h4>
              <p className="text-[11px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">
                {item.fullContent?.readTime || "5 MIN READ"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default NewsSidebar;
