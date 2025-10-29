import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex w-[93%] mx-auto h-[4em] justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <h2 className="font-bold text-black text-2xl uppercase">{"<Dom />"}</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="hover:text-blue-500 font-semibold transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 font-semibold transition duration-300"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="hover:text-blue-500 font-semibold transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 font-semibold transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col gap-4 bg-blue-700 text-white pl-[20px] transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
      >
        <Link
          to="/"
          className="font-semibold hover:text-blue-200 transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-semibold hover:text-blue-200 transition"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/blog"
          className="font-semibold hover:text-blue-200 transition"
          onClick={() => setIsOpen(false)}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="font-semibold hover:text-blue-200 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
