"use client";
import { Printer } from "@phosphor-icons/react";
import React from "react";

const InfoDaftarSuccess = () => {
  return (
    <div className="w-full mt-2 gap-3  flex justify-between">
      <button className="btn btn-success hover:bg-opacity-50 hover:text-color-dark text-success bg-opacity-25  shadow-md btn-sm  h-5">
        <p className=" whitespace-nowrap text-nowrap">Pendaftaran Diterima</p>
      </button>
      <button className="btn btn-primary flex gap-1  bg-opacity-20 hover:bg-opacity-50 text-primary hover:text-color-birulaut  shadow-md w-24 ">
        <Printer size={26} />
        <p>Print</p>
      </button>
    </div>
  );
};

export default InfoDaftarSuccess;
