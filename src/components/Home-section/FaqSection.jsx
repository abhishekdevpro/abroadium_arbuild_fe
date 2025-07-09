import { useState } from 'react';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes aboardium the perfect tool to prepare your job application?",
      answer: "Aboardium is a concise document that summarizes your work experience, education, skills, qualities, and accomplishments. It's used to showcase your qualifications to potential employers and helps you stand out. It tells employers why you deserve a job interview in one or two powerful pages."
    },
    {
      question: "What makes aboardium the perfect tool to prepare your job application?",
      answer: "Aboardium streamlines the application process by providing intelligent templates and AI-powered suggestions that help you craft compelling resumes and cover letters tailored to specific job requirements."
    },
    {
      question: "What makes aboardium the perfect tool to prepare your job application?",
      answer: "Our platform offers real-time feedback on your application materials, ensuring they meet industry standards and ATS requirements while highlighting your unique strengths and achievements."
    },
    {
      question: "What makes aboardium the perfect tool to prepare your job application?",
      answer: "With aboardium, you get access to a comprehensive database of successful application examples and industry-specific keywords that increase your chances of getting noticed by recruiters."
    },
    {
      question: "What makes aboardium the perfect tool to prepare your job application?",
      answer: "The tool provides personalized recommendations based on your career goals and experience level, helping you create applications that resonate with hiring managers in your target industry."
    },
    {
      question: "What makes aboardium the perfect tool to prepare your job application?",
      answer: "Aboardium's collaborative features allow you to share your applications with mentors and peers for feedback, ensuring you present the best version of yourself to potential employers."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      <div className='max-w-8xl bg-white mx-auto'>
        <div className="max-w-4xl mx-auto p-8 bg-white">
      <h1 className="md:text-[50px] font-bold text-center mb-8">
        Frequently <span className="text-primary">Asked</span> Questions
      </h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
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
              <div className="px-6 pb-4 bg-gray-50">
                <p className="text-[18px] leading-relaxed">
                  {faq.answer}
                </p>
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