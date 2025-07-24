import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useEffect } from "react";

const RefundPolicy = () => {
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
              Refund Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              At Abroadium, we value your satisfaction. Our refund policy is
              valid for 3 days from the date of purchase. Unfortunately, if more
              than 3 days have passed, we will not be able to process a refund
              or exchange.
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
              Returns
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  To request a refund, please reach out to our support team at{" "}
                  <a
                    href="mailto:careers@abroadium.com"
                    className="text-success underline hover:text-success/90"
                  >
                    careers@abroadium.com
                  </a>{" "}
                  with details about your concerns. If the issue remains
                  unresolved, we will ensure that a refund is processed
                  promptly.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Non-Refundable Items
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              Digital products, such as PDF files.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Refund Processing
            </h3>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;If your refund request is approved, we will process the
              refund within 7 business days. Your trust matters to us, and we’re
              here to help resolve any concerns.&quot;
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RefundPolicy;
