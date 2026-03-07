import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container-custom pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-8">Syarat dan Ketentuan Layanan</h1>
        
        <div className="text-foreground/80 leading-relaxed space-y-4">
          <p>
            Pengguna yang menggunakan fasilitas ini beritikad untuk melakukan kegiatan yang sah dan legal menurut norma dan hukum yang berlaku di wilayah Republik Indonesia.
          </p>
          
          <p className="font-semibold mt-6">Pengguna dilarang keras menggunakan fasilitas ini sbb :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Untuk maksud kejahatan, penipuan, pemalsuan, fitnah, judi, pornografi , ancaman, SARA dan terorisme.</li>
            <li>Menggunakan kata-kata kasar, tidak sopan, tidak senonoh , tidak sesuai dengan norma-norma yang berlaku.</li>
            <li>Menggunakan content SMS/Pesan yang bertentangan dengan hukum dan norma yang berlaku di wilayah Republik Indonesia.</li>
            <li>Merugikan dan mengganggu penerima pesan maupun pihak lain baik perorangan maupun badan hukum atau institusi.</li>
          </ul>

          <p className="mt-6">
            Pengguna ini bertanggung jawab penuh terhadap dampak negatif maupun tuntutan hukum dari pihak lain akibat dari isi maupun tata cara pengiriman pesan serta dengan ini pula membebaskan pihak kami dari segala tuntutan hukum dari pihak manapun dan dengan alasan apapun.
          </p>
          
          <p>
            Kami berhak melakukan pembatalan sepihak atas layanan yang sedang digunakan tanpa kewajiban memberikan alasannya dan membebaskan kami dari segala tuntutan hukum dan ganti rugi apapun atas pembatalan sepihak tersebut.
          </p>
          
          <p className="font-semibold text-primary mt-6">
            Kami menjamin tingkat keberhasilan pengiriman layanan kami adalah 99%.
          </p>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Terms;
