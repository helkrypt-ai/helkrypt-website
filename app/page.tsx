import { LocaleProvider } from "./components/LocaleProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LocaleProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Products />
        <Process />
        <About />
        <Contact />
        <Footer />
      </main>
    </LocaleProvider>
  );
}
