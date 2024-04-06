"use client";
import { UserRectangle } from "@phosphor-icons/react";
import { GraduationCap } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const ContentDashFiles = () => {
  const dataInput = {
    items: [
      {
        name: "SKL",
        placeholder: "Upload nomor SKL",
        lihat: "Lihat SKL",
      },
      {
        name: "IJAZAH",
        placeholder: "Upload nomor Ijazah",
        lihat: "Lihat IJAZAH",
      },
      {
        name: "SHUN / SKHUN",
        placeholder: "Upload nomor SHUN / SKHUN",
        lihat: "Lihat SHUN / SKHUN",
      },
      {
        name: "RAPOR",
        placeholder: "Upload nomor Rapor",
        lihat: "Lihat RAPOR",
      },
      {
        name: "Kartu NISN",
        placeholder: "Upload nomor Kartu NISN",
        lihat: "Lihat Kartu NISN",
      },
    ],

    items2: [
      {
        name: "Kartu Keluarga",
        placeholder: "Upload nomor kartu keluarga",
        lihat: "Lihat Kartu Keluarga",
      },
      {
        name: "Akte Kelahiran",
        placeholder: "Upload nomor akte kelahiran",
        lihat: "Lihat Akte Kelahiran",
      },
      {
        name: "KTP Orang Tua",
        placeholder: "Upload nomor KTP orang tua",
        lihat: "Lihat KTP Orang Tua",
      },
    ],
  };

  return (
    <>
      <div className="max-sm:hidden min-h-[35.5svh] flex justify-center lg:hidden">
        <div className="flex items-center ">
          <div className="text-center text-color-dark">
            <h1 className="text-2xl font-bold drop-shadow-2xl">
              UNINDRA VIDEOS !!!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex sm:max-lg:fixed lg:flex sm:max-xl:bottom-0  sm:w-full sm:rounded-t-3xl lg:rounded-none sm:shadow-inner  lg:shadow-none lg:ps-[14.24rem] justify-center px-5 py-6 sm:pt-10  bg-color-primary max-lg:h-4/6 lg:min-h-screen  max-lg:max-h-[66.6%] max-lg:overflow-auto hidden-scrollbar ">
        <div className=" flex flex-col items-center gap-6 justify-center sm:max-lg:px-6 sm:max-lg:absolute max-lg:pb-20">
          {/* Header text start  */}
          <div className="flex items-center ">
            <div className="text-center text-color-dark">
              <h1 className="text-2xl lg:text-3xl font-semibold drop-shadow-2xl">
                Lengkapi Dokumen!
              </h1>
              <p className=" pt-3 text-sm max-w-sm max-w-440 text-center ">
                Pastikan anda memasukan data pribadi dengan benar, besar kecil
                huruf nama sesuai Kartu Keluarga!
              </p>
            </div>
          </div>
          {/* Header text end */}

          {/* Input data start  */}
          <div className="flex gap-2 w-full text-color-dark">
            <UserRectangle size={26} />
            <p className="text-xl font-semibold">Dokumen Keluarga</p>
          </div>
          <div className="flex-col flex sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-4 gap-x-6 ">
            {dataInput.items2.map((cb, index) => (
              <InputFormUser2 key={index} title={cb.name} />
            ))}
          </div>
          <div className="flex gap-2 w-full text-color-dark">
            <GraduationCap size={26} />
            <p className="text-xl font-semibold">Dokumen Sekolah</p>
          </div>
          <div className="flex-col flex sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-4 gap-x-6 ">
            {dataInput.items.map((cb, index) => (
              <InputFormUser key={index} title={cb.name} />
            ))}
          </div>
          <div className="w-full mt-5 gap-3  flex justify-end">
            <button className="btn bg-color-primary text-color-birulaut border-color-birulaut hover:bg-color-birulaut hover:text-color-primary  shadow-md w-24 sm:h-10  h-5">
              Sebelumnya
            </button>
            <button className="btn bg-color-birulaut border-color-birulaut hover:bg-color-primary text-color-primary hover:text-color-birulaut  shadow-md w-24 sm:h-10  h-5">
              Lanjut
            </button>
            {/* Input data end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDashFiles;

const InputFormUser = ({ title }) => (
  <div className="w-full">
    <span className="label-text text-color-dark font-semibold w-full text-base">
      {title}
    </span>
    <input
      type="file"
      className="file-input file-input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
    />
  </div>
);
const InputFormUser2 = ({ title }) => (
  <div className="w-full">
    <span className="label-text text-color-dark font-semibold w-full text-base">
      {title}
    </span>
    <input
      type="file"
      className="file-input file-input-bordered file-input-success file:text-success file:bg-opacity-15 text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
    />
    <div className="w-full flex justify-end">
    <div className="mt-2 btn btn-xs btn-success bg-opacity-15 hover:bg-opacity-40 text-success" >
        lihat
    </div>  
    </div>
  </div>
);
