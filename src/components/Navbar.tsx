'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Image
              src="/bee_logo_56x56.png"
              alt="Abees Construction Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
            <Link href="/" className="text-2xl font-bold text-black">
              AbeesConstruction
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="text-black hover:text-blue-600">
              Services
            </Link>
            <Link href="/portfolio" className="text-black hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/testimonials" className="text-black hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="/about" className="text-black hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-black hover:text-blue-600 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 text-black hover:text-blue-600 hover:bg-gray-50">
              Services
            </Link>
            <Link href="/portfolio" className="block px-3 py-2 text-black hover:text-blue-600 hover:bg-gray-50">
              Portfolio
            </Link>
            <Link href="/testimonials" className="block px-3 py-2 text-black hover:text-blue-600 hover:bg-gray-50">
              Testimonials
            </Link>
            <Link href="/about" className="block px-3 py-2 text-black hover:text-blue-600 hover:bg-gray-50">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 