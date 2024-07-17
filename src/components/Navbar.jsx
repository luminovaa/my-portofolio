import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#" },
    { label: "Project", href: "#" },
    { label: "Contact", href: "#" },
  ];
  
  return (
    <nav className="fixed right-4 max-sm:right-0 w-full max-w-lg max-sm:max-w-32 m-4">
      <div className="border-4 bg-sea-blue rounded-3xl p-2 flex flex-col items-center">
         <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white font-bold"
        >
          {isOpen ? "Menu" : "Close"}
        </button>
        <div
          className={`flex flex-row justify-center items-center w-full text-white ${
            isOpen ? "hidden" : "flex max-sm:flex-col"
          }`}
        >
          {navItems.map((item) => (
           <a 
            key={item.label}
            href={item.href}
            className="px-2 max-sm:pt-2 max-sm:pb-2 transition-transform duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-4 text-center"
          >
            {item.label}
          </a>
        ))}
        </div>
      </div>
    </nav>
  );
}