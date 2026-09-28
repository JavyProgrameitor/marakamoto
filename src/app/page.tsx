import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import Galeria from "@/components/sections/Galeria";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Taller from "@/components/sections/Taller";


export default function Home() {
  return (
    <>
      <Header />

        <main>
        <Hero />
        <Services />
        <Taller />
        <Galeria />
        <Contact />
      </main>

        <Footer />
    </>
  );
}

