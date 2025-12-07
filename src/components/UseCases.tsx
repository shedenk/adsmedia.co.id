import { 
  KeyRound, 
  ShieldCheck, 
  KeySquare, 
  LogIn, 
  UserPlus, 
  Phone, 
  Bell, 
  Megaphone, 
  Target, 
  Award, 
  Gift, 
  CalendarClock 
} from "lucide-react";

const useCases = [
  { icon: KeyRound, title: "Secure OTP" },
  { icon: ShieldCheck, title: "2FA" },
  { icon: KeySquare, title: "Password Recovery" },
  { icon: LogIn, title: "Login" },
  { icon: UserPlus, title: "OnBoarding" },
  { icon: Phone, title: "Phone Validation" },
  { icon: Bell, title: "Alert/Notification" },
  { icon: Megaphone, title: "Marketing" },
  { icon: Target, title: "Campaign" },
  { icon: Award, title: "Branding" },
  { icon: Gift, title: "Promotions" },
  { icon: CalendarClock, title: "Reminder" },
];

const UseCases = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Penggunaan Secara Umum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai skenario penggunaan layanan kami untuk mendukung operasional bisnis Anda
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-5 shadow-card card-hover text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-gradient-primary transition-all duration-300">
                <useCase.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-medium text-foreground text-sm">{useCase.title}</h3>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8">Dipercaya oleh perusahaan terkemuka</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground font-semibold">Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
