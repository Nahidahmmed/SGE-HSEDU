"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, UserIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close menu if window resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false); // lg breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-3">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-3 ">
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-7 h-7 text-gray-700" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-gray-700" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-[#E72700]">
            HSEDU
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 ml-auto">
          <Link href="/students" className="text-gray-700 hover:text-blue-600">
            Students
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-blue-600">
            Study Destinations <ChevronDownIcon className="w-4 h-4 inline-block mb-1" />
          </Link>
          <Link href="/partners" className="text-gray-700 hover:text-blue-600">
            Partners <ChevronDownIcon className="w-4 h-4 inline-block mb-1" />
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/register">
              <button className="bg-white text-[#E72700] px-6 py-2 rounded hover:bg-[#d61f00] hover:text-white border-blue-400 border-[1px]">
                Register
              </button>
            </Link>
            <Link href="/Login">
              <button className="bg-[#E72700] text-white px-6 py-2 rounded hover:bg-[#d61f00] border-blue-400 border-[1px]">
                Log In
              </button>
            </Link>
          </div>
        </div>

        {/* User Icon */}
        <div>
          <UserIcon className="w-7 h-7 text-gray-700 hover:text-blue-600 cursor-pointer ml-[200px] lg:hidden" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-[50px] px-4 py-3 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
