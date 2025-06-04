// // import React from 'react'
// import "./Home.css";
// import Home_Second from "./Home_Second";
// // import ImageSlider from './Image_slider'
// import Home_Image from "./Home_Image";
// // import Slider from './Slider'
// import Slider_details from "./Slider_details";
// import Modal from "../Login/Modal";
// import Login from "../Login/Login";
// import Signup from "../Login/Signup";
// import { useState } from "react";

// function Home_first() {
//   const [isLoginOpen, setLoginOpen] = useState(false);
//   const [isSignupOpen, setSignupOpen] = useState(false);
//   const token = localStorage.getItem("token")
//   return (
//     <>
//       <div className=" bg-gray-100">
//         <div className=" py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row">
//           <div className="  px-3 py-3 md:w-[500px]">
//             <div className=" flex flex-col gap-4 ">
//               <div className=" font-extrabold text-5xl ">
//                 Abroadiums AI Powered Resume Tool, Is Live NOW
//               </div>
//               <div className=" text-lg font-medium text-slate-700">
//                 Resume Score, Enhanced Resume & much more. Now Apply Job with
//                 confidence with our all in one solution under one roof.
//               </div>
//               <div className=" flex flex-wrap gap-4">
//                 <button
//                    onClick={() => setSignupOpen(true)}
//                   className="  px-6 py-2 text-lg rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500"
//                   id="home_fourth"
//                 >
//                   {" "}
//                   Sign Up! Its 100% Free!
//                 </button>
//                 <button
//                   onClick={() => setLoginOpen(true)}
//                   className=" text-white text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500 "
//                   id="home_third"
//                 >
//                   {" "}
//                   Build your Resume
//                 </button>
//               </div>
//               {/* <div className=' flex flex-wrap'>EXCELLENT <img src='https://www.resume-now.com/sapp/themes/resumenow/img/stars-4.5.svg' className=' h-6 w-16'/> rating 9212 reviews on <img src='https://www.resume-now.com/sapp/themes/resumenow/img/trustpilot-black.png' className=' h-6 w-16'/></div> */}
//               <div className=" font-bold text-base">
//                 <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                 <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                 <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                 <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                 <i className="fa-solid fa-star text-yellow-500"></i> Reviews
//                 Certified by Recruiters & Admired by Jobseekers
//               </div>
//               <div className=" flex items-center align-middle ">
//                 <div className=" text-lg font-bold">As Featured on</div>
//                 <div>
//                   <img
//                     src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg"
//                     className=" h-24 w-24"
//                   />
//                 </div>
//                 {/* <div><img src='https://logowik.com/content/uploads/images/usa-today.jpg' className=' h-24 w-24'/></div> */}
//                 <div>
//                   <img
//                     src="https://parspng.com/wp-content/uploads/2021/09/instagram-7.png"
//                     className=" h-16 w-full"
//                   />
//                 </div>
//               </div>
//               {/* <img src='https://www.resume-now.com/sapp/themes/resumenow/img/exp/rs-brands-d.png' className=' h-7 md:h-10 rounded-xl'/> */}
//             </div>
//           </div>
//           <div className="  px-6 py-3" id="bghome">
//             <Home_Image />
//             {/* <img src='https://www.resume-now.com/sapp/uploads/2023/11/resume-example-senior-financial-analyst.svg' className=' h-96 w-full rounded-lg '/> */}
//           </div>
//         </div>
//       </div>

//       <Slider_details />

//       <Home_Second />
//       <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
//         <Login />
//       </Modal>
//       <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// }

// export default Home_first;
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";
import Home_Second from "./Home_Second";
import Home_Image from "./Home_Image";
import Slider_details from "./Slider_details";
import Modal from "../Login/Modal";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import ResumeLandingPage from "./newpage";
import linkedin from "./images/linkedin.png";
function Home_first() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Initialize navigate

  const handleBuildResume = () => {
    if (token) {
      window.location.href = "https://builder.abroadium.com/dashboard"; // Redirect to dashboard
    } else {
      setLoginOpen(true); // Open login modal if no token
    }
  };

  return (
    <>
      <div className="bg-[#e4e0d7] ">
        <div className="py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row">
          <div className="px-3 py-3 md:w-[500px]">
            <div className="flex flex-col gap-4">
              <div className="font-extrabold text-5xl ">
                Abroadiums AI Powered Resume Tool, Is Live NOW
              </div>
              <div className="text-lg font-medium text-slate-700">
                Resume Score, Enhanced Resume & much more. Now Apply Job with
                confidence with our all-in-one solution under one roof.
              </div>
              <div className="flex flex-wrap gap-4">
                {!token && ( // Hide sign-up button if token exists
                  <button
                    onClick={() => setLoginOpen(true)}
                    className="text-white font-semibold px-4 py-2 rounded-lg bg-green-600 hover:shadow-xl hover:shadow-green-600 hover:bg-[#0c448f]"
                  >
                    Sign Up! It s 100% Free!
                  </button>
                )}
                <button
                  onClick={handleBuildResume}
                  className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 hover:shadow-xl hover:shadow-[#0c448f] bg-[#0c448f]"
                >
                  Build your Resume
                </button>
              </div>
              <div className="font-bold text-base">
                <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                <i className="fa-solid fa-star text-yellow-500"></i> Reviews
                Certified by Recruiters & Admired by Jobseekers
              </div>
              <div className="flex items-center align-middle">
                <div className="text-lg font-bold">As Featured on</div>
                <div>
                  {/* <img
                    src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg"
                    className="h-24 w-24"
                  /> */}
                  <img
                    // src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg"
                    src={linkedin}
                    className="h-24 w-24"
                  />
                </div>
                <div>
                  <img
                    src="https://parspng.com/wp-content/uploads/2021/09/instagram-7.png"
                    className="h-16 w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-3" id="bghome">
            <Home_Image />
          </div>
        </div>
      </div>
      <div className="">
        <ResumeLandingPage />
      </div>
      <Slider_details />
      <Home_Second />

      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <Login />
      </Modal>
      <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
}

export default Home_first;
