import { MessageSquare } from "lucide-react";
import logo from "@/assets/adsmedia-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Adsmedia" className="w-10 h-10 rounded-xl object-contain" />
              <span className="font-bold text-xl text-secondary-foreground">Adsmedia</span>
            </a>
            <p className="text-secondary-foreground/70 max-w-md mb-6">
              PT. Adsmedia Digital Indonesia - Layanan Messaging dan Mobile Advertising 
              dalam 1 Platform untuk kebutuhan bisnis Anda.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/6281229229419" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Features", "Pricing", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Layanan</h4>
            <ul className="space-y-3">
              {["SMS OTP", "WhatsApp OTP", "SMS LBA", "WhatsApp Official Api", "Mobile Ads"].map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} PT. Adsmedia Digital Indonesia. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/sla" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Service Level Agreement
              </a>
              <a href="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
