import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Button from "./Button.jsx";
import logo from "../assets/logo.png";
import Modal from "../Component/Login/Modal";
import Login from "../Component/Login/Login";
import Signup from "../Component/Login/Signup";
import axios from "axios";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (token) {
      // Call the API to verify the user's profile
      axios
        .get("https://api.abroadium.com/api/jobseeker/user-profile", {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          console.log("User profile:", response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized
            handleLogout();
          } else {
            console.error("API error:", error);
          }
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    // { name: "AI Resume Builder", to: "/slide/1" },
    { name: "Resources", to: "https://blog.abroadium.com/", external: false },
    {
      name: "About Us",
      to: "/about-us",
      target: "_blank",
      external: false,
    },
  ];

  return (
    <>
      <nav className="bg-transparent shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="abrodium logo"
                  className="h-12 md:w-64 md:h-16"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:gap-[50px] items-center">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  target={link.target}
                  className="text-[18px] font-semibold text-black hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}

              {/* Conditional Rendering: Login/Signup or Profile */}
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="text-[18px] font-semibold text-black hover:text-primary"
                >
                  <Button variant="primary" className="w-[120px]">
                    Login
                  </Button>
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() =>
                      setProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  >
                    <User className="w-6 h-6" />
                  </button>

                  {/* Profile Dropdown */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-slide-down origin-top-right transition-all duration-300 ease-out">
                      <div className="py-1">
                        <Link
                          to="https://builder.abroadium.com/dashboard"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <LayoutDashboard className="mr-2 w-4 h-4" />
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-primary">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-2 pb-4 space-y-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  target={link.target}
                  className="block text-sm font-medium text-black hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Login/Profile Section */}
              {!isLoggedIn ? (
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              ) : (
                <div className="flex flex-col items-start space-y-2">
                  <Link
                    to="https://builder.abroadium.com/dashboard"
                    className="text-black hover:text-primary block px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-600 block px-3 py-2 rounded-md text-base font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
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
}
