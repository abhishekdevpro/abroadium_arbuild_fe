import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useEffect } from "react";

const GrievanceRedressal = () => {
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
              Grievance Redressal
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Grievance Redressal Mechanism at Abroadium: Ensuring Your Concerns
              Are Heard and Addressed
              <br />
              At Abroadium, we are committed to providing a positive and
              supportive experience for all our users. We understand that from
              time to time, concerns or grievances may arise, and we are
              dedicated to addressing them promptly and effectively. Our
              Grievance Redressal Mechanism is designed to ensure that your
              concerns are heard, taken seriously, and resolved in a fair and
              transparent manner.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What Sets Us Apart Section */}
          <div className="mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How It Works
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  1. Contact Us:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have a grievance or concern, we encourage you to reach
                  out to us as soon as possible. You can contact us through
                  various channels, including email, phone, or our website’s
                  contact form. Additionally, we may have designated grievance
                  redressal officers or departments to handle specific types of
                  grievances.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  2. Provide Details:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  When submitting your grievance, please provide as much detail
                  as possible, including the nature of the issue, any relevant
                  documentation or evidence, and your preferred outcome or
                  resolution. The more information you provide, the better
                  equipped we will be to address your concerns effectively.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  3. Acknowledgement:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Once we receive your grievance, we will acknowledge receipt
                  and provide you with an estimated timeline for resolution. We
                  take all grievances seriously and strive to address them in a
                  timely manner.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  4. Investigation and Resolution:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team will conduct a thorough investigation into your
                  grievance, taking into account all relevant information and
                  evidence. We may reach out to you for additional information
                  or clarification as needed. Once the investigation is
                  complete, we will work to resolve the issue and provide you
                  with a satisfactory outcome.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  5. Communication:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Throughout the process, we will keep you informed of the
                  progress and status of your grievance. We believe in open and
                  transparent communication and will ensure that you are kept
                  updated every step of the way.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  6. Feedback and Follow-Up:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After your grievance has been resolved, we may follow up with
                  you to ensure that you are satisfied with the outcome and to
                  gather feedback on your experience with our Grievance
                  Redressal Mechanism. Your feedback is valuable to us and helps
                  us continuously improve our processes and services.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Commitment to You
            </h2>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                1. Fairness and Impartiality:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                We are committed to treating all grievances with fairness,
                impartiality, and respect for all parties involved.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                2. Confidentiality:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We understand the sensitivity of grievances and will handle all
                information provided with the utmost confidentiality and
                discretion.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                3. Timeliness:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We strive to address grievances in a timely manner and will make
                every effort to resolve them promptly and effectively.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                4. Accountability:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We take responsibility for addressing grievances and ensuring
                that appropriate actions are taken to prevent similar issues
                from occurring in the future.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h3>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;If you have a grievance or concern, please don’t hesitate to
              reach out to us. You can contact us through the following
              channels: &quot;
              <br />
              Email:{" "}
              <a
                href="mailto:grievances@abroadium.com"
                className="text-blue-600 underline"
              >
                grievances@abroadium.com
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+911234567890" className="text-blue-600 underline">
                Please contact your SPOC
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.abroadium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                www.abroadium.com
              </a>
              <br />
              We are here to listen, support, and assist you in resolving your
              concerns. Thank you for choosing Abroadium, and we look forward to
              addressing any grievances you may have.
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GrievanceRedressal;
