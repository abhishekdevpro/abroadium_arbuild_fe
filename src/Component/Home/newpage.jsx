export default function ResumeLandingPage() {
  return (
    <div className="bg-[#041122] text-white font-sans">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get Hired.
            <br />
            Globally.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            AI-crafted resumes built <br /> to pass real recruiter scurhy.
          </p>
          <button className="bg-[#FF5722] hover:bg-[#e44a12] text-white font-semibold px-6 py-3 rounded-md transition">
            Create Free Resume
          </button>
          <div className=" mt-4">
            <h2 className="text-xl font-semibold uppercase tracking-wider text-gray-400 mb-3">
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
            src="/resume-laptop.png"
            alt="Resume Preview"
            className="object-contain max-h-full"
          />
        </div>
      </div>
      <div className="bg-[#020d1c] pt-5 pb-5">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center pt-4 pb-4">
          Powered by Al. Backed
          <br />
          by Career Experts.
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto ">
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-file text-blue-400 border-2 px-3 py-3 rounded-full mb-4"></i>
            <p className="text-lg font-sm text-white">
              Auto-tailored for every job
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-check text-pink-300 border-2 px-3 py-3 rounded-full mb-4"></i>
            <p className="text-lg font-sm text-white">ATS-friendly templates</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-user text-fuchsia-400 border-2 px-3 py-3 rounded-full mb-4"></i>
            <p className="text-lg font-sm text-white">
              Industry-specific keywords
            </p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-comments text-blue-400 border-2 px-3 py-3 rounded-full mb-4"></i>
            <p className="text-lg font-sm text-white">
              Feedback from professionals
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0a1b31] py-16 px-4  flex justify-around">
        <div>
          <blockquote className="text-xl md:text-2xl font-medium mb-6 max-w-3xl mx-auto">
            “The AI suggestions were spot on.
            <br /> Landed a job within weeks.”
          </blockquote>
          <div>
            <p className="font-semibold">Sarah W.</p>
            <p className="text-sm text-gray-400">Marketing Manager</p>
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
            <p className="text-sm text-gray-400">Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
