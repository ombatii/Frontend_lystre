import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Bottom = () => {
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
    <div className="w-100 bg-gray-700">
      <div className="flex flex-col md:flex-row  gap-2 items-center justify-around md:items-start py-4 ">
        <section>
          <img src={"Logo/lystreLogo.png"} alt="logo" />
        </section>
        <section className="flex flex-col justify-center items-center">
          {links.map((link) => (
            <div key={link.id} className="text-white">
              {link.name}
            </div>
          ))}
        </section>
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-white">CONTACT US</h1>
          <p className="text-white">+254 675 890989</p>
          <p className="text-white">hello@lystraautomart.com</p>
          <section className="flex gap-5 mt-2">
            <button className="bg-blue-500 p-1 rounded-full">
              <FaLinkedinIn className="text-white  " />
            </button>
            <button className="bg-blue-500 p-1 rounded-full">
              <FaInstagram className="text-black  " />
            </button>
            <button className="bg-blue-500 p-1 rounded-full">
              <FaXTwitter className="text-white  " />
            </button>
            <button className="bg-blue-500 p-1 rounded-full">
              <FaFacebookF className="text-white  " />
            </button>
          </section>
        </section>
      </div>
      <section className="relative  w-full m-auto px-4 ">
        <p className="text-white text-left md:text-center">
          © 2024, Lystra Automart
        </p>
        <div className="absolute right-0 bottom-0 flex items-center">
          <p className="text-white p-2">Powered by</p>
          <img className="h-6" src={"Logo/ToséLogo.png"} alt="tose" />
        </div>
      </section>
    </div>
  );
};

export default Bottom;
