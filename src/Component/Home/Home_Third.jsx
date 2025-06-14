import "./Home.css";
import Home_Fourth from "./Home_Fourth";
import image from "../assest/Video_img/video_image.png";
import icon1 from "../assest/Video_img/video_icon1.png";
import icon2 from "../assest/Video_img/video_icon2.gif";
import icon3 from "../assest/Video_img/video_icon3.gif";
import icon4 from "../assest/Video_img/video_icon4.gif";
import image1 from "../assest/Resume_img/resume1.jpg";
import image2 from "../assest/Resume_img/resume3.jpg";
import image3 from "../assest/Resume_img/resume5.jpg";
import cvimage1 from "../assest/CV/cv4.jpg";
import cvimage2 from "../assest/CV/cv2.jpg";
import cvimage3 from "../assest/CV/cv3.jpg";
import cvimage4 from "../assest/CV/cv6.png";
import { useState } from "react";
import Modal from "../Login/Modal";
import Login from "../Login/Login";
import Signup from "../Login/Signup";

function Home_Third() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const token = localStorage.getItem("token");
  const handleBuildResume = () => {
    if (token) {
      window.location.href = "https://builder.abroadium.com/dashboard"; // Redirect to dashboard
    } else {
      setLoginOpen(true); // Open login modal if no token
    }
  };
  return (
    <>
      <div className=" bg-[#e4e0d7] ">
        <div className=" flex justify-center  py-10 mb-3">
          <div className=" md:w-[78%] rounded-xl py-5 px-4 bg-[#0c448f]">
            <div className=" flex flex-col gap-2 justify-evenly md:flex-row  text-white rounded-xl  md:px-5 ">
              <div className=" flex align-middle items-center">
                <img
                  src={image}
                  alt=""
                  className=" h-[350px] w-[380px] rounded-xl shadow-lg shadow-gray-600 "
                />
              </div>
              <div className="flex flex-col font-semibold px-3 gap-5">
                <h1 className=" text-center font-bold text-4xl py-2  text-white">
                  How Our AI Resume Works For You
                </h1>
                <div>
                  <div className="flex items-center hover:border-b-2 shadow-lg rounded-2xl py-2 shadow-gray-600 px-3 hover:border-slate-500 hover:rounded-lg  gap-2">
                    <div>
                      <img src={icon1} className=" h-16 w-16" />
                    </div>
                    <div className=" text-xl">
                      <p>
                        Check Resume Score, In few seconds with just couple of
                        clicks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-lg rounded-2xl px-3 hover:border-b-2 py-2 shadow-gray-600 hover:border-slate-500 hover:rounded-lg gap-2">
                    <div>
                      <img src={icon2} className=" h-16 w-16" />
                    </div>
                    <div className=" text-xl">
                      <p>
                        Our AI does deep checks on your resume & suggest you
                        edits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center shadow-lg rounded-2xl px-3 hover:border-b-2 py-2 shadow-gray-600 hover:border-slate-500 hover:rounded-lg gap-2">
                    <div>
                      <img src={icon3} className=" h-16 w-16" />
                    </div>
                    <div className=" text-xl">
                      <p>Land in Abroad Interviews with our AI technology. </p>
                    </div>
                  </div>
                  <div className="flex items-center shadow-lg rounded-2xl px-3 hover:border-b-2 py-2 shadow-gray-600 hover:border-slate-500 hover:rounded-lg gap-2">
                    <div>
                      <img src={icon4} className=" h-16 w-16" />
                    </div>
                    <div className=" text-xl">
                      <p>
                        Improve Resume with our robust AI, in just few clicks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Home_Video/> */}

        {/* Start Building component */}

        <div className="flex flex-col gap-5 border-2 my-8 rounded-xl bg-white justify-center px-5 py-10 shadow-md shadow-gray-600 md:mx-auto md:w-[78%]">
          <div className="flex flex-col items-center">
            <h1 className=" text-4xl font-bold text-center py-6">
              Explore Our Wide Range Of Trending Templates That Recruiters Loves
              To See
            </h1>
            <div className=" flex gap-2">
              <div className=" text-lg text-left flex flex-col gap-1">
                <div>
                  <i className="fa-solid fa-check border-2 px-1 py-1 rounded-full text-white bg-green-500 "></i>{" "}
                  Chosen & Crafted by Our Experts
                </div>
                <div>
                  <i className="fa-solid fa-check border-2 px-1 py-1 rounded-full text-white bg-green-500 "></i>{" "}
                  Backed by our Technology
                </div>
              </div>

              <div className=" text-lg text-left flex flex-col gap-1 ">
                <div>
                  <i className="fa-solid fa-check border-2 px-1 py-1 rounded-full text-white bg-green-500 "></i>{" "}
                  Powered by our Robust AI{" "}
                </div>
                <div>
                  <i className="fa-solid fa-check border-2 px-1 py-1 rounded-full text-white bg-green-500 "></i>{" "}
                  Get it ready in less than 15 minutes
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
            {[
              {
                src: image1,
                alt: "Assistant Editor Resume Example",
                title: "Create Resume Template",
              },
              {
                src: image2,
                alt: "Farmer Resume Template",
                title: "Simple Resume Template",
              },
              {
                src: image3,
                alt: "Doctor Resume Template",
                title: "Modern Resume Template",
              },
            ].map((template, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden h-96 w-full rounded-xl">
                  <img
                    src={template.src}
                    alt={template.alt}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h1
                  className="font-bold text-xl text-center mt-2"
                  id="homecard"
                >
                  {template.title}
                </h1>
                <button
                  onClick={handleBuildResume}
                  className="absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  id="home_third"
                >
                  Build Your Resume Now
                </button>
              </div>
            ))}
          </div>
          <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
            <Login />
          </Modal>
          <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
            <Signup />
          </Modal>
        </div>

        <Home_Fourth />

        <div className="flex flex-col gap-5 px-5 py-10 md:mx-auto md:w-[70%]">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center py-6">
              Looking For Impressive Cover Letters?
            </h1>
            <p className=" text-lg">
              Explore from our 25+ premium Cover Letters, Which are exclusively
              crafted by our Experts.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 items-center md:flex-row">
            {[
              {
                src: cvimage1,
                alt: "Assistant Editor Resume Example",
                title: "Design 1",
              },
              {
                src: cvimage3,
                alt: "Farmer Resume Template",
                title: "Design 2",
              },
              {
                src: cvimage2,
                alt: "Farmer Resume Template",
                title: "Design 3",
              },
              {
                src: cvimage4,
                alt: "Farmer Resume Template",
                title: "Design 4",
              },
            ].map((template, index) => (
              <div key={index} className="relative group">
                <img
                  src={template.src}
                  alt={template.alt}
                  className=" h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500"
                />
                <h1
                  className="font-bold  text-xl text-center mt-2"
                  id="homecard"
                >
                  {template.title}
                </h1>
                <button
                  onClick={handleBuildResume}
                  className="absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  id="home_third"
                >
                  Create Your CV{" "}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Third;
