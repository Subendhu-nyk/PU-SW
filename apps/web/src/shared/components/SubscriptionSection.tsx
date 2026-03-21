import { useState } from "react";
import { Button } from "@/components/ui/button";
import konarkbg from "@/assets/images/konark-1.jpg";
import TaglineBadge from "./TaglineBadge";

interface SubscriptionSectionProps {
    tag?: string;
    headingLine1?: string;
    headingLine2?: string;
    description?: string;
}

const SubscriptionSection = ({
    tag = "Partner With Us",
    headingLine1 = "TOGETHER WE CAN",
    headingLine2 = "build a stronger odisha",
    description = "Together, we can create meaningful change across Odisha. Through education, community support, and cultural preservation, Punya Utkal works to uplift lives and strengthen society. Partner with us to bring hope, dignity, and opportunity to those who need it most.",
}: SubscriptionSectionProps) => {
    const [firstName, setFirstName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [optIn, setOptIn] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed:", { firstName, contactNumber, email, optIn });
    };

    return (
        <section className="relative bg-[hsl(216,28%,17%)] overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40 bg-fixed"
                style={{ backgroundImage: `url(${konarkbg})` }}
            />

            {/* Dark overlay to darken the background image */}
            <div className="absolute inset-0 z-0 bg-black/40" />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-teal/20 via-transparent to-primary/80" />

            {/* Dot pattern overlay */}
            {/* <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            /> */}

            <div className="relative z-10 max-w-[700px] mx-auto px-8 py-20 md:py-28 text-center">
                {/* Tag */}
                <TaglineBadge 
                    text={tag} 
                    alignment="center" 
                    textColor="text-white"
                    bgClassName="bg-primary border-primary/20 backdrop-blur-sm"
                />

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-2">
                    <span className="uppercase font-black font-serif text-5xl font-semibold tracking-[0.10em] tracking-tight">{headingLine1}</span>
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight mb-4">
                    <span className="italic font-normal font-serif text-5xl tracking-tight">{headingLine2}</span>
                </h2>

                {/* Description */}
                <p className="text-primary-foreground/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-merriweather font-light mb-10">
                    {description}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Name (required)"
                            required
                            maxLength={100}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="flex-1 px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            maxLength={100}
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="flex-1 px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email (required)"
                            required
                            maxLength={255}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none rounded-md"
                        />
                    </div>

                    <label className="flex items-center justify-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={optIn}
                            onChange={(e) => setOptIn(e.target.checked)}
                            className="h-4 w-4 border-2 border-primary-foreground/30 accent-primary"
                        />
                        <span className="text-primary-foreground/80 text-sm">
                            Yes, sign me up for email updates.
                        </span>
                    </label>

                    <div className="flex items-center justify-center gap-4 pt-2">
                        <Button
                            type="submit"
                            disabled={!optIn}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm uppercase tracking-widest px-10 py-6 rounded-full transition-opacity"
                        >
                            Subscribe
                        </Button>
                    </div>

                    <p className="text-primary-foreground/50 text-xs leading-relaxed pt-2 max-w-lg mx-auto">
                        By submitting your email address, you agree to receive email updates from Punya Utkal, including campaign updates and action alerts. You may unsubscribe any time.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SubscriptionSection;
