import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useEffect } from "react";

const PlacementSupport = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Placement support
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Embarking on an international journey can be both exciting and
              challenging. At Abroadium, we understand that finding the right
              placement abroad is a crucial step in achieving your academic,
              professional, and personal goals. That’s why we offer
              comprehensive Placement Support Services designed to assist you
              every step of the way, from exploring opportunities to securing
              placements and beyond.
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
              Our Approach
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                At Abroadium, we believe in a personalized approach to placement
                support. We understand that every individual’s needs and
                aspirations are unique, which is why we tailor our services to
                meet your specific goals and preferences. Whether you’re seeking
                a study placement, internship, job opportunity, or volunteer
                position abroad, our dedicated team is here to guide you through
                the process and help you find the perfect placement match.
              </p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What We Offer
            </h2>
            <div className="space-y-8 mb-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  1. Placement Guidance:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our experienced placement advisors will work closely with you
                  to understand your interests, skills, and goals. We’ll help
                  you explore a wide range of placement opportunities that align
                  with your academic and career aspirations, providing valuable
                  insights and advice along the way.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  2. Resume and Cover Letter Assistance:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Crafting a compelling resume and cover letter is essential for
                  standing out to potential employers and placement providers.
                  Our team will assist you in creating professional, tailored
                  documents that highlight your strengths and experiences and
                  showcase your suitability for the placement.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  3. Interview Preparation:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Interviews can be nerve-wracking, especially in a new cultural
                  context. We’ll provide you with guidance and resources to help
                  you prepare for interviews, including mock interview sessions,
                  tips on effective communication, and cultural etiquette
                  guidelines
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  4. Networking Opportunities:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Building connections and networking with professionals in your
                  field can significantly enhance your placement prospects.
                  We’ll help you identify networking opportunities, connect with
                  industry professionals, and expand your professional network
                  both online and offline.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  5. Visa and Immigration Support:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Navigating visa and immigration processes can be complex and
                  overwhelming. Our team will provide you with guidance and
                  assistance to ensure that you understand the visa requirements
                  for your chosen destination and help you navigate the
                  application process smoothly.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  6. Post-Placement Support:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our support doesn’t end once you secure a placement. We’ll
                  continue to provide assistance and guidance throughout your
                  placement experience, addressing any challenges or concerns
                  that may arise and offering support to ensure a smooth and
                  successful transition.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center ">
              Why Choose Abroadium
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Expertise:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team of placement advisors has extensive experience and
                  expertise in international education and career development.
                  We’ll leverage our knowledge and networks to help you find the
                  best placement opportunities tailored to your goals and
                  preferences.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Personalized Support:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize personalized support and individual attention,
                  ensuring that you receive the guidance and assistance you need
                  every step of the way. Your success is our top priority, and
                  we’re committed to helping you achieve your placement goals.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Reliability:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Abroadium, we pride ourselves on our commitment to
                  reliability and transparency. You can trust that the placement
                  opportunities we recommend are carefully vetted and verified
                  to ensure their quality and authenticity.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Global Network:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With a vast network of partner institutions, employers, and
                  placement providers around the world, we offer access to a
                  diverse range of placement opportunities in various fields and
                  industries.
                </p>
              </div>
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Get Started Today
            </h2>
            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                Ready to take the next step towards your international
                placement? Contact us today to learn more about our Placement
                Support Services and start your journey to success with
                Abroadium. Whether you’re seeking an internship, job, study
                placement, or volunteer opportunity abroad, we’re here to
                support you every step of the way. Your global adventure awaits!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlacementSupport;
