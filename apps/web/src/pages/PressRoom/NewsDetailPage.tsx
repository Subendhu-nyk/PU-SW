import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AllReleasesData } from "@/shared/constants/press.data";
import ArticleContent from "./components/ArticleContent";
import NewsSidebar from "./components/NewsSidebar";
import LatestNewsSection from "./components/LatestNewsSection";
import SubscriptionSection from "@/shared/components/SubscriptionSection";
import TaglineBadge from "@/shared/components/TaglineBadge";
import { useEffect } from "react";

const NewsDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the article by slug
  const article = AllReleasesData.find((item) => item.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/press-room" replace />;
  }

  const { title, fullContent } = article;

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={fullContent?.heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay on left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Teal diagonal overlay on right */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 backdrop-blur-[2px] hidden md:block"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
          />
        </div>

        {/* Bottom diagonal cut */}
        <div className="absolute bottom-[-1px] left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" className="w-full fill-white" preserveAspectRatio="none">
            <path d="M0,120 L1440,40 L1440,120 Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <TaglineBadge 
                text={fullContent?.category || "PRESS RELEASE"} 
                textColor="text-white" 
                bgClassName="bg-primary/80 border-primary/30" 
                alignment="left"
              />
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 uppercase tracking-tight">
                {title}
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        {/* Dot pattern background (subtle) */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Main content area */}
        <main className="container mx-auto px-6 lg:px-16 pb-24">
          <div className="flex flex-col lg:flex-row gap-16">
            <ArticleContent article={article} />
            <NewsSidebar currentSlug={slug} />
          </div>
        </main>

        <LatestNewsSection currentSlug={slug} />

        <div className="py-12 bg-slate-50">
          <SubscriptionSection
            tag="Stay Inspired"
            headingLine1="HOPE GROWS WHEN"
            headingLine2="WE ACT TOGETHER"
            description="Follow our journey of care, culture, and community. Discover how simple acts of kindness can create lasting impact when we stand together."
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
