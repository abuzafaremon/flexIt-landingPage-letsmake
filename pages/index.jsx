import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesOffer from "../components/ServicesOffer";
import WWClient from "../components/WWClient";
import CustomersWorking from "../components/CustomersWorking";
import RatingSection from "../components/RatingSection";
import Portfolio from "../components/Portfolio";
import ClientCard from "../components/ClientCard";
import PricingSection from "../components/PricingSection";
import Testimonial from "../components/Testimonial";
import AskQues from "../components/AskQues";
import News from "../components/News";
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
      <ClientCard />
      <PricingSection />
      <Testimonial />
      <AskQues />
      <News />
    </main>
  );
}
