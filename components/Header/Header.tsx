"use client";
import Button from "@/components/Button";
import { useState } from "react";
import HeaderPopUp from "../HeaderPopUp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-center h-16 sm:h-20 px-6 max-w-[1110px] w-full mx-auto relative">
      <div className="flex-1 flex justify-start">
        <img src="logo.svg" alt="Easybank" />
      </div>

      <nav className="hidden sm:flex flex-1 justify-center text-[#9597A5] font-normal">
        <ul className="flex gap-6 text-sm hover:cursor-pointer">
          <li className="h-[80px] flex items-center border-b-4 border-white hover:border-[#30C88F] hover:text-[#2D314D]">
            Home
          </li>
          <li className="h-[80px] flex items-center border-b-4 border-white hover:border-[#30C88F] hover:text-[#2D314D]">
            About
          </li>
          <li className="h-[80px] flex items-center border-b-4 border-white hover:border-[#30C88F] hover:text-[#2D314D]">
            Contact
          </li>
          <li className="h-[80px] flex items-center border-b-4 border-white hover:border-[#30C88F] hover:text-[#2D314D]">
            Blog
          </li>
          <li className="h-[80px] flex items-center border-b-4 border-white hover:border-[#30C88F] hover:text-[#2D314D]">
            Careers
          </li>
        </ul>
      </nav>
      <div className="flex-1 justify-end hidden sm:flex">
        <Button />
      </div>
      <div
        className="flex justify-end sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <img src="icon-hamburger.svg" alt="Menu" /> */}
        {isOpen ? (
          <img src="icon-close.svg" alt="Close" />
        ) : (
          <img src="icon-hamburger.svg" alt="Menu" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-0 w-full sm:hidden ">
          <HeaderPopUp></HeaderPopUp>
        </div>
      )}
    </header>
  );
};
export default Header;
