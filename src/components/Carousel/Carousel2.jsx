"use client"
import Link from "next/link";

const images = [
  '../favicon.ico',
  'https://placehold.co/600x400/png',
  'https://placehold.co/600x400?text=Hello+World',
  'https://placehold.co/600x400?text=Hello+World',
  // Tambahkan gambar lainnya sesuai kebutuhan
];

const Carousel2 = () => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};


export default Carousel2;


import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % 4;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + 4) % 4;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <div className="absolute tinggiSesuai z-10 flex justify-between transform w-full sm:max-h-svh  sm:min-svh max-h-96 min-h-96 md:min-h-svh max-md:max-h-96 items-center px-5 pecex2">
          <button
            onClick={prevSlide}
            className="btn btn-circle max-sm:btn-s z-10 cursor-pointer opacity-50 hover:opacity-100 ubahBtn"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-circle max-sm:btn-s z-10 cursor-pointer opacity-50 hover:opacity-100 ubahBtn"
          >
            ❯
          </button>
        </div>

      
      <div className={currentImageIndex === 0 ?  `hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96` : "hidden" }>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl max-sm:text-2xl font-bold">Hello there</h1>
              <p className="md:py-6 py-2  textBerubah">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn ubahBtn bg-color-primary text-color-dark hover:text-color-primary hover:btn-ghost">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className={currentImageIndex === 1 ?  `hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96` : "hidden" }>
          <div className="hero-content w-full sm:w-3/4">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="md:max-w-sm sm:max-w-32 max-w-20 rounded-lg shadow-2xl"
            />
            <div className="md:px-14 px-0 flex flex-col justify-center items-center md:justify-start md:items-start">
              <h1 className="md:text-5xl sm:text-3xl text-xl font-bold">
                Box Office News!
              </h1>
              <p className="md:py-6 py-2  tulisKecil text-center md:text-start">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-xs sm:btn-sm md:btn-md bg-color-primary text-color-dark hover:text-color-primary hover:btn-ghost">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className={currentImageIndex === 2 ?  `hero w-full tinggiSesuai sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96` : "hidden" }>
          <div className="hero-content w-full sm:w-3/4 flex flex-row-reverse">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="md:max-w-sm max-w-20  sm:max-w-32 rounded-lg shadow-2xl"
            />
            <div className="md:px-14 px-0 flex flex-col justify-center items-center md:justify-end md:items-end">
              <h1 className="md:text-5xl sm:text-3xl text-xl font-bold">
                Box Office News!
              </h1>
              <p className="md:py-6 py-2  tulisKecil text-center md:text-end">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn  btn-xs sm:btn-sm md:btn-md bg-color-primary text-color-dark hover:text-color-primary hover:btn-ghost">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className={currentImageIndex === 3 ?  `hero w-full tinggiSesuai sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96` : "hidden" }>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left lg:px-16">
              <h1 className="md:text-5xl sm:text-3xl text-xl font-bold hidan">Login now!</h1>
              <p className="md:py-6 py-2 px-3 md:px-0 max-md:hidden ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-80 cardmini    md:w-full md:max-w-sm shadow-2xl bg-color-primary text-color-dark">
              <form className="  cardBohay  card-body">
                <div className="form-control">
                  <label className="label max-md:pt-0">
                    <span className="label-text text-color-dark font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered inptOk max-md:text-xs bg-color-primary border-2 border-opacity-50 border-color-dark  text-color-dark"
                    required
                  />
                </div>
                <div className="form-control max-md:-mt-2">
                  <label className="label">
                    <span className="label-text text-color-dark font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered inptOk max-md:text-xs bg-color-primary border-2 border-opacity-50 border-color-dark  text-color-dark"
                    required
                  />
                  <label className="label tulisKecil ">
                    <a
                      href="#"
                      className="label-text-alt cardTulis text-color-dark link link-hover"
                    >
                      Forgot password?
                    </a>
                    <a
                      href="#"
                      className="label-text-alt cardTulis text-color-dark link link-hover"
                    >
                      Don't have account?
                    </a>
                  </label>
                </div>
                <div className="form-control md:mt-6">
                  <button className="btn cardBtn hover:bg-color-primary hover:text-color-dark">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>



    </div>
  );
};


