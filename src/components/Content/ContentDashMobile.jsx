"use client";
import React, { useState } from "react";

const ContentDashMobile = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    alamat_domisili: "",
    no_hp: "",
    email: "",
    tingkat: "",
  });

  const dataInputDaftar = [
    {
      type: "text",
      title: "Nama Lengkap",
      name: "nama_lengkap",
      placeholder: "Nama lengkap",
      value: formData.nama_lengkap,
    },
    {
      type: "text",
      title: "Tempat Lahir",
      name: "tempat_lahir",
      placeholder: "Tempat lahir",
      value: formData.tempat_lahir,
    },
    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir",
      placeholder: "Tanggal lahir",
      value: formData.tanggal_lahir,
    },
    {
      type: "number",
      title: "Nomor Handphone",
      name: "no_hp",
      placeholder: "contoh: +6288888889",
      value: formData.no_hp,
    },
    {
      type: "select",
      title: "Tingkat",
      name: "tingkat",
      value: formData.tingkat,
    },
    {
      type: "textarea",
      title: "Alamat Domisili",
      name: "alamat_domisili",
      placeholder: "Alamat Domisili",
      value: formData.alamat_domisili,
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
      <div className="flex sm:fixed lg:flex sm:bottom-0 lg:top-0 sm:w-full sm:rounded-t-3xl lg:rounded-none sm:shadow-inner lg:shadow-none lg:ps-56 justify-center px-5 py-6 sm:py-10 lg:pt-32 pb-24 bg-color-primary max-lg:h-4/6  max-lg:max-h-[66.6%] max-lg:overflow-auto hidden-scrollbar ">
        <div className="w-full h-auto  flex flex-col items-center justify-center sm:absolute sm:pb-20">
          {/* Header text start  */}
          <div className="flex items-center ">
          <div className="text-center text-color-dark">
            <h1 className="text-2xl font-bold drop-shadow-2xl">
              Silahkan Isi Data!
            </h1>
            <p className="pb-6 pt-3 text-sm max-w-sm max-w-440 text-center ">
              Pastikan anda memasukan data pribadi dengan benar, besar kecil
              huruf nama sesuai Kartu Keluarga!
            </p>
          </div>
        </div>
          {/* Header text end */}

          {/* Input data start  */}
          <div className="flex-col flex lg:grid lg:grid-cols-2  gap-3">
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
          {/* Input data end */}
          <div className="w-full max-w-sm lg:max-w-2xl mt-5   flex justify-end">
            <button className="btn bg-color-birulaut border-color-birulaut hover:bg-color-primary text-color-primary hover:text-color-dark  shadow-md w-24 sm:h-10  h-5">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDashMobile;

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
