import React from "react";
import Navbar from "../UI/Navbar";
import HeroSection from "../components/Home-section/HeroSection";
import Footer from "../UI/Footer";
import ResumeSteps from "../components/Home-section/Resume-Steps";
import AIResumeVideoSection from "../components/Home-section/VideoSection";
import CoverLetterSlider from "../components/Home-section/CoverLetterSlider";
import PricingComponent from "../components/Home-section/PricingPlan";
import FAQ from "../components/Home-section/FaqSection";
import ArticleBlogSection from "../components/Home-section/Blogs";
import CustomerTestimonialSection from "../components/Home-section/TestimonialSlider";
import TemplateShowcaseSection from "../components/Home-section/ResumeList";
import NewWriter from "../Component/Home/newwriter";
// import GoogleOneTapLogin from "../Component/GoogleOneTapLogin";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <GoogleOneTapLogin /> */}
      <HeroSection />
      <ResumeSteps />
      <AIResumeVideoSection />

      <CoverLetterSlider />
      <TemplateShowcaseSection />

      <CustomerTestimonialSection />
      <PricingComponent />
      <NewWriter />
      <ArticleBlogSection />
      <FAQ />

      <Footer />
    </>
  );
};

export default Home;
