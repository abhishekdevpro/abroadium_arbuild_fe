import React from "react";
import resume1 from "../../assets/resume-1.png";
import resume2 from "../../assets/resume-2.png";
import resume3 from "../../assets/resume-3.png";
import resume4 from "../../assets/resume-4.png";
import resume5 from "../../assets/resume-3 (1).jpg";
import globe from "../../assets/opcity-low-world.png";
import Button from "../../UI/Button";

const TemplateShowcaseSection = () => {
  // Your actual resume template images - replace these paths with your actual image imports
  const resumeTemplates = [
    {
      id: 1,
      src: resume1, // Replace with your actual image path
      alt: "Orange Resume Template",
      name: "Alisha Raymond",
      title: "Business Analyst",
    },
    {
      id: 2,
      src: resume2, // Replace with your actual image path
      alt: "Blue Resume Template",
      name: "Alisha Raymond",
      title: "Business Analyst",
    },
    {
      id: 3,
      src: resume3, // Replace with your actual image path
      alt: "Purple Resume Template",
      name: "Alisha Raymond",
      title: "Business Analyst",
    },
    {
      id: 4,
      src: resume4, // Replace with your actual image path
      alt: "Cyan Resume Template",
      name: "Alisha Raymond",
      title: "Business Analyst",
    },
    {
      id: 5,
      src: resume5, // Replace with your actual image path
      alt: "Cyan Resume Template",
      name: "Alisha Raymond",
      title: "Business Analyst",
    },
  ];

  return (
    <section className="bg-primary relative overflow-hidden py-20 px-4 sm:px-6 lg:px-10">
      {/* Background Globe Decorations - Replace with your actual globe images */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={globe}
          alt="Globe decoration"
          className="absolute top-10 left-10 w-24 h-24 opacity-10"
        />
        <img
          src={globe}
          alt="Globe decoration"
          className="absolute top-20 right-20 w-32 h-32 opacity-10"
        />
        <img
          src={globe}
          alt="Globe decoration"
          className="absolute bottom-10 left-1/4 w-20 h-20 opacity-10"
        />
        <img
          src={globe}
          alt="Globe decoration"
          className="absolute bottom-20 right-10 w-28 h-28 opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Explore Our Wide Range Of Trending
            <br />
            Templates That Recruiters Loves To See
          </h2>
        </div>

        {/* Template Stats */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Defined
          </h3>
          <p className="text-white/80 text-lg">
            3,700,000+ users chose this template
          </p>
        </div>

        {/* Template Preview Section */}

        {/* Resume Templates Grid - Using your actual images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {resumeTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="h-80 w-full">
                <img
                  src={template.src}
                  alt={template.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
          <div className="hidden lg:block">
            <Button variant="secondary">Use This Template</Button>
          </div>
        </div>

        {/* Mobile Use This Template Button */}
        <div className="text-center lg:hidden">
          <Button variant="primary">Use This Template</Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcaseSection;
