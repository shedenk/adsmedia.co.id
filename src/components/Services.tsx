import { MessageSquare, Bell, MapPin, Smartphone, Send, Radio } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Layanan OTP",
    description: "Layanan SMS OTP, WhatsApp Official OTP dan WhatsApp Reguler OTP untuk verifikasi yang aman dan cepat.",
    color: "primary",
  },
  {
    icon: Bell,
    title: "Layanan Bulk/Reminder",
    description: "Kirim Bulk, Alert & Reminder via SMS dan WhatsApp untuk menjangkau pelanggan Anda secara efektif.",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "SMS LBA/Target",
    description: "Kirim SMS ke Lokasi Tertentu sesuai Kriteria, Sampai ke Level Kelurahan untuk targeting yang presisi.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Official Api",
    description: "Kirim dan Kelola WhatsApp dengan Official Api.",
    color: "accent",
  },
  {
    icon: Send,
    title: "SMS Broadcast",
    description: "Kirim pesan massal ke ribuan penerima sekaligus dengan sistem yang handal dan terukur.",
    color: "primary",
  },
  {
    icon: Radio,
    title: "Mobile Advertising",
    description: "Solusi iklan mobile melalui SMS untuk menjangkau target market Anda secara langsung.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Product & Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai solusi messaging dan mobile advertising untuk membantu bisnis Anda berkembang
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card card-hover relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                service.color === "primary" ? "bg-gradient-primary" : "bg-accent"
              }`} />
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  service.color === "primary" ? "bg-gradient-primary" : "bg-accent"
                }`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
