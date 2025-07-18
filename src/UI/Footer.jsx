import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // or use your own icons
import logo from "../assets/logo.png"; // your logo path
import elipse from "../assets/elipse-footer.png";
import { Link } from "react-router-dom";
import SupportPopup from "../Component/Footer/SupportPopUp";
import { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const handleSupportClick = () => {
    setShowPopup(true);
  };
  const footerLinks = [
    {
      heading: "Abroadium",
      links: [
        {
          text: "About Us",
          href: "/about-us",
          external: false,
        },
        {
          text: "Careers",
          href: "/careers",
          external: false,
        },
        {
          text: "Placement Support",
          href: "/placement-support",
          external: false,
        },
        {
          text: "Abroadium Blog",
          href: "https://blog.abroadium.com/",
          external: true,
        },
        {
          text: "Abroadium Tutorials",
          href: "https://blog.abroadium.com/",
          external: true,
        },
        {
          text: "Resources",
          href: "/abroadium-resources",
          external: false,
        },
      ],
    },
    {
      heading: "Support",
      links: [
        { text: "Support", href: "#", external: false, action: "popup" },
        { text: "Contact", href: "/contactus", external: false },
        {
          text: "Salary Tool",
          href: "https://blog.abroadium.com/category/career-advice/salary-tool/",
          external: true,
        },
        {
          text: "Grievance Redressal",
          href: "/grievance-redressal",
          external: false,
        },
        {
          text: "Terms & Conditions",
          href: "/terms-conditions",
          external: false,
        },
        {
          text: "Privacy Policy",
          href: "https://blog.abroadium.com/privacy-policy-3/",
          external: true,
        },
        { text: "Refund Policy", href: "/refund-policy", external: false },
      ],
    },
    {
      heading: "Scope & Products",
      links: [
        { text: "AI Resume Builder", href: "/slide/1", external: false },
        { text: "AI Skill Tests", href: "/skilltest", external: false },
        {
          text: "AI CV Parsing",
          href: "https://blog.abroadium.com/ai-resume-parsing/",
          external: true,
        },
        {
          text: "Generative AI",
          href: "https://blog.abroadium.com/generative-ai/",
          external: true,
        },
        {
          text: "White Labelling",
          href: "https://blog.abroadium.com/black-labeling-for-abroadiums-services/",
          external: true,
        },
      ],
    },
    {
      heading: "AI Resources",
      links: [
        {
          text: "AI - Resume Accuracy",
          href: "https://blog.abroadium.com/ai-resume-accuracy/",
          external: true,
        },
        {
          text: "AI - Resume Enhancer",
          href: "https://blog.abroadium.com/ai-resume-enhancer/",
          external: true,
        },
        {
          text: "AI - Job Match & Apply",
          href: "https://blog.abroadium.com/ai-job-match-apply/",
          external: true,
        },
        {
          text: "Verified Jobs",
          href: "https://blog.abroadium.com/verified-jobs/",
          external: true,
        },
        {
          text: "Verified Profiles",
          href: "https://blog.abroadium.com/verified-jobs/",
          external: true,
        },
        {
          text: "& Much More",
          href: "https://blog.abroadium.com/verified-jobs/",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white pt-8 sm:pt-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10 px-4 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <Link to="/">
              <div className="bg-background h-24 w-48 sm:h-32 sm:w-64 py-2 px-2 rounded-2xl flex items-center justify-center">
                <img
                  src={logo}
                  alt="Abroadium logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
              Social Media
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="bg-background rounded-full p-2.5 sm:p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="bg-background rounded-full p-2.5 sm:p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="bg-background rounded-full p-2.5 sm:p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="bg-background rounded-full p-2.5 sm:p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <p className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-center lg:text-left">
              Get Our Weekly
            </p>
            <div className="w-full max-w-md mx-auto lg:mx-0 px-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full py-2.5 sm:py-3 pr-[100px] sm:pr-[110px] pl-3 sm:pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-md text-sm sm:text-base"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-500 transition rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {footerLinks.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <h4 className="font-semibold mb-3 sm:mb-2 text-base sm:text-lg">
                {section.heading}
              </h4>
              <ul className="space-y-2 sm:space-y-1 text-sm text-white/80">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {link.action === "popup" ? (
                      <span
                        onClick={handleSupportClick}
                        className="block py-1 sm:py-0"
                      >
                        {link.text}
                      </span>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline block py-1 sm:py-0"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="hover:underline block py-1 sm:py-0"
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Background big abroadium text */}
      <div className="absolute bottom-[-15px] sm:bottom-[-25px] left-0 w-full flex justify-center z-0 pointer-events-none">
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] font-bold text-transparent select-none leading-none"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
            textStroke: "1px rgba(255, 255, 255, 0.05)",
          }}
        >
          abroadium
        </h1>
      </div>

      {/* Ellipse image in bottom-right */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <img
          src={elipse}
          alt="decorative ellipse"
          className="w-[150px] sm:w-[200px] md:w-[250px]"
        />
      </div>

      {/* Footer copyright */}
      <div className="relative z-10 bg-[#013478] border-t border-white/20 py-4 px-4 mt-[60px] sm:mt-[80px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto text-center text-xs sm:text-sm text-white/70">
          © Copyright By Abroadium.com All Rights Reserved
        </div>
      </div>
      <SupportPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </footer>
  );
}
