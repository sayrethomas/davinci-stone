import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AIVisualizerFrame from "@/components/AIVisualizerFrame";
import GalleryStrip from "@/components/GalleryStrip";
import Materials from "@/components/Materials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <AIVisualizerFrame />
      <GalleryStrip />
      <Materials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
