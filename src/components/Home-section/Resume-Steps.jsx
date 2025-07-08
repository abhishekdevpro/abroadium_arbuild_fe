// Real images (update your paths if needed)
import step1 from "../../assets/step-1.png";
import step2 from "../../assets/step-2.png";
import step3 from "../../assets/step-3.png";
import step4 from "../../assets/step-5.png";
import step5 from "../../assets/step-6.png";

const steps = [
  {
    number: 1,
    title: "Upload Resume",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: step1,
  },
  {
    number: 2,
    title: "AI Analysis",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: step2,
  },
  {
    number: 3,
    title: "Select Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: step3,
  },
  {
    number: 4,
    title: "Improve with AI",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: step4,
  },
  {
    number: 5,
    title: "Download",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .",
    image: step5,
  },
];

export default function ResumeSteps() {
  return (
    <section className="bg-white py-20 ">
      <div className=" mx-auto">
        {/* Section Header */}
        <h2 className="md:text-[50px] sm:text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          Let Your <span className="text-primary">Resume Stand Ahead</span> Of{" "}
          <br />
          Competition With Our Robust AI
        </h2>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row justify-center h-[500px] items-center gap-5 md:gap-10  ${
                  isEven ? "md:flex-row-reverse  " : ""
                }`}
              >
                {/* Text Box */}
                <div className="md:w-1/2 w-full bg-[#F4F8FF]">
                  <div className=" md:pl-20 md:pr-8 py-10 rounded-sm shadow-sm h-full w-full ">
                    <div className="flex items-center mb-4">
                      <div className="h-24 w-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-5xl">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-3xl sm:text-2xl font-semibold text-black mb-3">
                      {step.title}
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
