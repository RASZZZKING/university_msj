"use client";
import React, { useState } from "react";
import { toRupiah } from "to-rupiah";
import { Outer } from "../Content/ContentDashFiles";

const DataPayment = ({ dataPembayaran, dataUser, dataBiaya }) => {
  const [isShow, setIsShow] = useState(false);
  const [url, setUrl] = useState();
  const handleShow = (uri) => {
    setUrl(uri);
    setIsShow(true);
  };
  const onClose = () => {
    setIsShow(false);
  };
  return (
    <div
      className={`w-full  flex flex-col  gap-3 justify-center`}
      data-theme="light"
    >
      <p className="text-2xl font-bold">Data Pembayaran</p>
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
      <p className="text-sm">Menampilakan 10 Data Pembayaran</p>
      <div className="max-sm:flex max-sm:flex-col justify-center items-center gap-3 sm:grid  sm:grid-cols-2">
        {dataPembayaran.data.map((cb, index) => (
          <TablePembayaranMobile
            cb={cb}
            key={index}
            dataUser={dataUser}
            handleShow={handleShow}
          />
        ))}
      </div>
      {/* !!!!!! untuk gambar */}
      <Outer
        onClose={onClose}
        isVisible={isShow}
        url={`/bukti_pembayaran/${url}`}
      />
    </div>
  );
};

export default DataPayment;

const TablePembayaranMobile = ({ cb, dataUser, handleShow }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long", // Menampilkan hari (contoh: Senin)
      year: "numeric",
      month: "long", // Menampilkan nama bulan (contoh: Oktober)
      day: "numeric",
    });
  };
  return (
    <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <div className="text-xs">{formatDate(cb.createdAt)}</div>
          <div className="font-semibold text-lg">{cb.nama_pembayaran}</div>
        </div>
        <div
          className={`text-sm ${
            cb.status === "Diterima"
              ? "btn-success border-color-success text-success"
              : cb.status === "Gagal"
              ? "btn-error border-color-error text-error"
              : "btn-warning border-color-warning text-warning"
          } btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
        >
          {cb.status}
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Kode Transaksi</p>
          <p className="text-xs">JMK48ASIK{`00000${cb.id}`}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Nama Siswa</p>
          <p className="text-xs">{dataUser.nama}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Jumlah Bayar</p>
          <p className="text-xs">
            {toRupiah(cb.jumlah_pembayaran, { dot: ".", floatingPoint: 0 })}
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div
          onClick={() => handleShow(cb.bukti_pembayaran)}
          className="btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut"
        >
          Bukti
        </div>
        <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          Cetak
        </div>
      </div>
    </div>
  );
};
