import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [underline, setUnderline] = useState<{ left: number; width: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/nebullaos", label: "NebullaOS" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (index: number) => {
    const link = linkRefs.current[index];
    const nav = navRef.current;
    if (!link || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setUnderline({ left: linkRect.left - navRect.left, width: linkRect.width });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-border/80 shadow-[0_4px_24px_hsl(220_25%_4%/0.5)]"
          : "border-border/50"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ display: "block" }}
            >
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <text
                x="16"
                y="23"
                fontFamily="Arial Black, Arial, sans-serif"
                fontSize="20"
                fontWeight="900"
                textAnchor="middle"
                dominantBaseline="auto"
                fill="url(#logo-gradient)"
              >N</text>
            </svg>
            <span className="font-display text-xl font-bold tracking-wide leading-none text-foreground transition-colors duration-300 group-hover:text-primary">
              Nebulla
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden items-center gap-8 md:flex relative" onMouseLeave={handleMouseLeave}>
            {/* Magic sliding underline */}
            <span
              className="absolute -bottom-[1px] h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: underline?.left ?? 0,
                width: underline?.width ?? 0,
                opacity: isHovering ? 1 : 0,
              }}
            />
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                ref={(el) => { linkRefs.current[i] = el; }}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {/* Persistent active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${
                    isActive(link.to) && !isHovering ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="group/btn">
                Book a Call
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground transition-transform duration-200 active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="relative block h-6 w-6">
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              />
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden border-t border-border/50 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Book a Call
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
