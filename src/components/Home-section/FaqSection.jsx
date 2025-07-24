import { useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes this resume builder different from others?",
      answer:
        "Our resume builder is powered by AI that not only helps you create a professional resume but also provides real-time suggestions to improve content, structure, and keyword optimization for Applicant Tracking Systems (ATS). You also get multiple modern templates, editable sections, and AI-enhanced formatting.",
    },
    {
      question:
        "Do I need any design or technical skills to use the resume builder?",
      answer:
        "Not at all. Our platform is designed for non-technical users. Just answer a few guided questions, and the AI will generate a polished, job-ready resume that you can edit, preview, and download in PDF format—all with just a few clicks.",
    },
    {
      question: "How does the AI resume enhancer work?",
      heading:
        "The AI Resume Enhancer scans your content and provides smart suggestions for:",
      points: [
        "Improving grammar and tone",
        "Making the resume ATS-friendly",
        "Optimizing keywords for job roles",
        "Highlighting achievements and measurable impact It’s like having a career coach + professional resume writer built into the platform.",
      ],
    },
    {
      question: "Can I create more than one version of my resume?",
      answer:
        "Yes. With our Monthly Plan, you can create and save multiple versions of your resume—ideal if you’re applying to different industries or roles. You can also switch between 10+ modern templates and download as needed.",
    },
    {
      question: "Is my data safe and secure?",
      answer:
        "Absolutely. We use industry-standard encryption and privacy controls to keep your data secure. Your resumes are only accessible by you, and you can delete them anytime. We never share your personal information with third parties.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="max-w-8xl bg-white mx-auto">
        <div className="max-w-4xl mx-auto p-8 bg-white">
          <h1 className="md:text-[50px] font-bold text-center mb-8">
            Frequently <span className="text-primary">Asked</span> Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <h3 className="md:text-[28px] font-medium text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 border border-primary  rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-primary" />
                      </div>
                    ) : (
                      <div className="w-8 h-8  rounded-full border border-primary flex items-center justify-center">
                        <Minus className="w-5 h-5 text-primary" />
                      </div>
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 bg-gray-50 text-[18px] leading-relaxed">
                    {faq.points ? (
                      <>
                        <p className="mb-2">{faq.heading}</p>
                        <ul className="list-disc list-inside space-y-1">
                          {faq.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
