import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container-custom relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground/80 text-sm font-medium">
                Trusted by 1000+ Businesses
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Grow Your Business with{" "}
              <span className="text-gradient">Adsmedia</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Integrate SMS & WhatsApp services with your website, apps, or CRM with advanced and customizable APIs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <a href="#about">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://wa.me/6281229229419" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" size={20} />
                  Chat WhatsApp
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up animation-delay-400">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">1000+</div>
                <div className="text-primary-foreground/60 text-sm">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">99.9%</div>
                <div className="text-primary-foreground/60 text-sm">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">6+</div>
                <div className="text-primary-foreground/60 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Main card */}
              <div className="glass-dark rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <MessageSquare className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <div className="text-primary-foreground font-semibold">OTP Sent Successfully</div>
                      <div className="text-primary-foreground/60 text-sm">+62 812-****-9419</div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-primary/20" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-foreground">2.5M+</div>
                      <div className="text-primary-foreground/60 text-sm">Messages Sent</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-foreground">98%</div>
                      <div className="text-primary-foreground/60 text-sm">Delivery Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass-dark rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-primary-foreground font-semibold text-sm">Verified</div>
                    <div className="text-primary-foreground/60 text-xs">OTP Success</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl p-4 shadow-xl animate-float animation-delay-200">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">A</div>
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold">B</div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">C</div>
                  </div>
                  <span className="text-primary-foreground/80 text-sm font-medium">1000+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
