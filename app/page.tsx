import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WebDesign from "./components/WebDesign";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--navy-dark)]">
      <Navbar />
      <Hero />
      <Products />
      <WebDesign />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
