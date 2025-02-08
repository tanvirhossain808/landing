import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ContactSection from "@/components/ContactUsSection";
import Description from "@/components/Description";
import FormSection from "@/components/FormSection";
import HeroSection from "@/components/HeroSection";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[1px]">
        <div className="pt-20">
          <HeroSection />
          <Description />
          <FormSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
