"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-500 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#description" className="hover:text-gray-400">
            Description
          </Link>
          <Link href="#form" className="hover:text-gray-400">
            Form
          </Link>
          <Link href="#contact-us" className="hover:text-gray-400">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4 space-y-4 text-center">
          <Link
            href="#description"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Description
          </Link>
          <Link
            href="#form"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Form
          </Link>
          <a
            href="#contact-us"
            className="block hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
