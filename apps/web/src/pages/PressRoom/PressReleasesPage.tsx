import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { AllReleasesData } from "@/shared/constants/press.data";
import SubscriptionSection from "@/shared/components/SubscriptionSection";

const TOTAL_PAGES = 5; // Simulated

const PressReleasesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="container mx-auto px-6 lg:px-16 pt-32 pb-16">
        <div className="mb-12">
          <Link
            to="/press-room"
            className="text-[#f15a24] font-bold uppercase text-[10px] tracking-widest inline-flex items-center group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Press Room
          </Link>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-[#222] mb-16 leading-tight">
          News Releases & Alerts
        </h1>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-24">
          {AllReleasesData.map((release, i) => (
            <article key={i} className="group cursor-pointer flex flex-col h-full">
              <time className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                {release.date}
              </time>
              <h2 className="font-serif text-xl md:text-2xl text-[#222] font-bold leading-tight mb-4 group-hover:text-[#f15a24] transition-colors">
                {release.title}
              </h2>
              <p className="font-merriweather font-light text-slate-600 text-[15px] leading-relaxed mb-6">
                {release.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/press-room/releases/${release.slug}`}
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
                className={`w-10 h-10 text-sm font-bold transition-all rounded-full border ${page === currentPage
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
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${currentPage === 1
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
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${currentPage === TOTAL_PAGES
                  ? "text-slate-200 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </nav>
      </div>

      <SubscriptionSection
        tag="For Odisha, Together"
        headingLine1="UNITED BY PURPOSE,"
        headingLine2="DRIVEN BY COMPASSION"
        description="From villages to cities and across the world, Odias are coming together to uplift lives and preserve our values. Stay connected and be a part of this shared journey of service."
      />
    </main>
  );
};

export default PressReleasesPage;
