import videoPreview from "../../assets/video-banner.png"; // replace with your actual image
import vector from "../../assets/vector-video.png";
import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
export default function AIResumeVideoSection() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/login");
  };
  const handleBlogs = () => {
    window.location.href = "https://blog.abroadium.com/";
  };
  return (
    // <section className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-20">
    //   <h2 className="text-3xl md:text-[50px] font-bold leading-tight text-center pb-20">
    //     How Our <span className="text-white">AI Resume</span> Works For You
    //   </h2>
    //   <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
    //     {/* LEFT TEXT */}
    //     <div>
    //       <img src={vector} alt="" />
    //     </div>

    //     <div className="md:w-1/2 space-y-6">
    //       <div className="flex flex-col gap-4 md:w-[470px] px-4">
    //         <p className="text-[20px] md:text-[24px] font-bold">
    //           Check Resume Score, in few seconds with just couple of clicks.
    //         </p>
    //         <p className="text-base md:text-[17px] text-[#DCDCDC] leading-relaxed">
    //           When an unknown printer took a galley of type and scrambled it to
    //           make a type specimen book, it has survived.
    //           <br />
    //           When an unknown printer took a galley offer area.
    //         </p>
    //       </div>
    //     </div>

    //     {/* RIGHT VIDEO PREVIEW */}
    //     <div className="md:w-1/2 w-full relative">
    //       <img
    //         src={videoPreview}
    //         alt="Video Preview"
    //         className="w-full h-full rounded-xl shadow-xl"
    //       />

    //       {/* Play Button Overlay (optional) */}
    //       <button className="absolute inset-0 flex items-center justify-center">
    //         <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
    //           <svg
    //             className="w-6 h-6 text-primary"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M6.5 5.5a1 1 0 011.5-.87l6 3.5a1 1 0 010 1.74l-6 3.5A1 1 0 016.5 12.5v-7z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Vector on top-left (hidden on small screens) */}
      <img
        src={vector}
        alt="decorative vector"
        className="absolute hidden md:block"
        style={{
          top: "5.03px",
          left: "9px",
          width: "311px",
          height: "267.5px",
          opacity: 1,
          transform: "rotate(0deg)",
        }}
      />

      {/* Heading */}
      <h2 className="text-[40px] md:text-[50px] font-bold leading-tight text-center pb-20">
        How Our <span className="text-white">AI Resume</span> Works For You
      </h2>

      {/* Content */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
        {/* LEFT TEXT */}
        <div className="md:w-1/2 px-4">
          <div className="flex flex-col gap-4 md:w-[470px]">
            <p className="text-[20px] md:text-[24px] font-bold">
              Smarter Resumes in Seconds with Abroadium’s AI Watch how our AI
              instantly scores, analyzes, and upgrades your resume — no expert
              needed.
            </p>

            <ul className="text-base md:text-[17px] text-[#DCDCDC] leading-relaxed font-semibold list-disc list-inside mt-4">
              <li>No guesswork.</li>
              <li>No delays.</li>
              <li>Just smarter resumes, faster.</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Button
              onClick={handleSignup}
              variant="success"
              size="md"
              className="w-full"
            >
              Explore Now
            </Button>

            <Button
              onClick={handleBlogs}
              variant="success"
              size="md"
              className="w-full"
            >
              Read Expert Blogs
            </Button>
          </div>
        </div>

        {/* RIGHT VIDEO PREVIEW */}
        <div className="md:w-1/2 w-full relative mt-10 md:mt-0">
          <img
            src={videoPreview}
            alt="Video Preview"
            className="w-full h-full rounded-xl shadow-xl"
          />

          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.5 5.5a1 1 0 011.5-.87l6 3.5a1 1 0 010 1.74l-6 3.5A1 1 0 016.5 12.5v-7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
