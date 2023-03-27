// components/Navbar.js

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-3 bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="hidden space-x-6 md:flex">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/favourites" className="text-white hover:text-gray-300">
            Favourites
          </Link>
          <Link href="/search" className="text-white hover:text-gray-300">
            Search
          </Link>
        </div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-3 space-y-2 md:hidden">
          <Link href="/" className="block text-white hover:text-gray-300">
            Home
          </Link>
          <Link
            href="/favourites"
            className="block text-white hover:text-gray-300"
          >
            Favourites
          </Link>
          <Link href="/search" className="block text-white hover:text-gray-300">
            Search
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
