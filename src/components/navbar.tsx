
export default function navbar() {
  return (
    <div className="flex flex-col items-center">
      <div className="border-4 rounded-3xl border-blue-600 m-4 p-2 flex justify-center w-full max-w-3xl fixed">
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Home
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            About Me
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Project
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
