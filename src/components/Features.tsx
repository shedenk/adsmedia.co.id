import { 
  Layout, 
  Tag, 
  Code2, 
  Download, 
  Cloud, 
  Shield, 
  CreditCard, 
  BarChart3, 
  FileText, 
  Clock, 
  MessageSquare, 
  Smartphone 
} from "lucide-react";

const features = [
  { icon: Layout, title: "User Friendly Interface", description: "Dashboard yang mudah digunakan" },
  { icon: Tag, title: "Custom SenderID", description: "Nama pengirim sesuai brand Anda" },
  { icon: Code2, title: "API Service", description: "Integrasi mudah dengan REST API" },
  { icon: Download, title: "Export/Import", description: "Kelola data dengan mudah" },
  { icon: Cloud, title: "Cloud System", description: "Infrastruktur cloud yang handal" },
  { icon: Shield, title: "Secure Database", description: "Data aman dan terenkripsi" },
  { icon: CreditCard, title: "Postpaid/Prepaid", description: "Fleksibel sesuai kebutuhan" },
  { icon: BarChart3, title: "Statistics & Reporting", description: "Laporan lengkap dan detail" },
  { icon: FileText, title: "Template", description: "Template pesan siap pakai" },
  { icon: Clock, title: "Schedule", description: "Jadwalkan pengiriman pesan" },
  { icon: MessageSquare, title: "SMS Broadcast", description: "Kirim pesan massal" },
  { icon: Smartphone, title: "WhatsApp Device", description: "Kelola device WhatsApp" },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fitur Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform lengkap dengan berbagai fitur untuk menunjang kebutuhan bisnis messaging Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card card-hover text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
