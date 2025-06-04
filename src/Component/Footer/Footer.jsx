import axios from "axios";
import "./Footer.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import SupportPopup from "./SupportPopUp";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.abroadium.com/api/jobseeker/user-subscribe",
        { email }, // Send email directly as JSON
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.code === 200) {
        toast.success(response.data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        toast.error(response.data.message || "Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Subscription failed. Please try again.");
    }
  };

  return (
    <>
      <div className="  py-4 flex justify-center border-b-2 bg-gradient-to-b from-[#e4e0d7] to-[#0c448f] text-black">
        <div className=" flex flex-col md:w-[40%] justify-center  px-2 py-10 text-black gap-5 ">
          <div className=" text-center font-bold text-2xl">
            Get Started with Abroadium.com
          </div>
          <div className=" text-center text-lg">
            Want to learn what Abroadium can do for you? See for yourself with a
            free premium content on Verified Overseas Opportunity
          </div>
          <div className=" text-center">
            <Link to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFr8zkwKFeQfQAAAZRz_CkI_6jZ474FawHpfXq2NRRTTzZlMachx8TFuFh-6Zf9F710103d7GPWFjkTGIyIkrQf15UxDo6gZM5oISJpaJhEWyqp2SS_dJ2mBVJjw0i1qt4leM8=&original_referer=&sessionRedirect=https%3A%2F%2Fca.linkedin.com%2Fcompany%2Fabroadium">
              <button className="text-white px-2 py-2 text-base rounded-lg font-semibold  hover:shadow-xl hover:shadow-[#0c448f] hover:bg-green-600 bg-[#0c448f]">
                Check it Out
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-[#e4e0d7] text-[#0c448f] py-8">
        <div className="container mx-auto flex flex-col justify-between px-6">
          <div className=" flex flex-wrap justify-between px-2 md:px-[65px]">
            <div className=" ">
              <img src={logo} className=" h-[150px] w-[180px]" />
              {/* <p className=" text-lg text-bold px-5">
                Building Careers of Tomorrow
              </p> */}
            </div>
            <div className="w-full md:w-auto  md:mb-0">
              <h2 className="text-lg font-semibold text-black">
                Get Our Weekly
              </h2>
              {/* <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Type your email..."
                  required
                  className="p-2  rounded"
                />
                <button
                  type="submit"
                  className="md:px-4 md:py-1 p-1 rounded-full bg-black text-black hover:bg-green-600"
                >
                  Subscribe
                </button>
              </form> */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Type your email..."
                  required
                  className="p-2 rounded text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Capture input value
                />
                <button
                  type="submit"
                  className="md:px-4 md:py-1 p-1 rounded-lg bg-[#0c448f] text-white hover:bg-green-600   hover:shadow-xl hover:shadow-[#0c448f] "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <br />
          <div className=" flex flex-wrap justify-around">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-black">Abroadium</h2>
              <ul>
                <li>
                  <a
                    href="https://blog.abroadium.com/about-us/"
                    className="hover:text-green-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/careers/"
                    className="hover:text-green-600"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/placement-support/"
                    className="hover:text-green-600"
                  >
                    Placement Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/"
                    className="hover:text-green-600"
                  >
                    Abroadium Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/"
                    className="hover:text-green-600"
                  >
                    Abroadium Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/abroadium-resources/"
                    className="hover:text-green-600"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-black">Support</h2>
              <ul>
                <li
                  onClick={() => setShowPopup(true)}
                  className=" cursor-pointer"
                >
                  <span>Support</span>
                </li>
                <li>
                  <a href="/contactus" className="hover:text-green-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/category/career-advice/salary-tool/"
                    className="hover:text-green-600"
                  >
                    Salary Tool
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/grievance-redressal/"
                    className="hover:text-green-600"
                  >
                    Grievance Redressal
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/terms-conditions/"
                    className="hover:text-green-600"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/privacy-policy-3/"
                    className="hover:text-green-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund-policy" className="hover:text-green-600">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-black">Scope & Products</h2>
              <ul>
                <li>
                  <a
                    href="https://blog.abroadium.com/ai-resume-builder/"
                    className="hover:text-green-600"
                  >
                    Ai Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/ai-skill-test/"
                    className="hover:text-green-600"
                  >
                    Ai Skill Tests
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/ai-resume-parsing/"
                    className="hover:text-green-600"
                  >
                    Ai CV Parsing
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/black-labeling-for-abroadiums-services/"
                    className="hover:text-green-600"
                  >
                    White Labelling
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/generative-ai/"
                    className="hover:text-green-600"
                  >
                    Generative AI
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-lg font-bold text-black">Ai Resources</h2>
              <ul>
                <li>
                  <a
                    href="https://blog.abroadium.com/ai-resume-accuracy/"
                    className="hover:text-green-600"
                  >
                    Ai - Resume Accuracy
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/ai-resume-enhancer/"
                    className="hover:text-green-600"
                  >
                    Ai - Resume Enhancer
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/ai-job-match-apply/"
                    className="hover:text-green-600"
                  >
                    Ai - Job Match & Apply
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/verified-jobs/"
                    className="hover:text-green-600"
                  >
                    Verified Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/verified-jobs/"
                    className="hover:text-green-600"
                  >
                    Verified Profiles
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.abroadium.com/verified-jobs/"
                    className="hover:text-green-600"
                  >
                    & Much More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container text-base md:mx-auto text-center border-t border-black pt-6 mt-6">
          <p className="text-black text-center md:text-right">
            &copy; Copyright By Abroadium.com All Rights Reserved
          </p>
        </div>
      </footer>
      <SupportPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Footer;
