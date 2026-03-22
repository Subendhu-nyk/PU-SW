import { ExternalLink } from "lucide-react";
import { InTheNewsData } from "@/shared/constants/press.data";

const PressRoomSection = () => {
  return (
    <section className="mb-24">
      <h2 className="font-serif text-3xl md:text-4xl text-[#222] mb-12 leading-tight">
        Punya Utkal in the News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {InTheNewsData.map((item, i) => (
          <article key={i} className="group cursor-pointer flex flex-col h-full">
            <time className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
              {item.date}
            </time>
            <h3 className="font-serif text-xl md:text-2xl text-[#222] font-bold leading-tight mb-4 group-hover:text-[#f15a24] transition-colors">
              {item.title}
            </h3>
            <p className="font-merriweather font-light text-slate-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
              {item.excerpt}
            </p>
            <div className="mt-auto">
                <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#222] font-bold uppercase text-[10px] tracking-widest inline-flex items-center gap-1 group/link"
                >
                External Source
                <ExternalLink size={12} className="ml-1 opacity-60" />
                </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PressRoomSection;
