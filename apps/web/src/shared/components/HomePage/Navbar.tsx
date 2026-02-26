import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import logo2 from "@/assets/images/logo2.png";
import { navLinks } from "@/shared/constants/constantData";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
            <div className="w-full px-6 py-3">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 pl-2">

                        <img src={logo2} alt="Logo" className="h-20 w-auto" />

                        <span className="font-heading text-xl font-bold tracking-wide">
                            PUNYA <span className="font-normal">UTKAL</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="flex items-center ml-auto">
                        <div className="hidden lg:flex items-center gap-1">

                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                        {link.hasDropdown && (
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                        )}
                                    </a>

                                    {/* Dropdown Submenu */}
                                    {link.hasDropdown && link.submenu && (
                                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out origin-top transform -translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-popover border border-border rounded-md shadow-lg p-6 min-w-[280px]">
                                                <div className="flex gap-10">
                                                    {link.submenu.columns.map((column, colIndex) => (
                                                        <div key={colIndex} className="min-w-[160px]">
                                                            {/* <h4 className="font-heading text-sm font-semibold text-foreground tracking-wide mb-4 uppercase">
                                                            {column.title}
                                                        </h4> */}
                                                            <ul className="space-y-2">
                                                                {column.links.map((subLink, linkIndex) => (
                                                                    <li key={linkIndex}>
                                                                        <a
                                                                            href={subLink.href}
                                                                            className={`block text-sm transition-colors duration-200 ${subLink.accent
                                                                                ? "text-primary hover:text-primary/80"
                                                                                : subLink.highlight
                                                                                    ? "text-foreground hover:text-primary flex items-center gap-1 before:content-['>'] before:text-primary"
                                                                                    : "text-muted-foreground hover:text-foreground"
                                                                                }`}
                                                                        >
                                                                            {subLink.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Right Section */}
                        <div className="hidden lg:flex items-center gap-2">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide">
                                DONATE <ChevronDown className="w-4 h-4 ml-1" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Search className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Globe className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-background border-t">
                    <div className="container mx-auto px-4 py-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <a
                                    href={link.href}
                                    className="flex items-center justify-between py-3 text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                </a>
                            </div>
                        ))}
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide">
                            DONATE
                        </Button>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
