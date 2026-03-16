// Leadership Movement section component
const LeadershipMovementSection = () => {
  const bodyParagraphs = [
    <>The journey of our leaders is not simply about guiding an organization—it is about <strong className="font-semibold not-italic text-foreground">awakening a collective responsibility toward Odisha.</strong> Their stories reflect dedication to people, devotion to culture, and a belief that real change begins when individuals stand up for their communities.</>,
    <>From supporting education for children who dream beyond limitations, to protecting the dignity of elders, empowering women, and safeguarding the language, art, and traditions that define Odisha—our leadership works with one clear vision: <strong className="font-semibold not-italic text-foreground">a stronger, compassionate, and culturally proud Odisha.</strong></>,
    <>But leadership here is not meant to stand alone. It is meant to <strong className="font-semibold not-italic text-foreground">ignite others to rise.</strong></>,
    "Every volunteer, supporter, and community member who joins this mission becomes part of a larger movement—one that protects heritage, uplifts lives, and builds opportunities for future generations.",
    "Because the future of Odisha will not be shaped by one leader.",
    <strong className="font-semibold not-italic text-foreground">It will be shaped by thousands who choose to care, act, and lead together.</strong>
  ];

  return (
    <section className="relative bg-background pt-10 lg:pb-10 overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 md:max-w-7xl mx-auto px-8 lg:px-16 text-center">
        {/* Title */}
        <h2
          className="font-serif text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.05em] uppercase text-primary mb-2"
        >
          LEADERSHIP THAT SPARKS A MOVEMENT
        </h2>
        <p className="font-serifNoto font-normal italic text-lg md:text-xl lg:text-2xl text-foreground/70 my-6 leading-relaxed">
          When purpose meets courage, leadership becomes a force that changes the future of a society.
        </p>

        {/* Body text paragraphs */}
        <div className="max-w-5xl mx-auto">
          {bodyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-merriweather font-light text-justify [text-justify:inter-word] [hyphens:auto] [overflow-wrap:anywhere] text-slate-700 text-[0.875rem] md:text-lg leading-relaxed mb-4 px-1"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipMovementSection;
