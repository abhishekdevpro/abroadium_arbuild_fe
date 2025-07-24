import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import Button from "../../UI/Button";
import pricing1 from "../../assets/pricing-icon-1.svg";
import pricing2 from "../../assets/pricing-icon-2.svg";
import pricing3 from "../../assets/pricing-icon-3.svg";
import { useNavigate } from "react-router-dom";

const PricingComponent = () => {
  const navigate = useNavigate();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (pricingPlans) => {
    const token = localStorage.getItem("token");
    if (pricingPlans === "freePlan") {
      token
        ? window.open(`https://builder.abroadium.com/?${token}`)
        : navigate("/login");
    } else {
      token
        ? window.open(`https://builder.abroadium.com/payment`)
        : navigate("/login");
    }
  };

  if (!isMounted) {
    return null;
  }

  const pricingPlans = [
    {
      id: "free",
      name: "Free Plan",
      icon: pricing1,
      target: "For individuals",
      price: " Rs 0 ",
      period: "/monthly",
      description:
        "Perfect for freshers or those testing the waters — build your resume with essential tools and no cost.",
      features: [
        " Unlimited Resume Edits",
        " Download in PDF Format",
        " Interactive Resume Dashboard",
        " 1 Unique Resume Template",
      ],
      buttonText: "Get started",
      buttonStyle: "bg-blue-700 hover:bg-blue-800 text-white",
      cardStyle: "bg-white border border-gray-200",
      isPopular: false,
    },
    {
      id: "single",
      name: "Single Pass",
      icon: pricing2,
      target: "For Individual Job Seekers",
      price: "Rs 49",
      period: "/Resume",
      description:
        "Perfect for one-time users — download a high-quality resume instantly without long-term commitment.",
      features: [
        "Everything in Free +",
        "20 Unique Resume Templates & 5 Unique CoverLetter Templates",
        "20+ Color Options & 10+ Fonts",
        "Resume Parsing (ATS-Friendly)",
      ],
      buttonText: "Get started",
      buttonStyle:
        "bg-white hover:bg-gray-50 text-blue-700 border border-white",
      cardStyle: "bg-primary text-white",
      isPopular: true,
    },
    {
      id: "yearly",
      name: "AI Pro Yearly",
      target: "For big companies",
      icon: pricing3,
      price: "Rs 499",
      period: "/yearly",
      description:
        "Lorem ipsum dolor sit amet dolorati sticil consie ctetur adipiscing elit.",
      features: [
        "Everything in Free +",
        "37 Unique Resume Templates",
        "8 Color Options & 6 Fonts",
        "Resume Parsing (ATS-Friendly)",
      ],
      buttonText: "Get started",
      buttonStyle: "bg-blue-700 hover:bg-blue-800 text-white",
      cardStyle: "bg-white border border-gray-200",
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[50px] font-bold mb-6">Pricing</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${
                plan.cardStyle
              } rounded-[24px] relative overflow-hidden
    ${plan.isPopular ? "z-10 -translate-y-8 scale-105" : "hover:scale-105"}
  `}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    {/* <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        plan.isPopular
                          ? "bg-white bg-opacity-20"
                          : "bg-blue-100"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded ${
                          plan.isPopular ? "bg-white" : "bg-primary"
                        }`}
                      > </div>
                    </div> */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        plan.isPopular
                          ? "bg-white bg-opacity-20"
                          : "bg-blue-100"
                      }`}
                    >
                      <img
                        src={plan.icon}
                        alt={plan.name}
                        className="w-5 h-5 object-contain"
                      />
                    </div>

                    <div>
                      <p
                        className={`text-[18px] font-medium ${
                          plan.isPopular ? "text-white" : "text-[#6F6C90]"
                        }`}
                      >
                        {plan.target}
                      </p>
                      <h3
                        className={`md:text-[24px] font-bold ${
                          plan.isPopular ? "text-white" : "text-[#170F49]"
                        }`}
                      >
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`text-[18px] mb-6 ${
                      plan.isPopular ? "text-white" : "text-[#6F6C90]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span
                      className={`text-[54px] font-bold ${
                        plan.isPopular ? "text-white" : "text-[#170F49]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ml-2 ${
                        plan.isPopular ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4
                    className={`text-[18px] font-semibold mb-4 ${
                      plan.isPopular ? "text-white" : "text-[#170F49]"
                    }`}
                  >
                    Whats included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check
                          className={`w-5 h-5 mr-3 ${
                            plan.isPopular ? "text-white" : "text-[#170F49]"
                          }`}
                        />
                        <span
                          className={`text-[18px] ${
                            plan.isPopular ? "text-white" : "text-[#170F49]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <Button
                  className="w-full"
                  onClick={() => handleClick(pricingPlans)}
                  variant={plan.isPopular ? "secondary" : "primary"}
                  //   className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${plan.buttonStyle} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            All plans include our standard features. Upgrade or downgrade at any
            time.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PricingComponent;
