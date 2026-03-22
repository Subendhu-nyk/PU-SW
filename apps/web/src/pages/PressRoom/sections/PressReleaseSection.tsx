import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AllReleasesData } from "@/shared/constants/press.data";

const TOTAL_PAGES = 5; // Simulated

const PressReleaseSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
        <h2 className="font-serif text-3xl md:text-4xl text-[#222] leading-tight">
          News Releases
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-24">
        {AllReleasesData.map((item, i) => (
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
                <Link
                to={`/press-room/releases/${item.slug}`}
                className="text-[#222] font-bold uppercase text-[10px] tracking-widest inline-flex items-center group/link"
                >
                Read More
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mb-12" />

      {/* Pagination */}
      <nav className="flex items-center justify-between" aria-label="Pagination">
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
              <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 text-sm font-bold transition-all rounded-full border ${
                  page === currentPage
                  ? "bg-[#222] text-white border-[#222]"
                  : "text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600"
              }`}
              >
              {page}
              </button>
          ))}
          <span className="text-slate-300 mx-2">...</span>
        </div>
        
        <div className="flex items-center border border-slate-200 rounded-full p-1 bg-white shadow-sm">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
              currentPage === 1
                ? "text-slate-200 cursor-not-allowed"
                : "text-slate-600 hover:bg-slate-50 hover:text-primary"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="w-px h-6 bg-slate-100" />

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, TOTAL_PAGES))}
            disabled={currentPage === TOTAL_PAGES}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
              currentPage === TOTAL_PAGES
                ? "text-slate-200 cursor-not-allowed"
                : "text-slate-600 hover:bg-slate-50 hover:text-primary"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default PressReleaseSection;
