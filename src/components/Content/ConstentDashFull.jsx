"use client";
import React, { useState } from "react";

const ConstentDashFull = () => {
  const [formData, setFormData] = useState({
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
  });

  const dataInputDaftar = [
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
      title: "Nomor Kartu Keluarga",
      name: "no_kk",
      placeholder: "Nomor kartu keluarga",
      value: formData.no_kk,
    },
    {
        type: "text",
        title: "Nama Lengkap",
        name: "nama_lengkap",
        placeholder: "Nama lengkap",
        value: formData.nama_lengkap,
      },
    {
      type: "text",
      title: "Tanah Kelahiran",
      name: "tempat",
      placeholder: "Kabupaten/kota",
      value: formData.tempat,
    },
    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir",
      placeholder: "",
      value: formData.tanggal_lahir,
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
      type: "number",
      title: "Anak Ke",
      name: "urutan_anak",
      placeholder: "Anak ke",
      value: formData.urutan_anak,
    },
    {
      type: "number",
      title: "Jumlah Saudara",
      name: "jumlah_saudara",
      placeholder: "Jumlah saudara",
      value: formData.jumlah_saudara,
    },
    {
      type: "number",
      title: "Tinggi Badan (cm)",
      name: "tinggi_badan",
      placeholder: "...cm",
      value: formData.tinggi_badan,
    },
    {
      type: "number",
      title: "Berat Badan (Kg)",
      name: "berat_badan",
      placeholder: "...Kg",
      value: formData.berat_badan,
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
      <div className="flex sm:max-lg:fixed lg:flex sm:max-xl:bottom-0  sm:w-full sm:rounded-t-3xl lg:rounded-none sm:shadow-inner  lg:shadow-none lg:ps-[14.24rem] justify-center px-5 py-6 sm:pt-10 lg:pt-24 bg-color-primary max-lg:h-4/6 lg:min-h-screen  max-lg:max-h-[66.6%] max-lg:overflow-auto hidden-scrollbar ">
        <div className=" flex flex-col items-center justify-center sm:max-lg:absolute max-lg:pb-20">
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
          <div className="flex-col flex lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataInputDaftar.map((cb, index) => (
              <InputFormUser
                key={index}
                setFormData={setFormData}
                type={cb.type}
                title={cb.title}
                placeholder={cb.placeholder}
                value={cb.value}
                name={cb.name}
                formData={formData}
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

export default ConstentDashFull;

export const InputFormUser = ({
  title,
  name,
  placeholder,
  value,
  type,
  setFormData,
  formData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((dataPrev) => ({
      ...dataPrev,
      [name]: value,
    }));
  };
  return (
    <>
      {type === "select" ? (
        <div className="w-full">
          <span className="label-text text-color-dark font-semibold w-full bg-color-primary text-base">
            {title}
          </span>
          <select
            value={value}
            onChange={handleChange}
            name={name}
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
      ) : type !== "textarea" ? (
        <div className="w-full">
          <span className="label-text text-color-dark font-semibold w-full text-base">
            {title}
          </span>
          <input
            onChange={handleChange}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
            required
          />
        </div>
      ) : (
        <div className="w-full sm:col-span-2">
          <span className="label-text text-color-dark font-semibold w-full text-base">
            {title}
          </span>
          <textarea
            onChange={handleChange}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            className="textarea textarea-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full min-h-28 lg:min-h-16 mt-2 text-md "
            required
          />
        </div>
      )
    
    }
    </>
  );
};
