import React from "react";
import videoPreview from "../../assets/video-banner.png"; // replace with your actual image

export default function AIResumeVideoSection() {
  return (
    <section className="bg-primary text-white px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center pb-20">
        How Our <span className="text-white">AI Resume</span> Works For You
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-10">
        {/* LEFT TEXT */}

        <div className="md:w-1/2 space-y-6">
          <div className="flex flex-col gap-4 md:w-[500px]">
            <p className="text-xl font-bold">
              Check Resume Score, in few seconds with just couple of clicks.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book, it has survived.
              <br />
              When an unknown printer took a galley offer area.
            </p>
          </div>
        </div>

        {/* RIGHT VIDEO PREVIEW */}
        <div className="md:w-1/2 w-full relative">
          <img
            src={videoPreview}
            alt="Video Preview"
            className="w-full h-full rounded-xl shadow-xl"
          />

          {/* Play Button Overlay (optional) */}
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
