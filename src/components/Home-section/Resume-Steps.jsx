// Real images (update your paths if needed)
import step1 from "../../assets/step-1.png";
import step2 from "../../assets/step-2.png";
import step3 from "../../assets/step-3.png";
import step4 from "../../assets/step-4.png";
import step5 from "../../assets/step-5.png";

const steps = [
  {
    number: 1,
    title: "Upload Resume",
    subtitle: "Upload Your Existing Resume",
    desc: "Got a resume? Great. Upload it to our platform to begin the AI-powered enhancement journey. Don’t have one? You can start from scratch too!  ",
    image: step1,
  },
  {
    number: 2,
    title: "AI Analysis",
    subtitle: "Get Instant Resume Evaluation",
    desc: "Our intelligent AI scans your resume for formatting, ATS compatibility, missing sections, and keyword optimization. It identifies improvement areas based on job roles and industry standards. ",
    image: step2,
  },
  {
    number: 3,
    title: "Select Design",
    subtitle: "Pick a Modern, Job-Winning Template",
    desc: "Choose from 25+ recruiter-approved templates tailored for industries like IT, Healthcare, Finance, and more. Customize fonts, layout, and colors—all in just a few clicks. ",
    image: step3,
  },
  {
    number: 4,
    title: "Improve with AI",
    subtitle: "Smart Suggestions, Better Impact",
    desc: "Receive real-time AI suggestions to enhance your content—optimize keywords, rewrite weak sentences, highlight accomplishments, and improve your resume score instantly. ",
    image: step4,
  },
  {
    number: 5,
    title: "Download",
    subtitle: "Ready to Go? Download Instantly",
    desc: "Once you're satisfied, download your resume in high-quality PDF format. It’s ready to be shared with recruiters, uploaded to job portals, or emailed directly.",
    image: step5,
  },
];

export default function ResumeSteps() {
  return (
    <section className="bg-white py-20 ">
      <div className=" mx-auto">
        {/* Section Header */}
        <h2
          className="text-[40px] md:text-[50px] font-bold text-center mb-16 text-black"
          style={{
            lineHeight: "55px",
          }}
        >
          Let Your <span className="text-primary">Resume Stand Ahead</span> Of
          the <br />
          Competition With Our Robust AI
        </h2>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row justify-center md:h-[500px] items-center gap-5 md:gap-10   ${
                  isEven ? "md:flex-row-reverse  " : ""
                }`}
              >
                {/* Text Box */}
                <div className="md:w-1/2 w-full bg-[#F4F8FF]">
                  <div className=" p-4 md:py-[48px] rounded-sm shadow-sm h-full w-full ">
                    <div className="flex items-center mb-4">
                      <div className="h-24 w-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-5xl">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-3xl sm:text-2xl font-semibold text-black mb-3">
                      {step.title}
                    </h3>
                    <h3 className="text-2xl sm:text-xl font-medium text-black mb-3">
                      {step.subtitle}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed w-full">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 w-full flex justify-center">
                  <img
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="w-full h-[500px] object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
