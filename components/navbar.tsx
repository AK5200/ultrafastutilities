"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-200/50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-200 shadow-lg shadow-blue-500/30">
              <Zap className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ultrafastutilities
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/generate"
              className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
            >
              Generate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link
              href="/generate"
              className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
            >
              Generate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
