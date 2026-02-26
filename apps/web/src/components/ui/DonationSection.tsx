import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heart_Odisha from "@/assets/images/Heart_Odisha.png";

const DonationSection = () => {
    return (
        <section className="bg-background py-16 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-4xl leading-8 font-serif font-semibold text-slate-900">
                       Carrying your love to every soul in Odisha
                    </h2>
                    <p className="font-merriweather font-light text-muted-foreground text-md leading-relaxed max-w-lg">
                        What begins with you becomes a wave of hope flowing across Odisha. We carry your love into every district, stepping into villages, towns, and cities as messengers of your compassion, standing beside those who seek encouragement, opportunity, dignity, and belonging. Where there is hardship, your kindness becomes strength, and where there is uncertainty, your support becomes reassurance. Guided by the belief that compassion must reach everyone, not just a few, we continue expanding this circle of care, ensuring no community is unseen, no heart is unheard, and love finds its way to those who need it most.
                    </p>
                    <Button size="lg" className="font-bold tracking-wide">
                        <Heart className="w-5 h-5 fill-white" />
                        Donate
                    </Button>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-md md:max-w-lg">
                    <img
                        src={Heart_Odisha}
                        alt="A mother caring for her child"
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default DonationSection;