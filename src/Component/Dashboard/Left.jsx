// import { useState } from 'react';
// import './Home.css';
// import { Link, useLocation } from 'react-router-dom';

// function Left() {
//   const location = useLocation();
//   const [activeTab, setActiveTab] = useState(location.pathname);
//   // const token = localStorage.getItem('token')
//   const handleTabClick = (path) => {
//     setActiveTab(path);
//   };

//   return (
//     <div className="hidden md:flex md:flex-col md:w-[23%] md:justify-start md:p-5" id="bgnavbar">
//       <nav>
//         <div className="flex flex-col">
//         <Link 
//             to="/dashboard" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/dashboard' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
//             onClick={() => handleTabClick('/dashboard')}
//           >
//             <i className="fa-solid fa-book-open-reader p-3 text-purple-500"></i>Dashboard
//           </Link>
//           <Link 
//             to="" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/uploadresume' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
//             onClick={() => handleTabClick('/uploadresume')}
//           >
//             <i className="fa-solid fa-upload p-3 text-purple-500"></i>Upload Resume
//           </Link>
//           <Link 
//             to={`/resume`}
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/resume' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
//             onClick={() => handleTabClick('/resume')}
//           >
//             <i className="fa-solid fa-file p-3 text-purple-500"></i>AI Resume Builder
//           </Link>
//           <Link 
//             to="https://blog.abroadium.com/category/candidate-resources/" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === 'https://blog.abroadium.com/category/candidate-resources/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
//             onClick={() => handleTabClick('https://blog.abroadium.com/category/candidate-resources/')}
//           >
//             <i className="fa-solid fa-paper-plane p-3 text-purple-500"></i>Resources
//           </Link>
//           <Link 
//             to="/skilltest" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/skilltest' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
//             onClick={() => handleTabClick('/skilltest')}
//           >
//             <i className="fa-solid fa-paper-plane p-3 text-purple-500"></i>Skill Test
//           </Link>
//           <Link 
//             to="community" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-user p-3 text-purple-500"></i>Feed
//           </Link>
//           <Link 
//             to="/" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-book-open-reader p-3 text-purple-500"></i>About
//           </Link>
//           <Link 
//             to="/" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-file p-3 text-purple-500"></i>Education
//           </Link>
//           <Link 
//             to="/" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-pen p-3 text-purple-500"></i>Projects
//           </Link>
//           <Link 
//             to="/" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-gear p-3 text-purple-500"></i>Settings
//           </Link>
//           <Link 
//             to="/change-password" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-gear p-3 text-purple-500"></i>Change Password
//           </Link>
//           <Link 
//             to="/" 
//             className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-gray-400'}`}
//             onClick={() => handleTabClick('/')}
//           >
//             <i className="fa-solid fa-right-to-bracket p-3 text-purple-500"></i>Log Out
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Left;
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Left() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  // Navigation items with their details
  const navItems = [
    {
      path: "/dashboard",
      icon: "fa-solid fa-book-open-reader",
      label: "Dashboard",
    },
    // {
    //   path: '/uploadresume',
    //   icon: 'fa-solid fa-upload',
    //   label: 'Upload Resume'
    // },
    {
      path: "/resume",
      icon: "fa-solid fa-file",
      label: "AI Resume Builder",
    },
    {
      label: "Search Jobs",
      icon: "fa-solid fa-search",

      path: "/job-list",
    },
    {
      label: "Saved Jobs",
      icon: "fa-solid fa-heart",
      path: "/job-alerts",
    },
    {
      label: "Applied Jobs",
      icon: "fa-solid fa-briefcase",
      path: "/applied-jobs",
    },
    {
      path: "https://blog.abroadium.com/category/candidate-resources/",
      icon: "fa-solid fa-paper-plane",
      label: "Resources",
    },
    {
      path: "/skilltest",
      icon: "fa-solid fa-paper-plane",
      label: "Skill Test",
    },
    {
      path: "/skill-test-history",
      icon: "fa-solid fa-paper-plane",
      label: "Skill Test history",
    },
    {
      path: "/community",
      icon: "fa-solid fa-user",
      label: "Feed",
    },
    {
      path: "/notifications",
      icon: "fa-solid fa-bell",
      label: "Notifications",
    },
    {
      path: "",
      icon: "fa-solid fa-book-open-reader",
      label: "About",
    },
    {
      path: "",
      icon: "fa-solid fa-file",
      label: "Education",
    },
    {
      path: "",
      icon: "fa-solid fa-pen",
      label: "Projects",
    },
    {
      path: "",
      icon: "fa-solid fa-gear",
      label: "Settings",
    },
    {
      path: "/change-password",
      icon: "fa-solid fa-gear",
      label: "Change Password",
    },
    {
      path: "/",
      icon: "fa-solid fa-right-to-bracket",
      label: "Log Out",
    },
  ];

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className="hidden md:flex md:flex-col md:w-[23%] md:justify-start md:p-5 bg-slate-800">
      <nav className="w-full">
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`
                flex items-center 
                w-full 
                px-4 
                py-3 
                rounded-lg 
                transition-all 
                duration-300 
                ease-in-out 
                group
                ${activeTab === item.path 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'}
              `}
              onClick={() => handleTabClick(item.path)}
            >
              <i className={`
                ${item.icon} 
                mr-4 
                text-purple-500 
                group-hover:text-purple-400 
                ${activeTab === item.path ? 'text-purple-400' : ''}
              `}></i>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Left;