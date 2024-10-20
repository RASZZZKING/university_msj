"use client";
import { Printer } from "@phosphor-icons/react";
import React from "react";

const InfoDaftarSuccess = ({isFill}) => {
  return (
    <div className="w-full mt-2 gap-3  flex justify-between lg:hidden">
      <button className={`btn  ${
                  isFill && isFill !== null
                    ? isFill.status === "Diterima"
                      ? "btn-success text-success"
                      : isFill.status === "Pending" &&
                        "btn-warning text-warning"
                    : "btn-error text-error"
                } hover:bg-opacity-50 bg-opacity-25  shadow-md btn-sm  h-5`}>
        <p className=" whitespace-nowrap text-nowrap">
        {isFill ? isFill.status : "Belum Isi Form"}
        </p>
      </button>
      <button className="btn btn-primary flex gap-1  bg-opacity-20 hover:bg-opacity-50 text-primary hover:text-color-birulaut  shadow-md btn-sm h-5">
        <Printer size={20} />
        <p>Print</p>
      </button>
    </div>
  );
};

export default InfoDaftarSuccess;
