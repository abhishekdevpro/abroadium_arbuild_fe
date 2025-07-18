import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useEffect } from "react";

const TermsAndConditions = () => {
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
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Terms & Conditions of Use for Abroadium
              <br />
              These Terms & Conditions (“Terms”) govern your access to and use
              of the Abroadium website, services, and content (collectively
              referred to as the “Service”). By accessing or using the Service,
              you agree to be bound by these Terms. If you do not agree to these
              Terms, please do not access or use the Service.
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
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  1. Acceptance of Terms:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  1. By accessing or using the Service, you agree to be bound by
                  these Terms and any additional terms and conditions that may
                  apply to specific features of the Service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2. If you are accessing or using the Service on behalf of a
                  company, organization, or other legal entity, you represent
                  and warrant that you have the authority to bind such entity to
                  these Terms, and in such case, “you” and “your” will refer to
                  such entity.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  2. Use of Service:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  1. You agree to use the Service only for lawful purposes and
                  in accordance with these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2. You agree not to use the Service in any way that could
                  damage, disable, overburden, or impair the Service or
                  interfere with any other party’s use of the Service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3. You agree not to attempt to gain unauthorized access to any
                  portion or feature of the Service, or any other systems or
                  networks connected to the Service.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  3. User Accounts:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  1. In order to access certain features of the Service, you may
                  be required to create an account. You agree to provide
                  accurate, current, and complete information when creating your
                  account, and to update your information as necessary to keep
                  it accurate, current, and complete.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2. You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur
                  under your account. You agree to notify us immediately of any
                  unauthorized use of your account or any other breach of
                  security.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  4. Intellectual Property:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  1. The Service and its original content, features, and
                  functionality are owned by Abroadium and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property or proprietary rights laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2. You may not modify, reproduce, distribute, create
                  derivative works of, publicly display, publicly perform,
                  republish, download, store, or transmit any of the material on
                  the Service, except as expressly permitted by these Terms.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  5. Privacy:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your use of the Service is subject to our Privacy Policy,
                  which governs the collection, use, and disclosure of your
                  personal information. By using the Service, you consent to the
                  terms of the Privacy Policy.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  6. Limitation of Liability:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by applicable law, in no event
                  shall Abroadium, its affiliates, or their respective
                  directors, officers, employees, or agents be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, arising out of or
                  in connection with your access to or use of the Service.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  7. Indemnification:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Abroadium,
                  its affiliates, and their respective directors, officers,
                  employees, and agents from and against any and all claims,
                  damages, liabilities, costs, and expenses, including
                  reasonable attorneys’ fees, arising out of or in connection
                  with your access to or use of the Service or your breach of
                  these Terms.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  8. Modifications to Terms:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any
                  time. If we make material changes to these Terms, we will
                  notify you by email or by posting a notice on the Service.
                  Your continued use of the Service after any such changes
                  constitutes your acceptance of the new Terms.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  9. Governing Law:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance
                  with the laws of Jaipur (India), without regard to its
                  conflict of law provisions.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Contact Us
            </h2>
            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms, please contact us
                at
                <br />
                <a
                  href="mailto:grievances@abroadium.com"
                  className="text-success underline"
                >
                  Grievances@abroadium.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Effective Date
            </h3>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;These Terms were last updated on 21-March-2024. &quot;
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
