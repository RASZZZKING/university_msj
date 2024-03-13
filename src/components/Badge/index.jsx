"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

  // masukin data disini
const data = [
  'Halim',
  'Alim',
  'Juara',
  'Jagoan',
  'Sangar',
  'Smart',
  'Berprestasi',
  'Disegani',
  'Strong'
]
const Badge = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 3) % data.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 3 + data.length) % data.length;
    setCurrentImageIndex(newIndex);
  };
  const nextSlideSm = () => {
    const newIndex = (currentImageIndex + 1) % data.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlideSm = () => {
    const newIndex = (currentImageIndex - 1 + data.length) % data.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className="mt-10 xl:mb-14 mb-8 max-xl:px-10  xl:gap-8 gap-8 text-color-dark flex justify-center items-center">
        <button onClick={prevSlide} className="max-xl:hidden btn btn-xs">
          ❮
        </button>
        <div className="max-xl:hidden"><Cards page={currentImageIndex} bag={1} capt={"Religius"} /></div>
        <div className=""><Cards page={(currentImageIndex + 1) % data.length} bag={2} capt={"Halim"} /></div>
        <div className="max-xl:hidden"><Cards page={(currentImageIndex + 2) % data.length} bag={3} capt={"Juara"} /></div>

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

const Cards = ({ page, bag, capt }) => {
  return (
    <>
      {/* pakai border warna */}
      {/* {bag === 1 ? (
        <div className="card w-96 bg-color-primary shadow-lg shadow-color-birulaut border-4 border-color-birulaut  border-solid">
          <div className="card-body ">
            <div className="card-actions justify-center mb-5">
              <FontAwesomeIcon icon={faInfinity} className="h-7" />
            </div>
            <p>0{page} We are using cookies for no reason.</p>
          </div>
        </div>
      ) : (<div className="card w-96 bg-color-primary shadow-xl border-t-2 hover:border-2 hover:border-color-birulaut  border-t-color-secondary border-opacity-30 border-solid">
          <div className="card-body ">
            <div className="card-actions justify-center mb-5">
              <FontAwesomeIcon icon={faInfinity} className="h-7" />
            </div>
            <p>0{page} We are using cookies for no reason.</p>
          </div>
        </div>
      )} */}
      <div className="card w-72 sm:w-96 bg-color-primary shadow-xl border-2 border-t-2 hover:border-2 hover:border-color-birulaut  border-color-secondary border-opacity-0 border-t-opacity-30  border-solid">
        <div className="card-body ">
          <div className="card-actions justify-center mb-5">
            <FontAwesomeIcon icon={faInfinity} className="h-7" />
          </div>
          <p className="text-center font-bold text-xl">
            {page} {data[page]}
          </p>
        </div>
      </div>
    </>
  );
};
