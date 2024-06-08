import React, { useEffect, useState } from "react";
import Link from "next/link";
import { poppins } from "@/styles/fonts";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle
  const [hasScrolled, setHasScrolled] = useState(false); // State to handle scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        poppins.className
      } backdrop-blur-xl fixed top-0 left-0 right-0 z-50 w-full h-[10vh] flex flex-row justify-between items-center px-10 text-slate-200 ${
        hasScrolled ? "border-b border-gray-400" : ""
      }`}
    >
      <Link href="/">
        <span className="w-[140px] text-lg hover:text-orange-500 hover:underline hover:underline-offset-4">
          nav
        </span>
      </Link>
      <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`absolute top-full left-0 w-full bg-black md:bg-transparent md:static md:flex justify-end ${
          isOpen ? "flex justify-end" : "hidden"
        } flex-col md:flex-row items-center gap-16 px-10 py-5 md:p-0  bg-black/80 backdrop-blur-xl`}
      >
        <Link href="/about">
          <span
            className="text-slate-200 text-lg hover:text-orange-500 hover:underline hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            About
          </span>
        </Link>
        <Link href="/project">
          <span
            className="text-slate-200 text-lg hover:text-orange-500 hover:underline hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </span>
        </Link>
        <Link href="/blog">
          <span
            className="text-slate-200 text-lg hover:text-orange-500 hover:underline hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
