import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Target, Users, Zap, Shield, Award } from "lucide-react";
import Button from "../UI/Button";

const AIResumeBuilder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (token) {
      window.location.href = "https://builder.abroadium.com/dashboard";
    } else {
      navigate("/login");
    }
  };

  const keyFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Intelligent Content Generation",
      description:
        "Our AI analyzes your input and generates tailored content that aligns with industry standards and is optimized for Applicant Tracking Systems (ATS).",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Customizable Templates",
      description:
        "Choose from a range of professionally designed templates suited for different industries. Customize layouts, fonts, and colors to match your personal brand.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Skills & Keywords Optimization",
      description:
        "AI scans job descriptions and suggests relevant keywords, increasing your chances of passing ATS filters and attracting recruiters.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Real-Time Feedback & Suggestions",
      description:
        "Receive instant feedback on your resume's content, structure, and impact. Improve your resume with AI-powered suggestions.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Easy-to-Use Interface",
      description:
        "Our user-friendly platform makes resume building easy for everyone, from fresh graduates to seasoned professionals.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Experience-Specific Sections",
      description:
        "AI helps tailor your resume by recommending relevant sections like work experience, education, certifications, and projects.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign Up & Input Your Information",
      description:
        "Create an account on Abroadium and provide your career details, including work experience, education, skills, and achievements.",
    },
    {
      step: "2",
      title: "Choose a Template",
      description:
        "Browse our professional templates and select the one that best fits your industry and style preferences.",
    },
    {
      step: "3",
      title: "Generate & Customize Your Resume",
      description:
        "AI generates a resume draft based on your input. Customize content and layout while using real-time feedback for improvements.",
    },
    {
      step: "4",
      title: "Download & Apply",
      description:
        "Download your resume in PDF, DOCX, or other formats, and start applying for jobs with confidence.",
    },
  ];

  const whyChoose = [
    {
      title: "Efficiency & Speed",
      description:
        "Create a high-quality resume in minutes, saving time and effort.",
    },
    {
      title: "Professional Quality",
      description:
        "Expertly crafted designs and content ensure a professional and impactful resume.",
    },
    {
      title: "Increased Visibility",
      description:
        "ATS-optimized resumes increase your chances of getting noticed by recruiters.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Our AI learns from industry trends, offering up-to-date resume-building tools.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold ">
                AI Resume Builder
              </h1>
              <p className="text-center text-xl md:text-2xl mt-2  font-medium ">
                Revolutionizing the Job Application Process
              </p>
            </div>
            <p className="text-lg md:text-xl max-w-4xl mx-auto  mb-8 font-light">
              Welcome to Abroadium AI Resume Builder – an innovative solution
              designed to streamline the resume creation process and help you
              land your dream job. Our cutting-edge AI technology simplifies
              resume writing, ensuring that your skills and achievements are
              presented in the best possible light.
            </p>
            {/* <Button
              variant="success"
              size="lg"
              onClick={handleGetStarted}
              className="text-lg px-8 py-4"
            >
              Get Started Now
            </Button> */}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>

          <div className="space-y-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our AI Resume Builder Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our AI Resume Builder?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary text-white rounded-lg py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Building Your Resume Today
          </h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your job application process with Abroadium AI Resume
            Builder. Sign up now and take the first step toward landing your
            dream job with a professionally crafted resume that showcases your
            unique strengths and qualifications.
          </p>
          <Button
            variant="success"
            size="lg"
            onClick={handleGetStarted}
            className="text-lg px-8 py-4"
          >
            Get Started Now
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AIResumeBuilder;
