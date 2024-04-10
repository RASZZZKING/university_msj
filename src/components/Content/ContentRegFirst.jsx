"use client";
import { Pencil, PencilRuler } from "@phosphor-icons/react";
import { Pen } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const ContentRegFirst = () => {
  const [formData, setFormData] = useState({
    no_pendaftaran: "PPDB2020003",
    nisn: "",
    nik: "",
    no_kk: "",
    nama_lengkap: "",
    tempat: "",
    email: "",
    tanggal_lahir: "",
    no_hp: "",
    asal_sekolah: "",
    urutan_anak: "",
    jumlah_saudara: "",
    tinggi_badan: "",
    berat_badan: "",
    status_dalam_keluarga: "",
    kip: "",
    ukuran_baju: "",
  });

  const dataInputDaftar = [
    {
      type: "text",
      title: "Nomor Pendaftaran",
      name: "no_pendaftaran",
      placeholder: "nodftar",
      value: formData.no_pendaftaran,
      disabled: true,
    },
    {
      type: "text",
      title: "Nama Lengkap",
      name: "nama_lengkap",
      placeholder: "Nama lengkap",
      value: formData.nama_lengkap,
    },
    {
      type: "number",
      title: "No Handphone",
      placeholder: "contoh: +621149902234",
      name: "no_hp",
      value: formData.no_hp,
    },
    {
      type: "text",
      title: "Asal Sekolah",
      name: "asal_sekolah",
      placeholder: "Asal sekolah",
      value: formData.asal_sekolah,
    },
    {
      type: "text",
      title: "Tanah Kelahiran",
      name: "tempat",
      placeholder: "Kabupaten/kota",
      value: formData.tempat,
      doubled: true,
      type2: "date",
      title2: "Tanggal Lahir",
      name2: "tanggal_lahir",
      placeholder2: "",
      value2: formData.tanggal_lahir,
    },
    {
      type: "number",
      title: "NISN",
      name: "nisn",
      placeholder: "NISN",
      value: formData.nisn,
    },
    {
      type: "number",
      title: "NIK",
      name: "nik",
      placeholder: "NIK",
      value: formData.nik,
    },
    {
      type: "number",
      title: "Anak Ke",
      name: "urutan_anak",
      placeholder: "Anak ke",
      value: formData.urutan_anak,
      doubled: true,
      type2: "number",
      title2: "Jumlah Saudara",
      name2: "jumlah_saudara",
      placeholder2: "Jumlah saudara",
      value2: formData.jumlah_saudara,
    },

    {
      type: "number",
      title: "Nomor Kartu Keluarga",
      name: "no_kk",
      placeholder: "Nomor kartu keluarga",
      value: formData.no_kk,
    },

    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir",
      placeholder: "",
      value: formData.tanggal_lahir,
      hasDouble: true,
    },

    {
      type: "number",
      title: "Jumlah Saudara",
      name: "jumlah_saudara",
      placeholder: "Jumlah saudara",
      value: formData.jumlah_saudara,
      hasDouble: true,
    },
    {
      type: "number",
      title: "Berat Badan",
      name: "berat_badan",
      placeholder: "...Kg",
      value: formData.berat_badan,
      hasDouble: true,
    },
    {
      type: "text",
      title: "Status Dalam Keluarga",
      name: "status_dalam_keluarga",
      placeholder: "Status",
      value: formData.status_dalam_keluarga,
    },
    {
      type: "number",
      title: "Tinggi Badan",
      name: "tinggi_badan",
      placeholder: "...cm",
      value: formData.tinggi_badan,
      tripled: true,
      type2: "number",
      title2: "Berat Badan",
      name2: "berat_badan",
      placeholder2: "...Kg",
      value2: formData.berat_badan,
      type3: "text",
      title3: "Ukuran Baju",
      name3: "ukuran_baju",
      placeholder3: "S/M/L/XL/XXL",
      value3: formData.ukuran_baju,
    },
    {
      type: "number",
      title: "No KIP",
      name: "no_kip",
      placeholder: "Kosongkan kalau tidak ada",
      value: formData.no_kip,
    },
  ];

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
      <div className=" bg-color-primary flex sm:max-lg:fixed lg:flex sm:max-xl:bottom-0 sm:w-full sm:rounded-t-3xl lg:rounded-none sm:shadow-inner  lg:shadow-none lg:ps-[14.65rem]  justify-center  py-6 sm:pt-10  max-lg:h-4/6 lg:min-h-screen  max-lg:max-h-[66.6%] max-lg:overflow-auto hidden-scrollbar ">
        <div className="flex flex-col items-center max-lg:justify-center sm:max-lg:absolute max-lg:pb-20 px-6 lg:px-12 ">
          {/* Header text start  */}
          <div className="flex items-center ">
            <div className="text-center text-color-dark">
              <h1 className="text-2xl lg:text-3xl font-semibold drop-shadow-2xl">
                Lengkapi Data Diri!
              </h1>
              <p className="pb-6 pt-3 text-sm max-w-sm max-w-440 text-center ">
                Pastikan anda memasukan data pribadi dengan benar, besar kecil
                huruf nama sesuai Kartu Keluarga!
              </p>
            </div>
          </div>
          {/* Header text end */}

          {/* Input data start  */}
          <div className="w-full flex justify-center mb-4">
            <label className="flex flex-col justify-center items-center gap-1">
              <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold text-base">
                Foto Siswa
              </span>
              <div className="w-28 h-28 rounded-full bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder input input-bordered flex items-end justify-end text-color-secondary">
                <Pencil size={32} className="-mr-4" />
              </div>
            </label>
            <input
              type="file"
              name="foto"
              className="absolute bg-color-birulaut h-28 w-28 rounded-full mt-7 opacity-0 cursor-pointer"
              required
            />
          </div>
          <div className="flex-col flex lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataInputDaftar.map((cb, index) => (
              <InputFormUser
                key={index}
                setFormData={setFormData}
                formData={formData}
                cb={cb}
              />
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

export default ContentRegFirst;

export const InputFormUser = ({ cb, setFormData, formData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((dataPrev) => ({
      ...dataPrev,
      [name]: value,
    }));
  };
  return (
    <>
      {cb.type === "select" ? (
        <div className="w-full">
          <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full bg-color-primary text-base">
            {cb.title}
          </span>
          <select
            value={cb.value}
            onChange={handleChange}
            name={cb.name}
            //   ref={input1}
            className="select select-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2"
            required
          >
            <option value="" disabled>
              Jenis pendaftaran
            </option>
            <option value="siswa_baru">Siswa baru</option>
            <option value="pindahan">Pindahan</option>
          </select>
        </div>
      ) : cb.type !== "textarea" ? (
        cb.doubled === true ? (
          <div className="grid grid-cols-2 w-full gap-x-3">
            <div className="w-full">
              <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
                {cb.title}
              </span>
              <input
                onChange={handleChange}
                name={cb.name}
                type={cb.type}
                value={cb.value}
                placeholder={cb.placeholder}
                className={`input input-bordered ${
                  cb.disabled && "input-disabled"
                } text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md`}
                required
                disabled={cb.disabled ? true : false}
                data-theme="light"
              />
            </div>
            <div className="w-full">
              <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
                {cb.title2}
              </span>
              <input
                onChange={handleChange}
                name={cb.name2}
                type={cb.type2}
                value={cb.value2}
                placeholder={cb.placeholder2}
                className={`input input-bordered ${
                  cb.disabled2 && "input-disabled"
                } text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md`}
                required
                disabled={cb.disabled2 ? true : false}
                data-theme="light"
              />
            </div>
          </div>
        ) : cb.tripled === true ? (
          <div className="grid lg:max-xl:grid-cols-2 grid-cols-3 w-full gap-x-3 gap-y-4 ">
            <div className="w-full">
              <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
                {cb.title}
              </span>
              <input
                onChange={handleChange}
                name={cb.name}
                type={cb.type}
                value={cb.value}
                placeholder={cb.placeholder}
                className={`input input-bordered ${
                  cb.disabled && "input-disabled"
                } text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md`}
                required
                disabled={cb.disabled ? true : false}
                data-theme="light"
              />
            </div>
            <div className="w-full">
              <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
                {cb.title2}
              </span>
              <input
                onChange={handleChange}
                name={cb.name2}
                type={cb.type2}
                value={cb.value2}
                placeholder={cb.placeholder2}
                className={`input input-bordered ${
                  cb.disabled2 && "input-disabled"
                } text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md`}
                required
                disabled={cb.disabled2 ? true : false}
                data-theme="light"
              />
            </div>
            <div className="w-full lg:max-xl:col-span-2">
              <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
                {cb.title3}
              </span>
              <select
                value={cb.value3}
                onChange={handleChange}
                name={cb.name3}
                //   ref={input1}
                className="select select-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2"
                required
              >
                <option value="" className="text-opacity-50 truncate" disabled>
                  Pilih ukuran
                </option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
          </div>
        ) : (
          <div className={`${cb.hasDouble && "hidden"} w-full`}>
            <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
              {cb.title}
            </span>
            <input
              onChange={handleChange}
              name={cb.name}
              type={cb.type}
              value={cb.value}
              placeholder={cb.placeholder}
              className={`input input-bordered ${
                cb.disabled && "input-disabled"
              } text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md`}
              required
              disabled={cb.disabled ? true : false}
              data-theme="light"
            />
          </div>
        )
      ) : (
        <div className="w-full sm:col-span-2">
          <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold w-full text-base">
            {cb.title}
          </span>
          <textarea
            onChange={handleChange}
            name={cb.name}
            type={cb.type}
            value={cb.value}
            placeholder={cb.placeholder}
            className="textarea textarea-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full min-h-28 lg:min-h-16 mt-2 text-md "
            required
          />
        </div>
      )}
    </>
  );
};
