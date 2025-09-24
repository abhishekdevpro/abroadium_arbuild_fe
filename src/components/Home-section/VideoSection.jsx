// // import videoPreview from "../../assets/video-banner.png"; // replace with your actual image
// import vector from "../../assets/vector-video.png";
// import Button from "../../UI/Button";
// import { useNavigate } from "react-router-dom";
// export default function AIResumeVideoSection() {
//   const navigate = useNavigate();
//   const handleSignup = () => {
//     navigate("/login");
//   };
//   const handleBlogs = () => {
//     window.location.href = "https://blog.abroadium.com/";
//   };
//   return (
//     // <section className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-20">
//     //   <h2 className="text-3xl md:text-[50px] font-bold leading-tight text-center pb-20">
//     //     How Our <span className="text-white">AI Resume</span> Works For You
//     //   </h2>
//     //   <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
//     //     {/* LEFT TEXT */}
//     //     <div>
//     //       <img src={vector} alt="" />
//     //     </div>

//     //     <div className="md:w-1/2 space-y-6">
//     //       <div className="flex flex-col gap-4 md:w-[470px] px-4">
//     //         <p className="text-[20px] md:text-[24px] font-bold">
//     //           Check Resume Score, in few seconds with just couple of clicks.
//     //         </p>
//     //         <p className="text-base md:text-[17px] text-[#DCDCDC] leading-relaxed">
//     //           When an unknown printer took a galley of type and scrambled it to
//     //           make a type specimen book, it has survived.
//     //           <br />
//     //           When an unknown printer took a galley offer area.
//     //         </p>
//     //       </div>
//     //     </div>

//     //     {/* RIGHT VIDEO PREVIEW */}
//     //     <div className="md:w-1/2 w-full relative">
//     //       <img
//     //         src={videoPreview}
//     //         alt="Video Preview"
//     //         className="w-full h-full rounded-xl shadow-xl"
//     //       />

//     //       {/* Play Button Overlay (optional) */}
//     //       <button className="absolute inset-0 flex items-center justify-center">
//     //         <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
//     //           <svg
//     //             className="w-6 h-6 text-primary"
//     //             fill="currentColor"
//     //             viewBox="0 0 20 20"
//     //           >
//     //             <path
//     //               fillRule="evenodd"
//     //               d="M6.5 5.5a1 1 0 011.5-.87l6 3.5a1 1 0 010 1.74l-6 3.5A1 1 0 016.5 12.5v-7z"
//     //               clipRule="evenodd"
//     //             />
//     //           </svg>
//     //         </div>
//     //       </button>
//     //     </div>
//     //   </div>
//     // </section>
//     <section className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
//       {/* Vector on top-left (hidden on small screens) */}
//       <img
//         src={vector}
//         alt="decorative vector"
//         className="absolute hidden md:block"
//         style={{
//           top: "5.03px",
//           left: "9px",
//           width: "311px",
//           height: "267.5px",
//           opacity: 1,
//           transform: "rotate(0deg)",
//         }}
//       />

//       {/* Heading */}
//       <h2 className="text-[40px] md:text-[50px] font-bold leading-tight text-center pb-20">
//         How Our <span className="text-white">AI Resume</span> Works For You
//       </h2>

//       {/* Content */}
//       <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
//         {/* LEFT TEXT */}
//         <div className="md:w-1/2 px-4">
//           <div className="flex flex-col gap-4 md:w-[470px]">
//             <p className="text-[20px] md:text-[24px] font-bold">
//               Smarter Resumes in Seconds with Abroadium’s AI Watch how our AI
//               instantly scores, analyzes, and upgrades your resume — no expert
//               needed.
//             </p>

//             <ul className="text-base md:text-[17px] text-[#DCDCDC] leading-relaxed font-semibold list-disc list-inside mt-4">
//               <li>No guesswork.</li>
//               <li>No delays.</li>
//               <li>Just smarter resumes, faster.</li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
//             <Button
//               onClick={handleSignup}
//               variant="success"
//               size="md"
//               className="w-full"
//             >
//               Explore Now
//             </Button>

//             <Button
//               onClick={handleBlogs}
//               variant="success"
//               size="md"
//               className="w-full"
//             >
//               Read Expert Blogs
//             </Button>
//           </div>
//         </div>

//         {/* RIGHT VIDEO PREVIEW */}
//         <div className="md:w-1/2 w-full relative mt-10 md:mt-0">
//           {/* <img
//             src={videoPreview}
//             alt="Video Preview"
//             className="w-full h-full rounded-xl shadow-xl"
//           /> */}
//           <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
//             <iframe
//               src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&showinfo=0"
//               title="How AI Resume Works"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>

//           {/* Play Button Overlay */}
//           {/* <button className="absolute inset-0 flex items-center justify-center">
//             <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
//               <svg
//                 className="w-6 h-6 text-primary"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M6.5 5.5a1 1 0 011.5-.87l6 3.5a1 1 0 010 1.74l-6 3.5A1 1 0 016.5 12.5v-7z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </div>
//           </button> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import vector from "../../assets/vector-video.png";
import img1 from "../../assets/ai_resume_builder_iocn1.png";
import img2 from "../../assets/ai_resume_builder_iocn2.png";
import img3 from "../../assets/ai_resume_builder_iocn3.png";
import img4 from "../../assets/ai_resume_builder_iocn4.png";
import img5 from "../../assets/ai_resume_builder_iocn5.png";
import img6 from "../../assets/ai_resume_builder_iocn6.png";

const tabs = [
  {
    id: 1,
    title: "AI Resume Builder",

    description:
      "An AI Resume Builder is an advanced tool that uses artificial intelligence to create and optimize professional resumes quickly and effectively. Instead of starting from scratch, you can choose from modern templates and let the AI suggest powerful job descriptions, achievements, and skills that match your industry. It also ensures your resume is keyword-optimized to pass Applicant Tracking Systems (ATS), while checking for grammar, formatting, and consistency errors. With personalized suggestions for different job roles, an AI Resume Builder saves time, reduces effort, and increases your chances of standing out to employers.",
    icon: img1,
  },
  {
    id: 2,
    title: "AI Cover Letter",
    description:
      "Generate tailored cover letters that match your resume and highlight your strengths effectively.",
    icon: img2,
  },
  {
    id: 3,
    title: "AI Skill Test",
    description:
      "Test and validate your skills with AI-driven quizzes and assessments.",
    icon: img3,
  },
  {
    id: 4,
    title: "ATS Optimization",
    description:
      "Ensure your resume is ATS-friendly by analyzing keywords and formatting.",
    icon: img4,
  },
  {
    id: 5,
    title: "Templates by Experts",
    description:
      "Pick from professionally designed templates created by hiring experts.",
    icon: img5,
  },
  {
    id: 6,
    title: "Vibrant HR Community",
    description:
      "Engage with a global HR community to gain insights, tips, and feedback.",
    icon: img6,
  },
];

export default function AIResumeTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Decorative Vector */}
      <img
        src={vector}
        alt="decorative vector"
        className="absolute hidden md:block"
        style={{
          top: "5px",
          left: "10px",
          width: "300px",
          height: "260px",
        }}
      />

      {/* Heading */}
      <h2 className="text-[36px] md:text-[50px] font-bold text-center mb-12">
        How Our <span className="text-white">AI Resume</span> Works For You
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Tabs */}
        <div className="flex flex-col gap-3 md:w-1/3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-left font-medium transition ${
                activeTab.id === tab.id
                  ? "bg-white text-primary"
                  : "bg-primary text-white border border-white/30 hover:bg-white/10"
              }`}
            >
              {tab.title}
              {activeTab.id !== tab.id && (
                <ChevronRight size={18} className="text-gray-300" />
              )}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 bg-primary border border-white/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            {activeTab.icon && (
              <img
                src={activeTab.icon}
                alt="icon"
                className="w-10 h-10 rounded-md bg-white p-2"
              />
            )}
          </div>
          <h3 className="text-xl font-semibold">{activeTab.title}</h3>
          <p className="text-[#DCDCDC] text-base leading-relaxed">
            {activeTab.description}
          </p>
        </div>
      </div>
    </section>
  );
}
