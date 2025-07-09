
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button.jsx"
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["AI Resume Builder", "Resources", "About Us"];

  return (
    <nav className="bg-transparent shadow-sm ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24 ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="abrodium logo" className="h-12 md:w-64 md:h-16" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:gap-[50px] items-center">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="text-[18px] font-semibold text-black hover:text-primary"
              >
                {link}
              </a>
            ))}
            <Button variant="primary" className="w-[120px]">Login</Button>
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
              <a
                key={idx}
                href="#"
                className="block text-sm font-medium text-black hover:text-primary"
              >
                {link}
              </a>
            ))}
            <Button variant="primary" className="w-full">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
