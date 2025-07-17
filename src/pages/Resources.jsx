import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useEffect } from "react";

const Resources = () => {
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
              Abroadium Resources
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              At Abroadium, we understand that access to reliable, comprehensive
              resources is essential for navigating the complexities of
              international opportunities. That’s why we’re proud to offer a
              wide range of resources designed to empower individuals like you
              to explore, thrive, and succeed in the global arena. Whether
              you’re planning to study abroad, pursue international employment
              opportunities, volunteer overseas, or launch a new venture in a
              foreign country, our resources are here to support you every step
              of the way.
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
              What You’ll Find in Our Resources
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  1. Guides and How-To Articles:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our extensive collection of guides and how-to articles covers
                  a variety of topics related to studying, working,
                  volunteering, and living abroad. From step-by-step guides on
                  applying for visas and scholarships to practical tips on
                  packing essentials and cultural adaptation, our resources
                  provide valuable insights and actionable advice to help you
                  navigate your international journey with confidence.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  2. Checklists and Templates:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Planning and preparation are key to a successful international
                  experience. That’s why we offer a range of checklists,
                  templates, and planning tools to help you stay organized and
                  on track. Whether you’re preparing for a study abroad program,
                  job interview, volunteer placement, or relocation to a new
                  country, our resources make it easy to ensure that you’ve
                  covered all the essential steps and details.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  3. Financial Planning and Funding Resources:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Managing finances while abroad can be challenging, but our
                  financial planning and funding resources are here to help.
                  Learn how to create a budget, manage expenses, find
                  scholarships and grants, and make the most of your financial
                  resources during your international journey. Our resources
                  provide practical advice and strategies for financing your
                  dreams of studying, working, or volunteering abroad.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  4. Country and Destination Information:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Interested in studying, working, or volunteering in a specific
                  country or region? Our country and destination information
                  resources provide valuable insights into the culture,
                  education system, job market, visa requirements, and other
                  essential aspects of living and working abroad. Whether you’re
                  considering destinations in Europe, Asia, the Americas, or
                  beyond, our resources will help you make informed decisions
                  and plan your international adventure with confidence.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  5. Community Forums and Q&A:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Connect with fellow global explorers, share experiences, ask
                  questions, and seek advice in our community forums and Q&A
                  sections. Our vibrant online community is a valuable resource
                  for exchanging ideas, getting support, and building
                  connections with like-minded individuals who share your
                  passion for international opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Access Our Resources
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              Our resources are available online and accessible to anyone
              interested in exploring international opportunities. Simply visit
              our website to browse our extensive collection of guides,
              articles, checklists, templates, and more. Whether you’re a
              student, recent graduate, seasoned professional, or aspiring
              entrepreneur, our resources are designed to meet your needs and
              support you on your journey to global success.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Join the Abroadium Community
            </h3>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;Join our community of global explorers, learners, and
              achievers by accessing our resources today. Connect with us on
              social media to stay updated on the latest resources, tips, and
              insights for pursuing your dreams abroad. At Abroadium, we’re here
              to empower you to explore, thrive, and succeed in the global
              arena. Your international adventure starts here!&quot;
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resources;
