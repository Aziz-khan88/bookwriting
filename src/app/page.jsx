import Banner from "@/src/app/home/banner";
import Clients from "@/src/app/home/clients";
import WhyChoose from "@/src/app/home/whychoose";
import ServicesMain from "@/src/app/home/servicesmain";
import ContentSection from "@/src/app/home/content";
import CtaServices from "@/src/app/home/cta";
import Testimonials from "@/src/app/home/testimonials";
import Reviews from "@/src/app/home/reviews";
import Portfolio from "@/src/app/home/portfolio";
import { TestimonialData } from "@/src/app/home/data/data";

export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <WhyChoose />
      <ServicesMain />
      <ContentSection />
      <Portfolio />
      <Testimonials data={TestimonialData} />
      <CtaServices />
      <Reviews />
    </>
  );
}
