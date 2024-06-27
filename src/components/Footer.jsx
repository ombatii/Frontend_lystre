import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="absolute bg-black bg-opacity-70 bottom-0 w-full flex flex-col md:flex-row justify-around items-center">
      <section className="flex justify-center items-center gap-2">
        <button className="bg-red-600 rounded-full">
          <GrFormPrevious className="text-black" />
        </button>
        <h1 className="text-red-600">GET A COMPLIMENTARY BOAT</h1>
      </section>
      <button className="bg-red-600 text-black w-40 rounded-md">
        TOUR TO CAR
      </button>
      <section className="flex justify-center items-center gap-2">
        <h1 className="text-red-600">GET A COMPLIMENTARY BOAT</h1>
        <button className="bg-red-600 rounded-full">
          <GrFormNext className="text-black" />
        </button>
      </section>
    </div>
  );
};

export default Footer;
