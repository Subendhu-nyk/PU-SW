import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import logo2 from "@/assets/images/logo2.png";
import { navLinks } from "@/shared/constants/constantData";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
            <div className="w-full px-6 py-3">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 pl-2">

                        <img src={logo2} alt="Logo" className="h-20 w-auto" />

                        <span className="font-heading text-xl font-bold tracking-wide">
                            PUNYA <span className="font-normal">UTKAL</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex items-center ml-auto">
                        <div className="hidden lg:flex items-center gap-1">

                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    <Link
                                        to={link.href}
                                        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                        {link.hasDropdown && (
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                        )}
                                    </Link>

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
                                                                        <Link
                                                                            to={subLink.href}
                                                                            className={`block text-sm transition-colors duration-200 ${isActive(subLink.href) ? "text-primary bg-primary/10 ps-2" : ""} ${(subLink as any).accent
                                                                                ? "text-primary hover:text-primary/80"
                                                                                : (subLink as any).highlight
                                                                                    ? "text-foreground hover:text-primary flex items-center gap-1 before:content-['>'] before:text-primary"
                                                                                    : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:ps-1 rounded-full"
                                                                                }`}
                                                                        >
                                                                            {subLink.name}
                                                                            </Link>
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
                                <Link
                                    to={link.href}
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            e.preventDefault();
                                            setActiveMobileMenu(activeMobileMenu === link.name ? null : link.name);
                                        } else {
                                            setIsOpen(false);
                                        }
                                    }}
                                    className="flex items-center justify-between py-3 text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileMenu === link.name ? "rotate-180" : ""}`} />}
                                </Link>
                                {/* Mobile Submenu */}
                                {link.hasDropdown && link.submenu && activeMobileMenu === link.name && (
                                    <div className="pl-4 pb-2 space-y-1">
                                        {link.submenu.columns.map((column, colIndex) => (
                                            <div key={colIndex}>
                                                {column.links.map((subLink, linkIndex) => (
                                                    <Link
                                                        key={linkIndex}
                                                        to={subLink.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block py-2 text-sm transition-colors duration-200 ${isActive(subLink.href) ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
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
