import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesOffer from "../components/ServicesOffer";
import WWClient from "../components/WWClient";
import CustomersWorking from "../components/CustomersWorking";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ServicesOffer />
      <WWClient />
      <CustomersWorking />
    </main>
  );
}
