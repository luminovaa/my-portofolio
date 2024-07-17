import "../index.css";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center">
      <div className="border-4 rounded-3xl bg-utama m-4 p-2 flex justify-center w-full max-w-3xl fixed">
        <div className="flex space-x-4 text-white font-manga-temple">
          <a
            href="#"
            className="px-2 transition-transform duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-4"
          >
            Home
          </a>
          <a
            href="#"
            className="px-2 transition-transform duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-4"
          >
            About Me
          </a>
          <a
            href="#"
            className="px-2 transition-transform duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-4"
          >
            Project
          </a>
          <a
            href="#"
            className="px-2 transition-transform duration-300 hover:-translate-y-1 hover:underline hover:underline-offset-4"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
