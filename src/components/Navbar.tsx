import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav>
      <div className="w-full flex items-center justify-between px-5 py-3 bg-black">
        <span>Logo</span>
        <button
          className="w-5 h-5 flex flex-col justify-center gap-1"
          onClick={() => setShowNavbar(!showNavbar)}
        >
          <div className="bg-white h-0.5 w-4"></div>
          <div className="bg-white h-0.5 w-4"></div>
          <div className="bg-white h-0.5 w-4"></div>
        </button>
      </div>
      {showNavbar && (
        <ul className="p-3 bg-black border-t border-gray-800">
          <li className="w-full p-2">Home</li>
          <li className="w-full p-2">About Us</li>
          <li className="w-full p-2">Services</li>
          <li className="w-full p-2">Contact</li>
        </ul>
      )}
    </nav>
  );
}
