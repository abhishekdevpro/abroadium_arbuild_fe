// // import React from 'react'
// // import './Home.css'

// // function subscription() {
// //   return (
// //     <>

// //      <div>
// //       <div className=' bg-slate-50'>
// //         <h1 className=' text-center font-bold text-3xl py-5'>Want To Supercharge Your Career Growth With Our AI Tool?</h1>
// //         <div className=' px-2  md:mx-auto md:w-[600px] py-3'>Get started at no cost to tap into Abroadium's premium features and power up your job search. Experience our amazing AI enabled easy to use dashboard.</div>
// //         <div className=' px-2 flex justify-center'>

// //             <div className=' border-t-4 border-t-gray-900 shadow-xl shadow-gray-700 rounded-lg px-3 py-3'>
// //               <h1 className=' font-bold text-xl'>Abroadium's AI Resume</h1>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "></i>AI Score</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Parsing</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Resume Building</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Enhancer</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Match & Apply</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Skill Test</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Skill Badges</div>
// //                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>& More</div>
// //             </div>

// //         </div>
// //         <div className=' flex justify-center mt-6 mb-8'>
// //         <button className=' px-3 py-3 rounded-2xl font-semibold text-white shadow-xl shadow-slate-800' id="home_third">Get Started For Free</button>
// //         </div>

// //         </div>
// //         </div>
// //     </>
// //   )
// // }

// // export default subscription

// import { useState } from "react";
// // import axios from 'axios';
// import { Link } from "react-router-dom";
// import ResumeUploadForm from "../utility/UploadPopUp";
// // import React from 'react'
// // import Home_third from './Home_third';
// // import Link from 'next/link';

// function PaymentPlans() {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   // Fixed price

//   const handleCloseModal = () => setShowModal(false);
//   const handleShowModal = () => setShowModal(true);

//   // const handlePayment = (e) => {
//   //   e.preventDefault();
//   //   const amount=269;

//   //   const payload = {
//   //     amount,
//   //     ResumeId: "9CN06189KH259320999",
//   //     Name: name,
//   //     Email: email,
//   //     Phone: phone,
//   //   };

//   //   axios.post('https://api.resumeintellect.com/api/user/paypal/create-payment', payload, {
//   //     headers: { 'Content-Type': 'application/json' },
//   //   })
//   //   .then(response => {
//   //     const data = response.data;
//   //     if (data && data.data) {
//   //       // Redirect to the PayPal URL provided in the response
//   //       window.location.href = data.data;
//   //     }
//   //   })
//   //   .catch(error =>
//   //       console.error('Payment Error:', error));

//   //   handleCloseModal(); // Close the modal after submitting the form
//   // };

//   const [showModal1, setShowModal1] = useState(false);
//   const [name1, setName1] = useState("");
//   const [email1, setEmail1] = useState("");
//   const [phone1, setPhone1] = useState("");
//   // Fixed price

//   const handleCloseModal1 = () => setShowModal1(false);
//   const handleShowModal1 = () => setShowModal1(true);

//   // const handlePayment1 = (e) => {
//   //   e.preventDefault();
//   //   const amount=349;

//   //   const payload = {
//   //     amount,
//   //     ResumeId: "9CN06189KH259320999",
//   //     Name: name1,
//   //     Email: email1,
//   //     Phone: phone1,
//   //   };

//   //   axios.post('https://api.resumeintellect.com/api/user/paypal/create-payment', payload, {
//   //     headers: { 'Content-Type': 'application/json' },
//   //   })
//   //   .then(response => {
//   //     const data = response.data;
//   //     if (data && data.data) {
//   //       // Redirect to the PayPal URL provided in the response
//   //       window.location.href = data.data;
//   //     }
//   //   })
//   //   .catch(error =>
//   //       console.error('Payment Error:', error));

//   //   handleCloseModal1(); // Close the modal after submitting the form
//   // };

//   return (
//     <>
//       <div className="  ">
//         <section className="bg-gray-800 dark:bg-white/100">
//           <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//             <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
//               <h2
//                 className="mb-4 text-4xl tracking-tight font-extrabold rounded-2xl text-white border p-3"
//                 style={{ backgroundColor: "#002a48" }}
//               >
//                 Choose a Plan, Which is right for you?
//               </h2>
//             </div>
//             <div className="space-y-4 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
//               {/* Pricing Card */}

//               {/* Pricing Card */}
//               <div
//                 className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
//                 style={{ backgroundColor: "#002a48" }}
//               >
//                 <h3 className="mb-4 text-2xl font-bold">Resume Builder</h3>
//                 <p className="font-light text-white sm:text-lg dark:text-white">
//                   Relevant for automation &amp; one time download.
//                 </p>
//                 <div className="flex justify-center items-baseline my-8 gap-3">
//                   <span className="text-white dark:text-white">Starting </span>
//                   <span className="mr-2 text-4xl font-extrabold"> ₹0</span>
//                 </div>
//                 {/* List */}
//                 <ul role="list" className="mb-8 space-y-4 text-left">
//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {/* <span>Create optimized resumes</span> */}
//                     <span>Use our AI Enabled suggestions</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Create optimized resumes</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Unlimited resume edits</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {/* <span>Copy and paste content from site</span> */}
//                     <span>Live Resume scores</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {/* <span>Unlimited resume edits</span> */}
//                     <span>Change save resume as pdf</span>
//                   </li>
//                   {/* <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>Save resume as pdf and docs</span>
//                 </li> */}
//                   <li className="flex items-center space-x-3">
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Download fully formatted Resume</span>
//                   </li>
//                 </ul>
//                 <Link
//                   href="/login2"
//                   className="text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
//                 >
//                   Get started for Free
//                 </Link>
//               </div>
//               {/* Pricing Card */}
//               <div
//                 className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
//                 style={{ backgroundColor: "#002a48" }}
//               >
//                 <h3 className="mb-4 text-2xl font-bold">
//                   Resume By Certified Experts
//                 </h3>
//                 <p className="font-light text-white sm:text-lg dark:text-white">
//                   Relevant for higher career goals
//                 </p>
//                 <div className="flex justify-center items-baseline my-8 gap-3">
//                   <span className="text-white dark:text-white">Starting </span>

//                   <p>
//                     {" "}
//                     <span className=" text-4xl font-extrabold">
//                       {" "}
//                       ₹ 1499{" "}
//                     </span>{" "}
//                     <span className="text-white dark:text-white">/Resume</span>
//                   </p>
//                 </div>
//                 {/* List */}
//                 <ul role="list" className="mb-8 space-y-4 text-left">
//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Create optimized resumes</span>
//                   </li>

//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Receive resume in pdf and docs</span>
//                   </li>

//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Cover letter included</span>
//                   </li>

//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>3 revisions included</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     {/* <span>Speak one on one with writer</span> */}
//                     <span>Download fully formatted Resume</span>
//                   </li>
//                   <li className="flex items-center space-x-3">
//                     {/* Icon */}
//                     <svg
//                       className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>Final Delivery 1 week</span>
//                   </li>
//                 </ul>
//                 <button
//                   className="text-white bg-primary-600 border hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
//                   // onClick={handleShowModal}
//                   onClick={() => setIsFormOpen(true)}
//                 >
//                   Get started
//                 </button>
//               </div>

//               {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                   <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
//                     <h2 className="text-xl font-semibold mb-4 text-center text-white">
//                       <strong className="text-lg">🛒 Checkout </strong>
//                       <br /> Payment Details
//                     </h2>
//                     <form>
//                       <div className="mb-4">
//                         <label className="block text-white mb-2">👨🏻‍💼Name</label>
//                         <input
//                           type="text"
//                           className="w-full px-3 py-2 border border-gray-300 bg-blue- rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-white mb-2">
//                           📧 Email
//                         </label>
//                         <input
//                           type="email"
//                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-white mb-2">☎️Phone</label>
//                         <input
//                           type="tel"
//                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="mb-6">
//                         <label className="block text-white mb-2">Amount </label>
//                         <input
//                           type="number"
//                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={"1499"}
//                           readOnly
//                         />
//                       </div>
//                       <div className="flex justify-between">
//                         <button
//                           type="button"
//                           className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
//                           onClick={handleCloseModal}
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               )}

//               {showModal1 && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                   <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
//                     <h2 className="text-xl font-semibold mb-4 text-center text-white">
//                       🛒 Checkout <br /> Payment Details
//                     </h2>

//                     <form>
//                       <div className="mb-4">
//                         <label className="block text-white mb-2">👨🏻‍💼Name</label>
//                         <input
//                           type="text"
//                           className="w-full px-3 py-2 border border-gray-300 bg-blue- rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={name1}
//                           onChange={(e) => setName1(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-white mb-2">
//                           📧 Email
//                         </label>
//                         <input
//                           type="email"
//                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={email1}
//                           onChange={(e) => setEmail1(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label className="block text-white mb-2">☎️Phone</label>
//                         <input
//                           type="tel"
//                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={phone1}
//                           onChange={(e) => setPhone1(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="mb-6">
//                         <label className="block text-white mb-2">Amount </label>
//                         <input
//                           type="number"
//                           className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                           value={"349"}
//                           readOnly
//                         />
//                       </div>
//                       <div className="flex justify-between">
//                         <button
//                           type="button"
//                           className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
//                           onClick={handleCloseModal1}
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-700"
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               )}

//               {/*
//             <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
//              style={{backgroundColor:"#002a48"}}
//             >
//               <h3 className="mb-4 text-2xl font-bold"> French English Combo</h3>
//               <p className="font-light text-white sm:text-lg dark:text-white">Best for large scale uses and extended redistribution rights.</p>
//               <div className="flex justify-center items-baseline my-8">
//                 <span className="mr-2 text-4xl font-extrabold"> ₹349</span>
//                 <span className="text-white dark:text-white">/Resume</span>
//               </div>

//               <ul role="list" className="mb-8 space-y-4 text-left">
//                 <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>Create optimized resumes</span>
//                 </li>

//                 <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>Receive resume in pdf and docs</span>
//                 </li>

//                 <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>Cover letter included</span>
//                 </li>

//                 <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>3 revisions included</span>
//                 </li>
//                 <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>Speak one on one with writer</span>
//                 </li>
//                 <li className="flex items-center space-x-3">

//                   <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
//                   <span>Final Delivery 1 week</span>
//                 </li>
//               </ul>
//               <button

//                 className="text-white bg-primary-600 border hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
//                 onClick={handleShowModal1}
//                >
//                 Get started</button>
//             </div> */}
//             </div>
//           </div>
//         </section>
//       </div>
//       <ResumeUploadForm
//         isOpen={isFormOpen}
//         onClose={() => setIsFormOpen(false)}
//       />
//     </>
//   );
// }

// export default PaymentPlans;

// import React from 'react'
// import './Home.css'

// function subscription() {
//   return (
//     <>

//      <div>
//       <div className=' bg-slate-50'>
//         <h1 className=' text-center font-bold text-3xl py-5'>Want To Supercharge Your Career Growth With Our AI Tool?</h1>
//         <div className=' px-2  md:mx-auto md:w-[600px] py-3'>Get started at no cost to tap into Abroadium's premium features and power up your job search. Experience our amazing AI enabled easy to use dashboard.</div>
//         <div className=' px-2 flex justify-center'>

//             <div className=' border-t-4 border-t-gray-900 shadow-xl shadow-gray-700 rounded-lg px-3 py-3'>
//               <h1 className=' font-bold text-xl'>Abroadium's AI Resume</h1>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500 "></i>AI Score</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Parsing</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Resume Building</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Enhancer</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Match & Apply</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>AI Skill Test</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>Skill Badges</div>
//                 <div className=' flex gap-2 items-center font-medium'><i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>& More</div>
//             </div>

//         </div>
//         <div className=' flex justify-center mt-6 mb-8'>
//         <button className=' px-3 py-3 rounded-2xl font-semibold text-white shadow-xl shadow-slate-800' id="home_third">Get Started For Free</button>
//         </div>

//         </div>
//         </div>
//     </>
//   )
// }

// export default subscription

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResumeUploadForm from "../utility/UploadPopUp";
import PricingSection from "../Pricing/PricingPlan";

function PaymentPlans() {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="  ">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2
                className="mb-4 text-4xl tracking-tight font-extrabold rounded-2xl text-white border p-3 bg-[#0c448f]"
                // style={{ backgroundColor: "#002a48" }}
              >
                Choose a Plan, Which is right for you?
              </h2>
            </div>
            <PricingSection />
            <div className="text-center">
              <button
                className="mt-6 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 hover:shadow-xl hover:shadow-[#0c448f] bg-[#0c448f] "
                onClick={() => navigate("/pricing")}
              >
                View all plans
              </button>
            </div>
          </div>
        </section>
      </div>
      <ResumeUploadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}

export default PaymentPlans;
