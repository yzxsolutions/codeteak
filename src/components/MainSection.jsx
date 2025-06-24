import { Badge } from "@mantine/core"
import HeroSection from "./HeroSection"
import { MacbookScroll } from "./ui/MacbookScroll"
import InfiniteRibbonDemo from "./InfiniteRibbon"

import { TeamParallax } from "./TeamParallax"
import { CodeteakHoverEffect } from "./CodeteakHoverEffect"
import { TestimonialSection } from "./TestimonialSection"
import AboutSection from "./ui/AboutSection"
import { HeroParallax } from "./ui/HeroParallax"
import Footer from "./Footer"
import Contact from "../pages/Contact"
import { ContactHero } from "./ContactHighlight"
import { WorldMap } from "./ui/worldMap"
import ServiceSection from "./ServiceSection"



const MainSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[100vh] md:h-[70vh] flex flex-col justify-center ">
        <HeroSection />
      </section>

      <section className="md:h-[50vh] overflow-hidden" >
<WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
      </section>

      {/* Services Section */}
      <section className="md:py-16">
  <ServiceSection />
</section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
  <h2 className="text-3xl font-bold text-center font-wave mb-10">What Our Clients Say</h2>
  <TestimonialSection />
</section>

      {/* About Section */}
      <section className="bg-gray-100">
        <AboutSection />
      </section>

 <section className="h-[80vh] overflow-hidden">
        <TeamParallax />
      </section>
    </>
  );
};



export default MainSection;
