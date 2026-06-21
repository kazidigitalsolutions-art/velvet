import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PriceList from "@/components/PriceList";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import InstagramSection from "@/components/InstagramSection";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden font-sans">
      <CustomCursor />
      <LoadingScreen />
      <ScrollProgress />
      <Navigation />
      
      <Hero />
      <About />
      <Services />
      <PriceList />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <InstagramSection />
      <BookingCTA />
      <Contact />
      
      <Footer />
      <BackToTop />
    </main>
  );
}
