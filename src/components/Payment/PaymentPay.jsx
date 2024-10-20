"use client";
import React, { useState } from "react";

const PaymentPay = ({ dataBiaya, dataUser }) => {
  const [dataPay, setDataPay] = useState({
    id_user: Number(dataUser.id),
    nama_pembayaran: "",
    jumlah_pembayaran: "",
    bukti_pembayaran: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name !== "bukti_pembayaran") {
      setDataPay((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setDataPay((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dataPay.jumlah_pembayaran === 0 || dataPay.bukti_pembayaran == null)
      return alert("Silahkan masukan data dengan benar");

    const formData = new FormData();
    formData.append("id_user", dataPay.id_user);
    formData.append("nama_pembayaran", dataPay.nama_pembayaran);
    formData.append("jumlah_pembayaran", dataPay.jumlah_pembayaran);
    formData.append("status", "Pending");

    if (dataPay.bukti_pembayaran) {
      formData.append("bukti_pembayaran", dataPay.bukti_pembayaran);
    }

    try {
      const response = await fetch("/api/v1/data_pembayaran/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Berhasil Upload Bukti Pembayaran");
        alert("Pembayaran Berhasil")
      } else {
        const tampilkan = await response.json();
        console.log("GAGAL Upload Bukti Pembayaran", tampilkan);
      }
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-xl">Tambah Pembayaran</h2>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Nama Pembayaran"}
            </span>
            <select
              name={"nama_pembayaran"}
              className="select select-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2"
              required
              onChange={handleChange}
            >
              <option value="" checked defaultChecked disabled>
                Jenis pendaftaran
              </option>
              {dataBiaya.map((cb, i) => (
                <option value={cb.nama_biaya} key={i}>
                  {cb.nama_biaya}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Jumlah Pembayaran"}
            </span>
            <input
              onChange={handleChange}
              name={"jumlah_pembayaran"}
              type={"number"}
              placeholder={"contoh: 5000000"}
              className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
              required
            />
          </div>

          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Bukti Pembayaran"}
            </span>
            <input
              name={"bukti_pembayaran"}
              onChange={handleChange}
              type={"file"}
              className="file-input file-input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
              required
            />
          </div>
          <div className="card-actions justify-end mt-3">
            <button
              className="btn btn-primary btn-md bg-color-birulaut border-color-birulaut"
              onClick={handleSubmit}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPay;
