import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Layanan OTP",
    price: "Rp.300",
    unit: "/ OTP",
    description: "Verifikasi aman untuk aplikasi Anda",
    features: [
      "SMS OTP",
      "WhatsApp Official OTP",
      "WhatsApp Reguler OTP",
      "API Support",
      "Stabil & Reliable",
    ],
    popular: false,
  },
  {
    name: "WhatsApp Device",
    price: "Rp.89.000",
    unit: "/ Device",
    description: "Kelola WhatsApp dengan device sendiri",
    features: [
      "Support Multi Device",
      "Inbox Management",
      "Support Text/Image",
      "API dan Webhook",
      "Dashboard Lengkap",
    ],
    popular: true,
  },
  {
    name: "Mobile Ads",
    price: "Rp.300",
    unit: "/ Pesan",
    description: "Jangkau target market Anda",
    features: [
      "SMS LBA",
      "SMS Target",
      "SMS Broadcast",
      "Location Based",
      "Targeting Presisi",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Harga Dasar Produk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Harga terjangkau dengan kualitas terbaik.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? "bg-gradient-hero text-primary-foreground shadow-glow scale-105" 
                  : "bg-card shadow-card card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={plan.popular ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "gradient"} 
                className="w-full" 
                size="lg"
                asChild
              >
                <a href="https://app.adsmedia.id/app/register" target="_blank" rel="noopener noreferrer">
                  Mulai Sekarang
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
