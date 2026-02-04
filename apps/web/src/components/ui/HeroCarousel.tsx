import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/shared/constants/constantData";


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-16 py-4 md:py-0">
              <div className="max-w-4xl ">
                <h1 className="font-heading text-5xl md:text-5xl font-bold text-white leading-none my-2">
                  {slide.title}
                </h1>
                {/* Highlight with per-line wipe backgrounds */}
                {index === currentSlide ? (
                  <div className="mb-6">
                    {(Array.isArray(slide.highlight)
                      ? slide.highlight
                      : String(slide.highlight).split("\n")
                    ).map((line, i) => (
                      <div key={`${slide.id}-${i}`} className="leading-none mb-3 last:mb-0">
                        <span className="relative inline-block overflow-hidden align-top">
                          {/* sliding background (fits this line only) */}
                          <span
                            className={`absolute inset-0 ${slide.highlightBg ?? "bg-secondary"} animate-wipe-bg`}
                            style={{ animationDelay: `${i * 180}ms` }} // stagger: line 2 starts after line 1
                            aria-hidden="true"
                          />

                          {/* text on top */}
                          <span className="relative z-10 ps-1 pe-3 text-black font-heading text-5xl md:text-6xl font-bold">
                            {line}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Keeps layout stable while inactive 
                  <div className="mb-6">
                    {(Array.isArray(slide.highlight)
                      ? slide.highlight
                      : String(slide.highlight).split("\n")
                    ).map((line, i) => (
                      <div key={`${slide.id}-static-${i}`} className="leading-none">
                        <span className="font-heading text-5xl md:text-6xl font-bold text-white ">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                )}


                <p className="text-lg text-white/90 mb-6 max-w-md">
                  {slide.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-white font-semibold underline underline-offset-4 hover:text-secondary transition-colors"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
              ? "bg-white scale-110"
              : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Angled Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 fill-background"
          preserveAspectRatio="none"
        >
          <polygon points="0,120 1440,120 1440,60 0,120" />
          <polygon points="0,120 480,80 960,100 1440,60 1440,120" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroCarousel;
