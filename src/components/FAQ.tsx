import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Sistemnya prabayar atau pascabayar?",
    answer: "Kami menerima sistem pembayaran Prabayar dan Pascabayar, silahkan pilih sesuai kebutuhan bisnis Anda."
  },
  {
    question: "Apa itu custom SENDERID?",
    answer: "Nama lainnya adalah Masking Name atau Alpha Numeric Sender. 11 karakter kombinasi huruf dan angka yang mewakili nama usaha Anda. Sender ID muncul sebagai nama pengirim SMS."
  },
  {
    question: "Bisakah AdsmediaApp diintegrasikan ke aplikasi lain?",
    answer: "Bisa! Dengan menggunakan API yang kami sediakan, SMS dapat dikirimkan melalui aplikasi lain. Integrasi harus dilakukan developer yang berpengalaman."
  },
  {
    question: "Apakah bisa mengajukan refund?",
    answer: "Maaf, kami tidak ada refund. Mohon Deposit disesuaikan dengan kebutuhan, atau bisa menggunakan layanan PostPaid untuk fleksibilitas lebih."
  },
  {
    question: "Apakah ada layanan kirim SMS per wilayah/Lokasi?",
    answer: "Layanan seperti itu disebut dengan LBA (Location Based Advertising) dan Target. Kami menyediakan layanan LBA/Target. Silakan langsung hubungi CS untuk penawaran harga."
  },
  {
    question: "Berapa lama waktu pengiriman OTP?",
    answer: "Pengiriman OTP biasanya memakan waktu kurang dari 5 detik. Kami menggunakan infrastruktur yang handal untuk memastikan pengiriman yang cepat dan reliable."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-0 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
