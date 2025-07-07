
import Input from "./Input.jsx";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"; // or use your own icons
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
    <footer className="bg-primary text-white px-6 pt-10 pb-4">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <div className="col-span-1 space-y-4">
            <img src={logo} alt="Abroadium logo" className="h-10" />
            <p className="font-semibold">Social Media</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

          {/* Subscription */}
          <div className="col-span-1 md:col-span-3 md:flex md:justify-end">
            <div className="w-full max-w-md space-y-2">
              <p className="font-semibold">Get Our Weekly</p>
              <Input placeholder="Type Your Email" />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2">{section.heading}</h4>
              <ul className="space-y-1 text-sm">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
          © Copyright By Abroadium.com All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
