"use client";
import { fasilitas } from "@/models/data/fasilitas";
import React, { useState } from "react";

const Compage = ({data}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % data.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + data.length) % data.length;
    setCurrentImageIndex(newIndex);
  };
  return (
    <div className="relative w-full h-svh">
      <div className="absolute  flex justify-between transform w-full h-svh items-center px-5 pecex2">
        <button
          onClick={prevSlide}
          className="btn btn-circle max-sm:btn-s  cursor-pointer opacity-50 hover:opacity-100 ubahBtn"
        >
          ❮
        </button>
        <div className=" flex items-end h-[90vh]  ">

            <div className="px-6 py-4 font-bold rounded-xl bg-color-primary shadow-xl text-color-dark">
                {data[currentImageIndex].name}
            </div>
        </div>
        <button
          onClick={nextSlide}
          className="btn btn-circle max-sm:btn-s  cursor-pointer opacity-50 hover:opacity-100 ubahBtn"
        >
          ❯
        </button>
      </div>
      <img src={data[currentImageIndex].img_url}
      alt={data[currentImageIndex].name}

 className="bg-color-secondary w-full h-svh object-cover" />
    </div>
  );
};

export default Compage;
