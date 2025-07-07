import React from 'react'
import Navbar from '../UI/Navbar'
import HeroSection from '../components/Home-section/HeroSection'
import Footer from '../UI/Footer'
import ResumeSteps from '../components/Home-section/Resume-Steps'
import AIResumeVideoSection from '../components/Home-section/VideoSection'
import CoverLetterSlider from '../components/Home-section/CoverLetterSlider'
import PricingComponent from '../components/Home-section/PricingPlan'
import FAQ from '../components/Home-section/FaqSection'
import ArticleBlogSection from '../components/Home-section/Blogs'

const Home = () => {
  return (
   <>
     {/* <Navbar /> */}
     <HeroSection/>
     <ResumeSteps />
     <AIResumeVideoSection/>
     <ArticleBlogSection />
     <PricingComponent />
     <FAQ />
     {/* <CoverLetterSlider /> */}
     <Footer />
   </>
  )
}

export default Home