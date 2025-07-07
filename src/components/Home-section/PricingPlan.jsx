import React from 'react';
import { Check } from 'lucide-react';
import Button from '../../UI/Button';

const PricingComponent = () => {
  const pricingPlans = [
    {
      id: 'free',
      name: 'Free Plan',
      target: 'For individuals',
      price: 'Free',
      period: '/monthly',
      description: 'Lorem ipsum dolor sit amet dolorati sticil consie ctetur adipiscing elit.',
      features: [
        'Unlimited Resume Edits',
        'Download in PDF',
        'Interactive Dashboard',
        '2 Unique Resume Templates'
      ],
      buttonText: 'Get started',
      buttonStyle: 'bg-blue-700 hover:bg-blue-800 text-white',
      cardStyle: 'bg-white border border-gray-200',
      isPopular: false
    },
    {
      id: 'single',
      name: 'Single Pass',
      target: 'For startups',
      price: 'CAD49',
      period: '/single',
      description: 'Lorem ipsum dolor sit amet dolorati sticil consie ctetur adipiscing elit.',
      features: [
        'Everything in Free +',
        '27 Unique Resume Templates',
        '5 Color Options & 6 Fonts',
        'Resume Parsing (ATS-Friendly)'
      ],
      buttonText: 'Get started',
      buttonStyle: 'bg-white hover:bg-gray-50 text-blue-700 border border-white',
      cardStyle: 'bg-primary text-white',
      isPopular: true
    },
    {
      id: 'yearly',
      name: 'AI Pro Yearly',
      target: 'For big companies',
      price: 'CAD499',
      period: '/yearly',
      description: 'Lorem ipsum dolor sit amet dolorati sticil consie ctetur adipiscing elit.',
      features: [
        'Everything in Free +',
        '37 Unique Resume Templates',
        '8 Color Options & 6 Fonts',
        'Resume Parsing (ATS-Friendly)'
      ],
      buttonText: 'Get started',
      buttonStyle: 'bg-blue-700 hover:bg-blue-800 text-white',
      cardStyle: 'bg-white border border-gray-200',
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${plan.cardStyle} rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
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
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                      plan.isPopular ? 'bg-white bg-opacity-20' : 'bg-blue-100'
                    }`}>
                      <div className={`w-4 h-4 rounded ${
                        plan.isPopular ? 'bg-white' : 'bg-primary'
                      }`}></div>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {plan.target}
                      </p>
                      <h3 className={`text-xl font-bold ${
                        plan.isPopular ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className={`text-sm mb-6 ${
                    plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold ${
                      plan.isPopular ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ml-2 ${
                      plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className={`text-sm font-semibold mb-4 ${
                    plan.isPopular ? 'text-white' : 'text-gray-900'
                  }`}>
                    Whats included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className={`w-5 h-5 mr-3 ${
                          plan.isPopular ? 'text-white' : 'text-primary'
                        }`} />
                        <span className={`text-sm ${
                          plan.isPopular ? 'text-white' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <Button
                className='w-full'
                variant={plan.isPopular ? 'secondary' : 'primary'}
                //   className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${plan.buttonStyle} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            All plans include our standard features. Upgrade or downgrade at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;