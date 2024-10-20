"use client";

import { useState } from "react";
import best_program from "@/models/data/best_program";

// masukin data disini
const Badge = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 3) % best_program.data.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentImageIndex - 3 + best_program.data.length) %
      best_program.data.length;
    setCurrentImageIndex(newIndex);
  };
  const nextSlideSm = () => {
    const newIndex = (currentImageIndex + 1) % best_program.data.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlideSm = () => {
    const newIndex =
      (currentImageIndex - 1 + best_program.data.length) %
      best_program.data.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="mt-10 xl:mb-14 mb-8 max-xl:px-10  xl:gap-8 gap-8 text-color-dark flex justify-center items-center">
        <button onClick={prevSlide} className="max-xl:hidden btn btn-xs">
          ❮
        </button>
        <div className="flex gap-8">
        <div className="max-xl:hidden">
          <Cards page={currentImageIndex}  />
        </div>
        <div className="">
          <Cards
            page={(currentImageIndex + 1) % best_program.data.length}
            
          />
        </div>
        <div className="max-xl:hidden">
          <Cards
            page={(currentImageIndex + 2) % best_program.data.length}
            
          />
        </div>
        </div>

        <button onClick={nextSlide} className="max-xl:hidden btn btn-xs">
          ❯
        </button>
      </div>
      <div className="flex mb-14 xl:hidden justify-center items-center gap-3">
        <button onClick={prevSlideSm} className="btn btn-xs">
          ❮
        </button>

        <button onClick={nextSlideSm} className="btn btn-xs">
          ❯
        </button>
      </div>
    </>
  );
};

export default Badge;

const Cards = ({ page }) => {
  console.log("🚀 ~ Cards ~ page:", page);
  return (
    <>
      <div className="card w-72 sm:w-96 h-full bg-color-primary shadow-xl border-2 border-t-2 hover:border-2 hover:border-color-birulaut  border-color-secondary border-opacity-0 border-t-opacity-30  border-solid">
        <div className="card-body ">
          <div className="card-actions justify-center mb-5">
            {best_program.data[page].icon}
          </div>
          <p className="text-center font-bold text-xl">
            {best_program.data[page].name}
          </p>
        </div>
      </div>
    </>
  );
};
