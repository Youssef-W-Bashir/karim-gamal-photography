import HeroSection from "../Components/Home/HeroSection/HeroSection";
import About from "../Components/Home/About/About";
import Services from "../Components/Home/Services/Services";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Contact from "../Components/Home/Contact/Contact";
import Navbar from "../Components/Home/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
