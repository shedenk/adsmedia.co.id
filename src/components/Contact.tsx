import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              PT. Adsmedia Digital Indonesia
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Integrate SMS & WhatsApp services with your Website, Apps, or CRM 
              with advanced and customizable APIs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Jl. Jend. Sudirman No. 187<br />
                    Siliwangi Plaza, Ruko E.6<br />
                    DS. Siliwangi Office 207, Karang Ayu<br />
                    Semarang Barat, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:cs@adsmedia.co.id" className="text-primary hover:underline">
                    cs@adsmedia.co.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <a href="https://wa.me/6281229229419" className="text-primary hover:underline">
                    +62 812-2922-9419
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="gradient" size="xl" asChild>
                <a href="https://wa.me/6281229229419" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" />
                  Chat dengan Kami
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Map/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-hero overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <MapPin className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-foreground mb-2">Semarang, Indonesia</h4>
                  <p className="text-primary-foreground/70">
                    Siap melayani kebutuhan messaging bisnis Anda
                  </p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent/20 rounded-full" />
              <div className="absolute top-1/3 right-10 w-16 h-16 border-2 border-primary/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
