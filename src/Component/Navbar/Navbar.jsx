// import React, { useState, useContext, useEffect } from 'react';
// import logo from './logo.png';
// import './Navbar.css';
// import '../Home/Home.css'
// import { Link, useNavigate } from 'react-router-dom';
// import Modal from '../Login/Modal';
// import Login from '../Login/Login'
// import Signup from '../Login/Signup';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);
//   const [issignupOpen, setsignupOpen] = useState(false);
  

//   return (
//     <>
//     <nav className="bg-white border-b border-gray-200" id='navbg'>
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a to="/" className="">
//                 <img src={logo} alt='logo' className=' w-full h-14'/>
//             </a>
//           </div>
//           <div className="flex items-center">
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               {/* <Link to="/slide/0" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link> */}
//               <Link to="/slide/1" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
//               {/* <Link to="/slide/2" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link> */}
//               <Link to="https://blog.abroadium.com/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
//               <Link to="https://blog.abroadium.com/about-us/" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
//               {/* <Link to="/dashboard" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Doashboard</Link> */}
//               {/* <Link to="https://blog.abroadium.com/" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Blog</Link> */}
//               {/* <Link to="/login" className="text-white px-2 py-2 text-lg font-semibold  rounded-xl " id='home_fourth'>Log in</Link> */}
//               <button
//           className=" text-black font-semibold px-6 py-2 rounded-full"
//           onClick={() => setLoginOpen(true)}
//           style={{backgroundColor:"#F2931C"}}
//         >
//           Login
//         </button>
              
//               <button
//           className=" text-black font-semibold px-6 py-2 rounded-full"
//           onClick={() => setsignupOpen(true)}
//           style={{backgroundColor:"#F2931C"}}
//         >
//           Signup
//         </button>
        
//             </div>
//              <div className="flex sm:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               </button>
//             </div> 
            
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resume</Link>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">CV</Link>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</Link>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Advice</Link>
//               <button
//           className=" text-white px-4 py-2 rounded-md"
//           onClick={() => setLoginOpen(true)}
//         >
//           Login
//         </button>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Contact Us</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//     <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
//         <Login />
//       </Modal>
//       <Modal isOpen={issignupOpen} onClose={() => setsignupOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import logo from './logo.png';
import Modal from '../Login/Modal';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import './Navbar.css';
import axios from 'axios';


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);
//   const [isSignupOpen, setSignupOpen] = useState(false);
//   const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if token exists in local storage
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     // Remove token from local storage
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/'); // Redirect to home page
//   };

//   return (
//     <>
//       <nav className="bg-white border-b border-gray-200" id='navbg'>
//         <div className="mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             {/* Logo Section */}
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/" className="">
//                 <img src={logo} alt='logo' className='w-full h-14'/>
//               </Link>
//             </div>

//             {/* Navigation Links and Login/Profile Section */}
//             <div className="flex items-center">
//               <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
//                 {/* Navigation Links */}
//                 <Link to="/slide/1" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
//                 <Link to="https://blog.abroadium.com/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
//                 <Link to="https://blog.abroadium.com/about-us/" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>

//                 {/* Conditional Rendering: Login/Signup or Profile */}
//                 {!isLoggedIn ? (
//                   <>
//                     <button
//                       className="text-black font-semibold px-6 py-2 rounded-full"
//                       onClick={() => setLoginOpen(true)}
//                       style={{backgroundColor:"#F2931C"}}
//                     >
//                       Login
//                     </button>
//                     <button
//                       className="text-black font-semibold px-6 py-2 rounded-full"
//                       onClick={() => setSignupOpen(true)}
//                       style={{backgroundColor:"#F2931C"}}
//                     >
//                       Signup
//                     </button>
//                   </>
//                 ) : (
//                   <div className="relative">
//                     <button 
//                       onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
//                       className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
//                     >
//                       <User className="w-6 h-6" />
//                     </button>

//                     {/* Profile Dropdown */}
//                     {isProfileDropdownOpen && (
//                       <div 
//                         className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 
//                         animate-slide-down origin-top-right transition-all duration-300 ease-out"
//                       >
//                         <div className="py-1">
//                           <Link 
//                             to="https://builder.abroadium.com/dashboard" 
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//                             onClick={() => setProfileDropdownOpen(false)}
//                           >
//                             <LayoutDashboard className="mr-2 w-4 h-4" /> Dashboard
//                           </Link>
//                           {/* <Link 
//                             to="/" 
//                             className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//                             onClick={() => setProfileDropdownOpen(false)}
//                           >
//                             <User className="mr-2 w-4 h-4" /> Profile
//                           </Link> */}
//                           <button 
//                             onClick={handleLogout}
//                             className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200"
//                           >
//                             <LogOut className="mr-2 w-4 h-4" /> Logout
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="flex sm:hidden">
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="text-white hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="sm:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 <Link to="/slide/1" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">AI Resume Builder</Link>
//                 <Link to="https://blog.abroadium.com/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resources</Link>
//                 <Link to="https://blog.abroadium.com/about-us/" target='_blank' className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">About Us</Link>
                
//                 {/* Mobile Login/Profile Section */}
//                 {!isLoggedIn ? (
//                   <>
//                     <button
//                       className="text-white px-4 py-2 rounded-md"
//                       onClick={() => setLoginOpen(true)}
//                     >
//                       Login
//                     </button>
//                     <button
//                       className="text-white px-4 py-2 rounded-md"
//                       onClick={() => setSignupOpen(true)}
//                     >
//                       Signup
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <Link to="/dashboard" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">
//                       Dashboard
//                     </Link>
//                     <Link to="/profile" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">
//                       Profile
//                     </Link>
//                     <button 
//                       onClick={handleLogout}
//                       className="text-red-500 hover:text-red-600 block px-3 py-2 rounded-md text-base font-semibold"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Login and Signup Modals */}
//       <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
//         <Login />
//       </Modal>
//       <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { User, LayoutDashboard, LogOut } from 'lucide-react';
// import Modal from './Modal'; // Import your Modal component
// import Login from './Login'; // Import your Login component
// import Signup from './Signup'; // Import your Signup component
// import logo from './logo.png'; // Replace with the path to your logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
// console.log(token);
    if (token) {
      // Call the API to verify the user's profile
      axios
        .get('https://api.sentryspot.co.uk/api/jobseeker/user-profile', {
          headers: {
            Authorization: `${token}`, // Add token to header
          },
        })
        .then((response) => {
          console.log('User profile:', response.data); // Handle response data
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized
            handleLogout(); // Automatically log out
          } else {
            console.error('API error:', error);
          }
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home page
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200" id="navbg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="">
                <img src={logo} alt="logo" className="w-full h-14" />
              </Link>
            </div>

            {/* Navigation Links and Login/Profile Section */}
            <div className="flex items-center">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                {/* Navigation Links */}
                <Link
                  to="/slide/1"
                  className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  AI Resume Builder
                </Link>
                <Link
                  to="https://blog.abroadium.com/"
                  className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  Resources
                </Link>
                <Link
                  to="https://blog.abroadium.com/about-us/"
                  target="_blank"
                  className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  About Us
                </Link>

                {/* Conditional Rendering: Login/Signup or Profile */}
                {!isLoggedIn ? (
                  <>
                    <button
                      className="text-black font-semibold px-6 py-2 rounded-full"
                      onClick={() => setLoginOpen(true)}
                      style={{ backgroundColor: '#F2931C' }}
                    >
                      Login
                    </button>
                    <button
                      className="text-black font-semibold px-6 py-2 rounded-full"
                      onClick={() => setSignupOpen(true)}
                      style={{ backgroundColor: '#F2931C' }}
                    >
                      Signup
                    </button>
                  </>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setProfileDropdownOpen(!isProfileDropdownOpen)
                      }
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
                    >
                      <User className="w-6 h-6" />
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileDropdownOpen && (
                      <div
                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 
                        animate-slide-down origin-top-right transition-all duration-300 ease-out"
                      >
                        <div className="py-1">
                          <Link
                            to="https://builder.abroadium.com/dashboard"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setProfileDropdownOpen(false)}
                          >
                            <LayoutDashboard className="mr-2 w-4 h-4" />{' '}
                            Dashboard
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200"
                          >
                            <LogOut className="mr-2 w-4 h-4" /> Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/slide/1"
                  className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold"
                >
                  AI Resume Builder
                </Link>
                <Link
                  to="https://blog.abroadium.com/"
                  className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold"
                >
                  Resources
                </Link>
                <Link
                  to="https://blog.abroadium.com/about-us/"
                  target="_blank"
                  className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold"
                >
                  About Us
                </Link>

                {/* Mobile Login/Profile Section */}
                {!isLoggedIn ? (
                  <>
                    <button
                      className="text-white px-4 py-2 rounded-md"
                      onClick={() => setLoginOpen(true)}
                    >
                      Login
                    </button>
                    <button
                      className="text-white px-4 py-2 rounded-md"
                      onClick={() => setSignupOpen(true)}
                    >
                      Signup
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 hover:text-red-600 block px-3 py-2 rounded-md text-base font-semibold"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login and Signup Modals */}
      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <Login />
      </Modal>
      <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
};

export default Navbar;
