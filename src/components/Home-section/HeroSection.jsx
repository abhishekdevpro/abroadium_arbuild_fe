// import React from "react";
// import Button from "../../UI/Button.jsx";
// import heroImage from "../../assets/banner-right-side-2.png"; // your resume preview
// import background from "../../assets/banner-back.jpg"; // your background image
// import Navbar from "../../UI/Navbar.jsx";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-[#f5f8ff] overflow-hidden bg-no-repeat bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${background})`,
//       }}
//     >
//         <Navbar />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
//         {/* LEFT CONTENT */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
//             Abroadiums <span className="text-primary text-[62px] font-extrabold">AI</span> Powered <br />
//             Resume Tool, Is Live NOW
//           </h1>
//           <p className="text-gray-600 mt-4 max-w-lg">
//             Resume Score, Enhanced Resume & much more. Now Apply Job with confidence
//             with our all-in-one solution under one roof.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
//             <Button variant="success">Sign Up! It’s 100% Free!</Button>
//             <Button variant="primary">Build your Resume</Button>
//           </div>

//           <div className="flex items-center gap-3 mt-8 justify-center md:justify-start">
//             <p className="text-sm font-medium text-black">Excellent</p>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Trustpilot_Logo.svg/2560px-Trustpilot_Logo.svg.png"
//               alt="trustpilot"
//               className="h-5"
//             />
//             <p className="text-sm text-gray-600">
//               1,432 reviews on{" "}
//               <span className="text-green-600 font-semibold">Trustpilot</span>
//             </p>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="md:w-1/2 relative z-10">
//           <img
//             src={heroImage}
//             alt="resume preview"
//             className="relative z-20 rounded-lg shadow-xl"
//           />
//           {/* Decorative Circles */}
          
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import Button from "../../UI/Button.jsx";
import heroImage from "../../assets/landing-hero.png"; // your resume preview
import background from "../../assets/banner-back.jpg"; // your background image
import Navbar from "../../UI/Navbar.jsx";
import group from "../../assets/Group.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#f5f8ff] overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Navbar */}
      <Navbar />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 h-full flex items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
             
              <span className="text-primary text-md md:text-[62px] font-extrabold"> Abroadiums{" "} AI {" "}Powered </span>
              <br />
              Resume Tool, Is Live NOW
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-[17px]">
              Resume Score, Enhanced Resume & much more. Now Apply Job with
              confidence with our all-in-one solution under one roof.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start py-8">
              <Button variant="success" size="md">
                Sign Up! It’s 100% Free!
              </Button>
              <Button variant="primary" size="md">
                Build your Resume
              </Button>
            </div>

            {/* Trustpilot */}
            <div className="flex items-center gap-3 pt-4 justify-center md:justify-start">
              <p className="text-[19px] font-medium text-black">Excellent</p>
              <img
                src={group}
                alt="trustpilot"
                className="h-8"
              />
              <p className="text-[19px] font-medium">
                1,432 reviews on{" "}
                <span className="text-green-600 text-[19px] font-medium">Trustpilot</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 h-full flex items-center justify-center relative z-10">
          <img
            src={heroImage}
            alt="resume preview"
            className="relative z-20 rounded-xl shadow-xl max-w-full md:max-w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
