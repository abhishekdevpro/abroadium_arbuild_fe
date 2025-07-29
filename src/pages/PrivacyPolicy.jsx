import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import aboutus1 from "./images/aboutus1.jpg";
import aboutuslaptop from "./images/aboutuslaptop.jpg";
import { useEffect } from "react";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              At Abroadium, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy describes how we collect, use, and disclose the information
              we collect from users of the Abroadium website and services
              (collectively referred to as the “Service”). By accessing or using
              the Service, you consent to the terms of this Privacy Policy.
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
              Information We Collect
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect personal information that you provide to us
                  when you create an account, sign up for our newsletter,
                  contact us with inquiries or feedback, or otherwise interact
                  with the Service. This may include your name, email address,
                  mailing address, phone number, and other contact information.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Usage Data
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may collect information about your usage of the Service,
                  including your IP address, browser type, operating system,
                  pages visited, and other usage statistics. This information
                  helps us analyze trends, administer the Service, and improve
                  our offerings.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may use cookies, web beacons, and similar tracking
                  technologies to collect information about your interactions
                  with the Service and to personalize your experience. You can
                  control cookies through your browser settings, but please note
                  that disabling cookies may limit your ability to use certain
                  features of the Service.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Use Your Information
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  We may use the information we collect for the following
                  purposes:
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  To provide, maintain, and improve the Service;
                  <br />
                  To communicate with you about the Service, including
                  responding to inquiries and providing customer support;
                  <br />
                  To send you promotional materials, newsletters, and other
                  communications that may be of interest to you;
                  <br />
                  To analyze trends and user behavior, and to optimize the
                  Service and our marketing efforts;
                  <br />
                  To comply with legal and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sharing of Information
            </h2>

            <div className="space-y-8 mb-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  We may share your information with third-party service
                  providers who assist us in operating the Service, conducting
                  our business, or servicing you. These service providers may
                  have access to your personal information only to perform these
                  tasks on our behalf and are obligated not to disclose or use
                  it for any other purpose.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  We may also share your information in response to legal
                  process, to protect our rights or property, or to prevent
                  illegal activities.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Data Retention:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We will retain your personal information for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Security:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We take reasonable measures to protect the security of your
                  personal information and to prevent unauthorized access,
                  disclosure, alteration, or destruction. However, please be
                  aware that no method of transmission over the internet or
                  method of electronic storage is completely secure, and we
                  cannot guarantee the absolute security of your information.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Your Choices:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You may opt out of receiving promotional communications from
                  us by following the unsubscribe instructions provided in the
                  communication or by contacting us directly.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Children’s Privacy:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Service is not directed to children under the age of 13,
                  and we do not knowingly collect personal information from
                  children under the age of 13. If you are under the age of 13,
                  please do not use the Service or provide any personal
                  information to us.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Changes to this Privacy Policy:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. If we
                  make material changes to this Privacy Policy, we will notify
                  you by posting a notice on the Service or by sending you an
                  email. Your continued use of the Service after any such
                  changes constitutes your acceptance of the updated Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
          {/* Our Commitment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Us
            </h2>
            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at Grievances@abroadium.com
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;This Privacy Policy was last updated on 21-March-24&quot;
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
