import { useEffect, useState, useRef } from "react";
import { CheckCircle, Building, Users, Calendar, Package } from "lucide-react";

const stats = [
  { icon: Users, value: 1000, suffix: "+", label: "Happy Clients", description: "Ribuan Client Sudah Menggunakan Layanan Kami" },
  { icon: Building, value: 500, suffix: "+", label: "Projects", description: "Aplikasi Android/Apple/CRM sudah terintegrasi" },
  { icon: Calendar, value: 6, suffix: "+", label: "Years Experience", description: "Pengalaman selama lebih dari 6 tahun" },
  { icon: Package, value: 10, suffix: "+", label: "Products", description: "Produk untuk kebutuhan bisnis anda" },
];

const features = [
  "Cara Bayar Postpaid adalah keunggulan system kami",
  "3 Layanan OTP dalam 1 Platform (SMS/WhatsApp Reguler/WhatsApp Official)",
  "Integrasi dengan berbagai Platform sangat mudah dan cepat",
];

const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            PT. Adsmedia Digital Indonesia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Adsmedia adalah layanan Messaging dan Mobile Advertising dalam 1 Platform. 
            Selain untuk pengiriman pesan berupa SMS dan WhatsApp, juga bisa mengirimkan iklan SMS LBA/Target.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Mengapa Memilih Kami?
            </h3>
            <p className="text-muted-foreground">
              Berdiri sejak 2017, kami sudah mengirim jutaan SMS & WhatsApp untuk membantu 
              ribuan bisnis berkembang di Indonesia.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-primary p-1">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Building className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Since 2017</h4>
                  <p className="text-muted-foreground">
                    Trusted messaging platform serving businesses across Indonesia
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-card card-hover"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <h4 className="text-lg font-semibold text-foreground mt-2">{stat.label}</h4>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
