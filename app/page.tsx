import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Plans from "@/components/Plans";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Plans />
      {/* <Reviews /> */}
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
