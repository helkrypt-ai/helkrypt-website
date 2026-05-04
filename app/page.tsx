import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import WebDesign from "./components/WebDesign";
import Process from "./components/Process";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--navy-dark)]">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <WebDesign />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
