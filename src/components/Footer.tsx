import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Zircon Car Bodyworks</h3>
              <p className="text-primary-foreground/80">
                Premium auto body repair and detailing services.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center">
            <p className="text-primary-foreground/60">
              © 2025 Zircon Car Bodyworks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
