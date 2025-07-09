import React from "react";
import Button from "../../UI/Button.jsx";
import heroImage from "../../assets/banner-image.png"; // your resume preview
import background from "../../assets/banner-back.jpg"; // your background image
import Navbar from "../../UI/Navbar.jsx";
import group from "../../assets/Group.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#f5f8ff] overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Navbar */}
      <Navbar />

      <div className="max-w-8xl md:py-[14px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 h-full flex items-center ">
          <div className="text-center md:text-left  ">
            <div className="md:w-[683px] py-[40px] md:py-[80px]">
              <h1 className=" font-bold leading-tight text-gray-900">
                <span className="text-[48px] md:text-[62px] font-extrabold">
                  Abroadiums <span className="text-primary">AI</span> Powered
                </span>
                <br />
                <span className="text-[40px] md:text-[62px] font-medium">
                  Resume Tool, Is Live NOW
                </span>
              </h1>
              <p className="text-[#5C5C5C] text-wrap-balanced mx-auto md:mx-0 text-[20px]">
                Resume Score, Enhanced Resume & much more. Now Apply Job with
                confidence with our all-in-one solution under one roof.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:gap-[42px] md:w-[683px]">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="success" size="md"className="w-full">
                  Sign Up! It's 100% Free!
                </Button>
                <Button variant="primary" size="md" className="w-full">
                  Build your Resume
                </Button>
              </div>

              {/* Trustpilot */}
              <div className="md:w-[683px] flex flex-col md:flex-row items-center gap-3 pt-4 justify-center md:justify-start">
                <p className="text-[19px] font-medium text-black">Excellent</p>
                <img src={group} alt="trustpilot" className="h-8" />
                <p className="text-[19px] font-medium">
                  1,432 reviews on{" "}
                  <span className="text-green-600 text-[19px] font-medium">
                    Trustpilot
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 h-full flex items-center justify-center relative z-10">
          <img src={heroImage} alt="resume preview" className="" />
        </div>
      </div>
    </section>
  );
}
