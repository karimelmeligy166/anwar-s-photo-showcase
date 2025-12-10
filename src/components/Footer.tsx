import { Instagram, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#" className="font-display text-3xl tracking-wider text-gradient-gold mb-6">
            ANWAR
          </a>
          
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Weddings
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/anwarweddings"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/201027797779"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="tel:01027797779"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anwar Weddings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
