"use client";
import React from "react";
import { toRupiah } from "to-rupiah";

const DataBiaya = ({ dataBiaya, statusDataBiaya }) => {
  return (
    <div
      className={`w-full  flex flex-col  gap-3 justify-center`}
      data-theme="light"
    >
      <p className="text-2xl font-bold">Data Biaya</p>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <p className="text-sm">Menampilakan {dataBiaya.length} Data Biaya</p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {dataBiaya.map((cb, index) => {
          const status = statusDataBiaya[cb.nama_biaya].status;
          const minus = statusDataBiaya[cb.nama_biaya].minus;
          return (
            <TableBiayaMobile
              cb={cb}
              key={index}
              status={status}
              minus={minus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DataBiaya;

const TableBiayaMobile = ({ cb, status, minus }) => (
  <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg">
    <div className="flex justify-between items-center pb-1">
      <div className="flex flex-col justify-center">
        <div className="font-semibold text-lg">{cb.nama_biaya}</div>
      </div>
      <div
        className={`text-sm ${
          status === "Lunas"
            ? "btn-success text-success border-color-success"
            : status === "Cicil"
            ? "btn-warning text-warning border-color-warning"
            : "btn-error text-error border-color-error"
        } btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
      >
        {status}
      </div>
    </div>
    <div className="h-0.5 w-full border-t opacity-50"></div>
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between">
        <p className="text-xs">Nama Biaya</p>
        <p className="text-xs">{cb.nama_biaya}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-xs">Jumlah Biaya</p>
        <p className="text-xs">
          {toRupiah(cb.jumlah_biaya, { dot: ".", floatingPoint: 0 })}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-xs">Kurang</p>
        <p className="text-xs">
          {minus > 0 && `+`}
          {toRupiah(minus, { dot: ".", floatingPoint: 0 })}
        </p>
      </div>
    </div>
    <div className={`${status === "Lunas" && "hidden"} flex justify-end gap-2`}>
      <div
        className={`${
          status === "Cicil" && "hidden"
        } btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut`}
      >
        Cicil
      </div>
      <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
        {status === "Cicil" ? status : "Bayar"}
      </div>
    </div>
  </div>
);
