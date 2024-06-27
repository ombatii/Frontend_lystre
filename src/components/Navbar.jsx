import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "MODEL",
    },
    {
      id: 3,
      name: "SERVICE",
    },
    {
      id: 4,
      name: "SPACE PARTS",
    },
    {
      id: 5,
      name: "MEMBERSHIP",
    },
  ];

  return (
    <div className="absolute top-0 w-full flex items-center justify-between px-4 py-2 ">
      <section className="flex flex-col items-center  md:items-center">
        <img
          className="h-15 object-cover"
          src={"Logo/lystreLogo.png"}
          alt="logo"
        />
        <p className="text-white text-sm md:text-base">
          Experience Automotive Excellence
        </p>
      </section>
      <button
        className={`${
          isMenuOpen ? "absolute right-4 top-7" : ""
        }  md:hidden bg-transparent`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoMdClose size={26} className="text-white" />
        ) : (
          <IoMdMenu size={26} className="text-white" />
        )}
      </button>
      <section
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center space-x-6 md:space-x-6 bg-black md:bg-transparent w-full md:w-auto mt-4 md:mt-0`}
      >
        {links.map((link) => (
          <div key={link.id} className="text-white py-1 md:py-0">
            {link.name}
          </div>
        ))}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-6 pr-10 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent border-gray-100 border"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white font-bold hover:text-gray-600 focus:outline-none bg-transparent">
            <CiSearch />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
