import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/logos/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="py-3 sm:py-6 mb-8 sm:mb-0 md:py-6 px-4 sm:px-8 md:px-12 lg:px-20 flex justify-between items-center relative">
      {/* Logo */}
      <div onClick={()=>navigate('/')}  className="flex justify-center items-center gap-2 cursor-pointer">
        <img src={Logo} alt="logo" className="w-8 h-8"/>
        <div className="text-xl sm:text-2xl font-medium text-[#0066DB]">
          Global PG Tech
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-[#0066DB]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm lg:text-base">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-[#0066DB] border-b-2 border-[#0066DB] font-semibold"
              : "text-gray-500"
          } underline-offset-8`}
        >
          Home
        </Link>
        <Link
          to="/placement-and-staffing"
          className={`${
            location.pathname === "/placement-and-staffing"
              ? "text-[#0066DB] border-b-2 border-[#0066DB] font-semibold"
              : "text-gray-500"
          }`}
        >
          Placements & Staffing
        </Link>
        <Link
          to="/our-services"
          className={`${
            location.pathname === "/our-services"
              ? "text-[#0066DB] border-b-2 border-[#0066DB] font-semibold"
              : "text-gray-500"
          }`}
        >
          Our Services
        </Link>
      </div>

      {/* Contact Us Button - Desktop */}
      <div
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        className="hidden md:flex border-2 border-[#0066DB] text-[#0066DB] font-semibold rounded-lg px-3 lg:px-4 py-1 items-center cursor-pointer hover:bg-[#0066DB] hover:text-white transition duration-300 text-sm lg:text-base"
      >
        Contact Us
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-10 md:hidden flex flex-col px-4 py-4">
          <Link
            to="/"
            className={`py-3 ${
              location.pathname === "/"
                ? "text-[#0066DB] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/placement-and-staffing"
            className={`py-3 ${
              location.pathname === "/placement-and-staffing"
                ? "text-[#0066DB] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Placements & Staffing
          </Link>
          <Link
            to="/our-services"
            className={`py-3 ${
              location.pathname === "/our-services"
                ? "text-[#0066DB] font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Services
          </Link>
          <div
            onClick={() => {
              setMobileMenuOpen(false);
            }}
            className="mt-2 border-2 border-[#0066DB] text-[#0066DB] font-semibold rounded-lg px-4 py-2 flex items-center justify-center cursor-pointer hover:bg-[#0066DB] hover:text-white transition duration-300"
          >
            Contact Us
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
