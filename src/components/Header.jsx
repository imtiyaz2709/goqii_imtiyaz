import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-500 flex flex-1 justify-between items-center text-center py-3 px-10 animate__animated animate__pulse">
      <a href="/" className="font-sans font-semibold text-2xl text-white">
        e-Commerce
      </a>
      <div className="flex gap-3">
        <a href="/" className="font-sans font-medium  text-lg text-white">
          Home
        </a>
        <a href="/" className="font-sans font-medium text-lg text-white">
          Products
        </a>
      </div>
    </div>
  );
};

export default Header;
