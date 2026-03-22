import { Bookmark, MoreHorizontal } from "lucide-react";

interface ArticleSection {
  type: "paragraph" | "heading" | "image";
  content: string;
  alt?: string;
}

interface ArticleContentProps {
  article: {
    title: string;
    date: string;
    fullContent?: {
      author: string;
      category: string;
      readTime: string;
      heroImage: string;
      sections: ArticleSection[];
    };
  };
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  const { title, date, fullContent } = article;
  
  if (!fullContent) return null;

  return (
    <article className="flex-1 min-w-0">
      {/* Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-y border-slate-100 py-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 font-merriweather">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
            {fullContent.author}
          </span>
          <span className="text-slate-300">·</span>
          <span>{date}</span>
          <span className="text-slate-300">·</span>
          <span className="text-primary font-bold uppercase tracking-widest text-[11px]">{fullContent.category}</span>
          <span className="text-slate-300">·</span>
          <span className="italic">{fullContent.readTime}</span>
        </div>
        <div className="flex items-center gap-4">
          <Bookmark className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
          <MoreHorizontal className="w-5 h-5 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>

      {/* Article body */}
      <div className="space-y-8">
        {fullContent.sections.map((section, index) => {
          if (section.type === "paragraph") {
            return (
              <p key={index} className="font-merriweather font-light text-slate-700 text-[18px] md:text-[20px] leading-relaxed">
                {section.content}
              </p>
            );
          }
          if (section.type === "heading") {
            return (
              <h2 key={index} className="font-serif text-2xl md:text-3xl font-bold text-[#222] mt-12 mb-6">
                {section.content}
              </h2>
            );
          }
          if (section.type === "image") {
            return (
              <div key={index} className="my-12">
                <img 
                  src={section.content} 
                  alt={section.alt || title} 
                  className="w-full h-auto rounded-xl shadow-lg" 
                />
                {section.alt && (
                  <p className="text-center text-xs text-slate-400 mt-4 italic font-merriweather">
                    {section.alt}
                  </p>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
};

export default ArticleContent;
