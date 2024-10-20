"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const images = [
  "../favicon.ico",
  "https://placehold.co/600x400/png",
  "https://placehold.co/600x400?text=Hello+World",
  "https://placehold.co/600x400?text=Hello+World",
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

import React, { useState } from "react";

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
      <div className="absolute tinggiSesuai  flex justify-between transform w-full sm:max-h-svh  sm:min-svh max-h-96 min-h-96 md:min-h-svh max-md:max-h-96 items-center px-5 pecex2">
        <button
          onClick={prevSlide}
          className="btn btn-circle max-sm:btn-s  cursor-pointer opacity-50 hover:opacity-100 ubahBtn"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle max-sm:btn-s  cursor-pointer opacity-50 hover:opacity-100 ubahBtn"
        >
          ❯
        </button>
      </div>

      <div
        className={
          currentImageIndex === 0
            ? `hero w-full tinggiSesuai  object-cover sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96`
            : "hidden"
        }
        // style={{ backgroundImage: `url("/sekolah/gedung.jpg")` }}
      >
        <img
          src="/sekolah/gedung.jpg"
          className="hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96"
          alt=""
        />
        <div className="hero-content text-center">
          <div className="max-w-md  z-[100]">
            <h1 className="text-5xl max-sm:text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Assalamualaikum, yuk kesini
            </h1>
            <p className="md:py-6 py-2  textBerubah drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Eksprollerasi dan kembangkan bakatmu disini, Bersama kita dengan
              mengaji, meraih prestasi akademis, dan pastinya bisa tahfiz.
            </p>
            <button className="btn ubahBtn z-20 bg-color-primary text-color-dark hover:text-color-primary hover:btn-ghost">
              Yuk mulai
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          currentImageIndex === 1
            ? `hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96`
            : "hidden"
        }
      >
        <img
          src="/sekolah/lab.jpeg"
          className="hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96"
          alt=""
        />
        <div className="hero-content w-full sm:w-3/4">
          {/* <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="md:max-w-sm sm:max-w-32 max-w-20 rounded-lg shadow-2xl"
            /> */}
          <div className="md:px-14 px-0 flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 className="md:text-5xl  sm:text-3xl text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Program Interaktif yang membuatmu aktif dan Kreatif
            </h1>
            <p className="md:py-6 py-2  tulisKecil text-center md:text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Praktek?, ya praktek. Kamu bisa akan belajar mengenai sistematika
              dari komputer sehingga kamu bisa menghasilkan suatu karya dengan
              multimedia yang kami ajarkan disini
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md bg-color-primary text-color-dark hover:text-color-primary hover:btn-ghost">
              Yuk Lihat!
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          currentImageIndex === 2
            ? `hero w-full tinggiSesuai sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96`
            : "hidden"
        }
      >
        <img
          src="/sekolah/panah.jpg"
          className="hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96"
          alt=""
        />
        <div className="hero-content w-full sm:w-3/4 flex flex-row-reverse">
          {/* <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="md:max-w-sm max-w-20  sm:max-w-32 rounded-lg shadow-2xl"
            /> */}
          <div className="md:px-14 px-0 flex flex-col justify-center items-center md:justify-end md:items-end">
            <h1 className="md:text-5xl sm:text-3xl text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Eskul yang inovatif!
            </h1>
            <p className="md:py-6 py-2  tulisKecil text-center md:text-end drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Siswa terlatih sebagai santriwati yang disiplin, teladan, dan
              berprestasi
            </p>
            <button className="btn  btn-xs sm:btn-sm md:btn-md bg-color-primary text-color-dark hover:text-color-primary hover:btn-ghost">
              Yuk coba!
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          currentImageIndex === 3
            ? `hero w-full tinggiSesuai sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96`
            : "hidden"
        }
      >
        <img
          src="/sekolah/outing241.jpg"
          className="hero w-full tinggiSesuai  sm:max-h-svh  sm:min-svh max-h-96 min-h-96 bg-base-200 md:min-h-svh max-md:max-h-96"
          alt=""
        />
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left lg:px-16">
            <h1 className="md:text-5xl sm:text-3xl text-xl font-bold hidan drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary">
              Yuk Daftar Sekarang!
            </h1>
            <p className="md:py-6 py-2 px-3 md:px-0 max-md:hidden drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8) text-color-primary ">
              Dapatkan Potongan Harga ekstra untuk 10 Pendaftar pertama
            </p>
          </div>
          <div className="card shrink-0 w-80 cardmini    md:w-full md:max-w-sm shadow-2xl bg-color-primary text-color-dark">
            <Link
              href="/api/auth/signin"
              className="btn btn-light bg-color-primary text-color-dark"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                width={1000}
                height={1000}
                className="w-4 h-4 mr-4 -mt-0.5"
              />
              SIGN UP WITH GOOGLE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
