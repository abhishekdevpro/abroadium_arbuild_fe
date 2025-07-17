import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import aboutus1 from "./images/aboutus1.jpg";
import aboutuslaptop from "./images/aboutuslaptop.jpg";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              At Aboadium, our mission is to bridge the gap between ambition and
              achievement by providing reliable, verified information and
              resources for individuals seeking opportunities beyond their home
              countries. We strive to empower our users to make informed
              decisions and navigate the complexities of global opportunities
              with confidence and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What Sets Us Apart Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Sets Us Apart
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Rigorous Verification Process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand the importance of trust and credibility when it
                  comes to international opportunities. That’s why we employ a
                  rigorous verification process to ensure that every opportunity
                  featured on our platform meets our high standards of
                  authenticity and quality. From educational institutions and
                  employers to volunteer organizations and entrepreneurship
                  programs, you can trust that all listings have been thoroughly
                  vetted.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Comprehensive Resource Hub
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you’re a student exploring study abroad options, a
                  professional seeking international employment opportunities,
                  or an aspiring entrepreneur looking to expand your horizons,
                  our platform offers a comprehensive array of resources
                  tailored to your specific needs. From guides and articles to
                  FAQs and expert advice, we provide the tools and information
                  you need to navigate every aspect of your international
                  journey.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in the power of data to inform decision-making.
                  That’s why our content is meticulously researched and
                  supported by relevant data and statistics. Whether we’re
                  discussing job market trends, educational rankings, or visa
                  requirements, you can rely on our information to be accurate,
                  up-to-date, and data-backed.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  User-Centric Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your success is our top priority. That’s why we take a
                  user-centric approach to everything we do. Whether you have
                  questions about visa processes, funding options, or cultural
                  adaptation, our dedicated team is here to provide personalized
                  assistance and support every step of the way. We are committed
                  to ensuring that your experience with Abroadium is positive,
                  enriching, and tailored to your unique needs and aspirations.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Commitment to Excellence
            </h2>
            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                Excellence is not just a goal; it’s a standard that permeates
                everything we do at Abroadium. From the quality of our content
                to the level of customer service we provide, we are committed to
                upholding the highest standards of professionalism, integrity,
                and excellence. Our goal is to exceed your expectations and
                empower you to achieve your goals and aspirations on the global
                stage.
              </p>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Join Us on Your Journey Abroad
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              Whether you’re dreaming of studying in a foreign land, pursuing an
              exciting career opportunity overseas, making a difference through
              volunteer work, or launching a new business venture in a vibrant
              international market, Abroadium is your trusted partner on the
              journey ahead. Explore our platform, engage with our community,
              and embark on your next adventure with confidence and excitement.
              Your world of opportunities awaits!
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="Connect with us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Images Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src={aboutus1}
                alt="Vintage typewriter representing traditional approach"
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Traditional approach meets modern innovation
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src={aboutuslaptop}
                alt="Modern laptop representing technology and opportunities"
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Embracing technology for better opportunities
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;At Abroadium, we are united by a core set of beliefs that
              guide our actions and shape our vision for the future. These
              beliefs define who we are as a team and inform everything we
              do.&quot;
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
