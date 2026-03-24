import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#products" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about.html" },
    { name: "Contact", href: "/contact.html" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Handle anchor links if on home page
    if (href.startsWith("/#") && location === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-border py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/images/logo.jpeg" alt="OSIS Logo" className="h-10 w-auto rounded-sm group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none text-white tracking-wider">OSIS</span>
              <span className="text-[10px] text-primary font-medium tracking-widest uppercase">One Spirit</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location === link.href || (link.href === "/" && location === "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "font-display uppercase tracking-wider text-sm font-semibold transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact.html"
              className="bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-sm font-display uppercase tracking-wider text-sm font-bold transition-all"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border shadow-2xl">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-display uppercase tracking-wider text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080814] border-t-2 border-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/images/logo.jpeg" alt="OSIS Logo" className="h-16 w-auto rounded-sm" />
            <p className="font-display text-2xl font-bold text-white">Keep Your Spirits Up!</p>
            <p className="text-muted-foreground text-sm max-w-sm">
              Driving Nigeria's Green Future. Exclusive distributor of the BNC Challenger S110 electric bike in Nigeria.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : item === 'Products' ? '/#products' : item === 'Services' ? '/#services' : `/${item.toLowerCase()}.html`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6 text-white uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-3 text-muted-foreground text-sm mb-6">
              <li>Plot No. 11, Ground Floor Adebayo Mokuolu Street, Anthony, Lagos.</li>
              <li>osis@onespiritintegratedservices.com</li>
              <li>+234 913 940 5455</li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 One Spirit Integrated Services Limited. All Rights Reserved.</p>
          <p>Exclusive distributor of the BNC Challenger S110 in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/23491394054555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      title="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      <MessageCircle size={28} className="relative z-10" />
    </a>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
