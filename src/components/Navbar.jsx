import { useState } from "react";
import { Link } from "react-scroll";
import "../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About Me", to: "about" },
    { label: "Project", to: "project" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed right-4 max-sm:right-0 w-full max-w-lg z-50 max-sm:max-w-32 m-4">
      <div className="border-4 bg-utama rounded-3xl p-2 flex flex-col items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white font-bold font-manga-temple"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <div
          className={`flex sm:flex-row justify-center items-center w-full text-white ${
            isOpen ? "flex flex-col" : "hidden sm:flex"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              className="px-2 font-manga-temple max-sm:pt-2 max-sm:pb-2 hover:animate-bounce transition-transform duration-300 hover:underline hover:underline-offset-4 text-center cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
