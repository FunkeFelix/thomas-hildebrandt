"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function StickyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa] shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#333333] hover:text-[#00246e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00246e]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Right Section (Buttons) */}
          <div className="hidden lg:flex space-x-4">
            <button className="bg-[#00246e] hover:bg-[#f7d794] text-white hover:text-[#00246e] px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              Get Involved
            </button>
            <button className="bg-[#f7d794] hover:bg-[#00246e] text-[#00246e] hover:text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#fafafa] shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Issues
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Events
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>

          {/* Mobile Action Buttons */}
          <div className="px-4 py-3 border-t border-gray-200">
            <button className="block w-full bg-[#00246e] hover:bg-[#f7d794] text-white hover:text-[#00246e] px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out mb-2">
              Get Involved
            </button>
            <button className="block w-full bg-[#f7d794] hover:bg-[#00246e] text-[#00246e] hover:text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
