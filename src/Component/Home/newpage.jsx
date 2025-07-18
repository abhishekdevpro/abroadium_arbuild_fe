import NewWriter from "./newwriter";
// import newimage from "../assest/newpage-image.png";
export default function ResumeLandingPage() {
  return (
    <div className="bg-[#e4e0d7]  text-black ">
      {/* <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get Hired.
            <br />
            Globally.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            AI-crafted resumes built <br /> to pass real recruiter scurhy.
          </p>
          <button className="text-white px-2 py-2 text-xl rounded-lg font-semibold hover:bg-green-600 hover:shadow-xl hover:shadow-[#0c448f] bg-[#0c448f]">
            Create Free Resume
          </button>
          <div className=" mt-4">
            <h2 className="text-xl font-semibold uppercase tracking-wider text-[#0c448f] mb-3">
              How It Works
            </h2>
            <p className="text-2xl md:text-3xl font-medium">
              Answer questions. Let
              <br />
              AI craft your resume.
              <br />
              Impressed at the results.
            </p>
          </div>
        </div>
        <div className="relative h-96 md:h-full flex items-center justify-center">
          <img
            src={newimage}
            alt="Resume Preview"
            className="h-[500px] w-full"
          />
        </div>
      </div> */}
      <div className=" pt-5 pb-5">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center pt-4 pb-4 text-black">
          Powered by Al. Backed
          <br />
          by Career Experts.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto ">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-file text-blue-400 border-2 border-black px-3 py-3 rounded-full mb-4"></i>
            <p className="text-lg font-sm text-black">
              Auto-tailored for every job
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-check text-pink-300 border-2 px-3 py-3 rounded-full mb-4 border-black "></i>
            <p className="text-lg font-sm text-black">ATS-friendly templates</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-user text-fuchsia-400 border-2 px-3 py-3 rounded-full mb-4 border-black "></i>
            <p className="text-lg font-sm text-black">
              Industry-specific keywords
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-comments text-blue-400 border-2 px-3 py-3 rounded-full mb-4 border-black "></i>
            <p className="text-lg font-sm text-black">
              Feedback from professionals
            </p>
          </div>
        </div>
      </div>
      <div className=" py-16 px-4  flex justify-around">
        <div>
          <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto">
            “The AI suggestions were spot on.
            <br /> Landed a job within weeks.”
          </blockquote>
          <div>
            <p className="font-semibold">Sarah W.</p>
            <p className="text-sm text-[#0c448f]">Marketing Manager</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
            <img
              src="/sarah-avatar.png"
              alt="Sarah W."
              className="w-16 h-16 object-cover"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">Sarah W.</p>
            <p className="text-sm text-[#0c448f]">Marketing Manager</p>
          </div>
        </div>
      </div>
      <div>
        <NewWriter />
      </div>
    </div>
  );
}
