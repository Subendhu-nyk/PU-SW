import { Twitter, Linkedin, Instagram, Youtube, MessageSquare } from "lucide-react";
import logo2 from "@/assets/images/logo2.png";
import { footerSections, socialLinks } from "@/shared/constants/constantData";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const iconMap: Record<string, any> = {
        Twitter: Twitter,
        Linkedin: Linkedin,
        Instagram: Instagram,
        Youtube: Youtube,
        MessageSquare: MessageSquare,
    };

    return (
        <footer className="relative bg-white pt-20 pb-10 border-t border-border overflow-hidden">
            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                    {/* Logo and About Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <img src={logo2} alt="Punya Utkal Logo" className="h-12 w-auto" />
                            <span className="font-heading text-xl font-bold tracking-wide">
                                PUNYA <span className="font-normal">UTKAL</span>
                            </span>
                        </a>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                            “ସତେକି ଓଡ଼ିଆ ଶୁଝିବ ଋଣ, ବିଖଣ୍ଡିତ ଲକ୍ଷ୍ୟ ହେବ ପୂରଣ
                            ଅଖଣ୍ଡ ଉତ୍କଳ ଅଖଣ୍ଡ ରହୁ, ଗଲେ ପଛେ ଏଇ ଜୀବନ ଯାଉ
                            ମଶାଣୀ ହେଉ ବା ଏନ୍ତୁଡ଼ି ଶାଳ, ଏ ମାଟିତ ମୋର ପୁଣ୍ୟ ଉତ୍କଳ”
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const IconComponent = iconMap[social.icon] || MessageSquare;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-primary/10 p-2 rounded-full"
                                        aria-label={social.name}
                                    >
                                        <IconComponent size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-heading text-sm font-bold tracking-wider text-foreground mb-6 uppercase">
                                {section.title}
                            </h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 hover:py-2 hover:px-1 rounded-full transition-colors duration-200 font-merriweather font-light"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Punya Utkal
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Code of conduct
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
