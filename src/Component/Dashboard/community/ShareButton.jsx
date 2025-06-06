// import React, { useState } from "react";
// import {
//   LinkedinShareButton,
//   TwitterShareButton,
//   FacebookShareButton,
//   WhatsappShareButton,
// } from "react-share";

// const LinkedInShareButton = ({ post }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const shareUrl = `https://abroadium-arbuild-fe.vercel.app/community/${post.id}`;
//   const shareTitle = post.content;

//   const handleCopy = () => {
//     navigator.clipboard.writeText(shareUrl).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   const handleShare = () => {
//     setShowPopup(true);
//     setCopied(false);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };
//   //  console.log(post,"post data");
//   return (
//     <>
//       <button
//         onClick={handleShare}
//         className="text-gray-500 hover:text-green-600 flex items-center"
//       >
//         <i className="fas fa-share mr-2"></i>
//         Share
//       </button>

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
//             <h2 className="text-xl font-semibold mb-4">Share Post</h2>

//             {/* Social Media Buttons */}
//             <div className="flex flex-wrap gap-4 mb-4">
//               <LinkedinShareButton
//                 url={shareUrl}
//                 title={post.content}
//                 summary={post.content}
//                 className="flex items-center"
//               >
//                 <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
//                   LinkedIn
//                 </button>
//               </LinkedinShareButton>

//               <TwitterShareButton
//                 url={shareUrl}
//                 title={shareTitle}
//                 className="flex items-center"
//               >
//                 <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
//                   Twitter
//                 </button>
//               </TwitterShareButton>

//               <FacebookShareButton
//                 url={shareUrl}
//                 quote={shareTitle}
//                 className="flex items-center"
//               >
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Facebook
//                 </button>
//               </FacebookShareButton>

//               <WhatsappShareButton
//                 url={shareUrl}
//                 title={shareTitle}
//                 separator=" - "
//                 className="flex items-center"
//               >
//                 <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//                   WhatsApp
//                 </button>
//               </WhatsappShareButton>
//             </div>

//             {/* Copy Link Section */}
//             <div className="flex items-center mb-4">
//               <input
//                 type="text"
//                 readOnly
//                 value={shareUrl}
//                 className="flex-grow p-2 border rounded-l-md bg-gray-100"
//               />
//               <button
//                 onClick={handleCopy}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
//               >
//                 {copied ? "Copied!" : "Copy"}
//               </button>
//             </div>

//             {/* Close Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={handleClosePopup}
//                 className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LinkedInShareButton;
import React, { useState, useRef, useEffect } from "react";
import { LinkedinShareButton, FacebookShareButton } from "react-share";
import { FaLinkedin, FaFacebookF, FaLink } from "react-icons/fa";

const ShareDropdown = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);
  const shareUrl = `https://abroadium-arbuild-fe.vercel.app/community/${post.id}`;
  const shareTitle = post.content;

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-500 hover:text-green-600 flex items-center"
      >
        <i className="fas fa-share mr-2" />
        Share
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-44 bg-white border rounded-md shadow-md right-0">
          <ul className="py-1">
            <li>
              <LinkedinShareButton
                url={shareUrl}
                title={shareTitle}
                className="w-full"
              >
                <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 w-full">
                  <FaLinkedin
                    className="mr-2 text-blue-700"
                    url={shareUrl}
                    title={post.content}
                    summary={post.content}
                  />
                  LinkedIn
                </button>
              </LinkedinShareButton>
            </li>
            <li>
              <FacebookShareButton
                url={shareUrl}
                quote={shareTitle}
                className="w-full"
              >
                <button className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 w-full">
                  <FaFacebookF
                    className="mr-2 text-blue-600"
                    url={shareUrl}
                    quote={shareTitle}
                  />
                  Facebook
                </button>
              </FacebookShareButton>
            </li>
            <li>
              <button
                onClick={handleCopy}
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 w-full"
              >
                <FaLink className="mr-2 text-gray-600" />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareDropdown;
