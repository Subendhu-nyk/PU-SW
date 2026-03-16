// About section component
const AboutLeaderSection = () => {
  const bodyParagraphs = [
    "Driven by a deep sense of purpose and compassion, he has devoted his life to serving humanity and preserving the rich cultural identity of Odisha. His leadership is not defined by position or power, but by unwavering dedication to people, tradition, and truth.",
    <>A passionate poet and spiritual thinker, he expresses the divine essence of <strong className="font-semibold not-italic text-foreground">Lord Jagannath and Odia culture through devotional songs and poetry</strong>, inspiring communities to reconnect with their roots, values, and identity. His writings celebrate Odisha’s heritage, reminding society that culture is the soul of a community.</>,
    <>Beyond literature and spirituality, he has been a <strong className="font-semibold not-italic text-foreground">fearless and determined advocate for social causes</strong>, often standing alone yet never standing down when the dignity of people or the integrity of culture is at stake. His courage reflects the spirit of a true servant leader — one who chooses responsibility over comfort.</>,
    <>He is also a committed supporter of the <strong className="font-semibold not-italic text-foreground">Odia drama and performing arts community</strong>, actively encouraging artists, organizing cultural initiatives, and helping preserve Odisha’s vibrant theatrical traditions.</>,
    <>Working tirelessly, often beyond the limits of time or recognition, his journey reflects a single guiding belief: <strong className="font-semibold not-italic text-foreground">that service to humanity, preservation of culture, and devotion to divine values can together build a stronger and more compassionate society.</strong></>
  ];

  return (
    <section className="relative bg-background pt-20 md:pb-5 overflow-hidden">
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
          A LIFE DEDICATED TO HUMANITY, CULTURE & COURAGE
        </h2>
        <p className="font-serifNoto font-normal italic text-lg md:text-xl lg:text-2xl text-foreground/70 my-6 leading-relaxed">
          Champion of Odia heritage, fearless advocate for justice, &amp; a voice of devotion inspired by <br/> Lord Jagannath.
        </p>

        {/* Body text paragraphs */}
        <div className="max-w-5xl mx-auto">
          {bodyParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-merriweather font-light text-justify [text-justify:inter-word] [hyphens:auto] [overflow-wrap:anywhere] text-slate-700 text-[0.875rem] md:text-lg leading-relaxed mb-8 px-1"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeaderSection;
