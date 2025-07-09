import Input from "./Input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // or use your own icons
import logo from "../assets/logo.png"; // your logo path
import elipse from "../assets/elipse-footer.png";
import Button from "./Button";
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
    <footer className="bg-primary text-white pt-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
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
            {/* <Input
              placeholder="Type your email"
              className=""
            />
            <Button>
             Submit
            </Button> */}
            {/* <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <Input placeholder="Type your email" className="flex-1 w-full" />
              <Button className="w-full sm:w-auto " variant="secondary">Submit</Button>
            </div> */}
            {/* <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md px-2">
              <input
                type="email"
                placeholder="Type your email"
                className="flex-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full sm:w-auto px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-400 transition">
                Submit
              </button>
            </div> */}

            <div className="w-full max-w-md px-2 ">
              <div className="relative ">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full py-3 pr-[110px] pl-4  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary "
                />
                <button className="absolute h-full top-1/2 r -translate-y-1/2 px-4 py-2  bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition">
                  Submit
                </button>
              </div>
            </div>
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
      </div>

      {/* Background big abroadium text */}
      <div className="absolute bottom-[-25px] left-0 w-full flex justify-center z-0 pointer-events-none">
        <h1
          className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent select-none leading-none"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)",
            textStroke: "2px rgba(255, 255, 255, 0.05)",
          }}
        >
          abroadium
        </h1>
      </div>

      {/* Ellipse image in bottom-right */}
      <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
        <img src={elipse} alt="decorative ellipse" className="md:w-[250px]" />
      </div>

      {/* Footer copyright */}
      <div className="relative z-10 bg-[#013478] border-t border-white/20 py-4 px-4 mt-[100px]">
        <div className="max-w-7xl mx-auto text-center text-sm text-white/70">
          © Copyright By Abroadium.com All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
