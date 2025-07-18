import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { useEffect } from "react";

const Careers = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Are you passionate about international opportunities and driven by
              the desire to empower individuals to explore the world? If so, we
              invite you to join the Abroadium team and be part of a dynamic and
              innovative organization dedicated to helping people achieve their
              dreams of studying, working, volunteering, and thriving abroad.
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
              Join the Abroadium Team
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Abroadium, we believe that the world is full of
                  opportunities waiting to be explored. We are a team of
                  dedicated professionals committed to connecting individuals
                  with verified and reliable international opportunities,
                  whether it’s pursuing higher education in a foreign country,
                  gaining valuable work experience overseas, making a difference
                  through volunteer work, or launching a new venture in a
                  vibrant international market.
                </p>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Join Us
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  1. Impact:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  As a member of the Abroadium team, you’ll have the opportunity
                  to make a meaningful impact on the lives of individuals around
                  the world. Every day, you’ll help people turn their dreams of
                  studying, working, and thriving abroad into reality.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  2. Innovation:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are passionate about innovation and are constantly seeking
                  new ways to improve and enhance our platform to better serve
                  our users. As part of our team, you’ll have the opportunity to
                  contribute your ideas, creativity, and expertise to shape the
                  future of international opportunities.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  3. Collaboration:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Abroadium, we believe in the power of collaboration and
                  teamwork. You’ll work alongside talented and passionate
                  individuals who share your passion for international
                  opportunities and are dedicated to achieving our mission.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  4. Professional Growth:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to the professional growth and development of
                  our team members. Whether it’s through training programs,
                  mentorship opportunities, or hands-on experience, we’ll
                  support you in reaching your full potential and advancing your
                  career.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  5. Culture:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  At Abroadium, we foster a culture of inclusivity, diversity,
                  and respect. We celebrate the unique perspectives and
                  backgrounds of our team members and strive to create a
                  supportive and inclusive work environment where everyone feels
                  valued and empowered to succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Current Openings
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              We are always looking for talented and motivated individuals to
              join our team. Check out our current openings below:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                1. Content Writer:
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Do you have a passion for writing and a knack for storytelling?
                Join our content team and help create engaging and informative
                content for our platform.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                2. Marketing Specialist:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Are you skilled in digital marketing and passionate about
                spreading the word about international opportunities? Join our
                marketing team and help us reach and engage our target audience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">
                3. Customer Support Representative:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Are you friendly, outgoing, and customer-focused? Join our
                customer support team and help provide exceptional service to
                our users around the world.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              How to Apply
            </h3>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium italic text-center leading-relaxed">
              &quot;If you’re interested in joining the Abroadium team, we’d
              love to hear from you! Please submit your resume and a cover
              letter outlining why you’d be a great fit for the position to{" "}
              <a
                href="mailto:careers@abroadium.com"
                className="text-success underline hover:text-success/90"
              >
                careers@abroadium.com
              </a>
              . Be sure to include the position title in the subject line of
              your email.&quot;
              <br />
              Join us on our mission to empower individuals to explore, thrive,
              and succeed in the global arena. Your adventure starts here at
              Abroadium!
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Careers;
