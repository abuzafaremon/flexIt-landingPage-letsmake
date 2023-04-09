import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesOffer from "../components/ServicesOffer";
import WWClient from "../components/WWClient";
import CustomersWorking from "../components/CustomersWorking";
import RatingSection from "../components/RatingSection";
import Portfolio from "../components/Portfolio";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ServicesOffer />
      <WWClient />
      <CustomersWorking />
      <RatingSection />
      <Portfolio />
    </main>
  );
}
