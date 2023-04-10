import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesOffer from "../components/ServicesOffer";
import About from "../components/About";
import OurSpecialty from "../components/OurSpecialty";
import RatingSection from "../components/RatingSection";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import PricingSection from "../components/PricingSection";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import News from "../components/News";
import MessageArea from "../components/MessageArea";
import OfficeBranches from "../components/OfficeBranches";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ServicesOffer />
      <About />
      <OurSpecialty />
      <RatingSection />
      <Portfolio />
      <Clients />
      <PricingSection />
      <Testimonial />
      <FAQ />
      <News />
      <MessageArea />
      <OfficeBranches />
      <Footer />
    </main>
  );
}
