import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredStoriesData } from "@/shared/constants/homepage.data";


const FeaturedStories = () => {
  return (
    <section className="relative py-16 md:py-24 border-t border-border overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-5xl font-serif font-semibold tracking-tight text-slate-900 text-center mb-12">
          Featured stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featuredStoriesData.map((story, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-serif text-2xl font-semibold text-slate-900 mb-3">
                {story.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-merriweather font-light mb-4">
                {story.description}
              </p>
              <Link
                to="#"
                className="inline-flex items-center gap-2 uppercase tracking-widest text-primary hover:opacity-70 transition-opacity font-merriweather font-light text-[14px] leading-[1.4]"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
