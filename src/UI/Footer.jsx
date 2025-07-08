import Input from "./Input.jsx";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // or use your own icons
import logo from "../assets/logo.png"; // your logo path

export default function Footer() {
  const footerLinks = [
    {
      heading: "Abroadium",
      links: [
        "About Us",
        "Careers",
        "Placement Support",
        "Abroadium Blog",
        "Abroadium Tutorials",
        "Resources",
      ],
    },
    {
      heading: "Support",
      links: [
        "Support",
        "Contact",
        "Salary Tool",
        "Grievance Redressal",
        "Terms & Conditions",
        "Privacy Policy",
        "Refund Policy",
      ],
    },
    {
      heading: "Scope & Products",
      links: [
        "AI Resume Builder",
        "AI Skill Tests",
        "AI CV Parsing",
        "Generative AI",
        "White Labelling",
      ],
    },
    {
      heading: "AI Resources",
      links: [
        "AI - Resume Accuracy",
        "AI - Resume Enhancer",
        "AI - Job Match & Apply",
        "Verified Jobs",
        "Verified Profiles",
        "& Much More",
      ],
    },
  ];

  return (
    // <footer className="bg-primary text-white px-6 pt-10 pb-4">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Top */}
    //     <div className="flex justify-between items-center gap-4">
    //         <div className="bg-background h-32 w-64 py-2 px-2 rounded-2xl flex items-center justify-center">
    //           <img
    //             src={logo}
    //             alt="Abroadium logo"
    //             className="h-full w-full object-contain"
    //           />
    //         </div>

    //         <div className="">
    //           <p className="font-semibold text-lg mb-6">Social Media</p>

    //           <div className="flex space-x-4">
    //             <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
    //               <Facebook className="w-6 h-6 text-primary" />
    //             </div>

    //             <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
    //               <Twitter className="w-6 h-6 text-primary" />
    //             </div>

    //             <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
    //               <Instagram className="w-6 h-6 text-primary" />
    //             </div>

    //             <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
    //               <Linkedin className="w-6 h-6 text-primary" />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="">
    //         <div className="w-full max-w-md space-y-2">
    //           <p className="font-semibold">Get Our Weekly</p>
    //           <Input placeholder="Type Your Email" />
    //         </div>
    //       </div>
    //       </div>
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
    //       {/* Logo & Social */}

    //       {/* Subscription */}

    //     </div>

    //     {/* Links */}
    //     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
    //       {footerLinks.map((section, index) => (
    //         <div key={index}>
    //           <h4 className="font-semibold mb-2">{section.heading}</h4>
    //           <ul className="space-y-1 text-sm">
    //             {section.links.map((link, i) => (
    //               <li key={i} className="hover:underline cursor-pointer">
    //                 {link}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Bottom */}
    //     <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
    //       © Copyright By Abroadium.com All Rights Reserved
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-primary text-white px-6 pt-14 pb-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-background h-32 w-64 py-2 px-2 rounded-2xl flex items-center justify-center">
              <img
                src={logo}
                alt="Abroadium logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="font-semibold text-lg mb-4">Social Media</p>
            <div className="flex space-x-4">
              <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Facebook className="w-6 h-6 text-primary" />
              </div>
              <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Twitter className="w-6 h-6 text-primary" />
              </div>
              <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div className="bg-background rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <p className="font-semibold text-lg mb-4 text-center lg:text-left">
              Get Our Weekly
            </p>
            <Input
              placeholder="Type your email"
              className="w-full rounded-lg border-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2">{section.heading}</h4>
              <ul className="space-y-1 text-sm text-white/80">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative flex justify-center items-center">
          <h1
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent select-none"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
              textStroke: "2px rgba(255, 255, 255, 0.3)",
            }}
          >
            abroadium
          </h1>

          {/* Curved accent */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white bg-opacity-5 -translate-y-1/2 translate-x-1/2"></div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Abroadium.com — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
