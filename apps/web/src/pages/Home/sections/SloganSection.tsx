// import { ArrowRight, Heart } from "lucide-react";
// import { Button } from "./../button";

const SloganSection = () => {
  return (
    <section className="relative bg-[#1a2634] max-h-[800px] overflow-hidden flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Text content - Aligned to stay within a virtual 1400px container */}
        <div className="w-full md:w-[calc(max(0px,50vw-700px)+1400px*0.35)] flex justify-end px-8 md:px-0 py-12 md:py-20">
          <div className="w-full md:w-[calc(1400px*0.35)] flex flex-col justify-center md:pl-12 lg:pl-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-2">
              UNITE.
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] mb-2">
              SERVE.
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serifNoto italic text-white leading-[1.1] mb-8">
              Build Odisha.
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 max-w-sm font-merriweather font-light">
              Real change begins when people unite for a shared purpose. Join volunteers and supporters working to strengthen communities, preserve heritage, and serve those in need.
            </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10 max-w-sm font-merriweather font-extrabold">
              Join the mission to build a stronger Odisha.
            </p>                              
            <div>
              <a
                href="#volunteer"
                className="inline-block font-bold text-sm tracking-widest uppercase px-10 py-3.5 hover:bg-[#ffca28] transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {/* <Heart className="w-5 h-5 fill-white" /> */}
                Volunteer
              </a>
            </div>
          </div>
        </div>

        {/* Hero image - covers remaining space on the right */}
        <div className="flex-1 relative min-h-[400px] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1585675100414-add2e465a136?auto=format&fit=crop&q=80&w=1200"
            alt="Activists holding boycott signs at a protest rally"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Teal decorative bar */}
      <div className="h-3 bg-[#ff9b0f] w-full shrink-0" />
    </section>
  );
};

export default SloganSection;
