"use client";
import { Printer } from "@phosphor-icons/react";
import React, { useState } from "react";
import InfoDaftarSuccess from "../utils/InfoDaftarSuccess";

const ContentDashMLocation = () => {
  const [formData, setFormData] = useState({
    alamat: "PPDB2020003",
    alamat_rt: "",
    alamat_rw: "",
    alamat_desa: "",
    alamat_kecamatan: "",
    alamat_kota: "",
    alamat_provinsi: "",
    kode_pos: "",
    tinggal_bersama: "",
    jarak_kesekolah: "",
    waktu_kesekolah: "",
    transportasi: "",
  });

  const dataInputDaftar = [
    {
      type: "textarea",
      title: "Alamat",
      name: "alamat",
      placeholder: "Isi alamat lengkapmu disini...",
      value: formData.alamat,
    },
    {
      type: "number",
      title: "RT",
      name: "alamat_desa",
      placeholder: "RT",
      value: formData.alamat_rt,
      doubled: true,
      title2: "RW",
      type2: "nubmer",
      placeholder2: "RW",
      value2: formData.alamat_rw,
    },
    {
      type: "text",
      title: "Desa",
      name: "alamat_desa",
      placeholder: "alamat desa",
      value: formData.alamat_desa,
    },
    {
      type: "text",
      title: "Kecamatan",
      name: "alamat_kecamatan",
      placeholder: "alamat kecamatan",
      value: formData.alamat_kecamatan,
    },
    {
      type: "text",
      title: "Provinsi",
      name: "alamat_provinsi",
      placeholder: "alamat provinsi",
      value: formData.alamat_provinsi,
    },
    {
      type: "number",
      title: "Kode Pos",
      placeholder: "Kode pos",
      name: "kode_pos",
      value: formData.kode_pos,
    },
    {
      type: "select",
      title: "Tinggal Bersama",
      name: "tinggal_bersama",
      placeholder: "Pilih opsi",
      value: formData.tinggal_bersama,
      option: ["orang_tua", "wali", "kost"],
    },
    {
      type: "text",
      title: "Jarak Tempuh ke Sekolah (m)",
      name: "jarak_kesekolah",
      placeholder: "contoh: 100 M",
      value: formData.jarak_kesekolah,
    },
    {
      type: "text",
      title: "Waktu Tempuh ke Kesekolah (m)",
      name: "waktu_kesekolah",
      placeholder: "contoh: 20 Menit",
      value: formData.waktu_kesekolah,
    },
    {
      type: "select",
      title: "Transportasi",
      name: "transportasi",
      value: formData.transportasi,
      placeholder: "Pilih transportasi",
      option: ["jalan_kaki", "sepeda", "sepeda_motor", "angkutan_umum"],
    },
  ];

  return (
    <>
      <div className=" bg-color-primary flex sm:w-full lg:ps-[14.65rem]  justify-center  py-6 sm:pt-10 lg:min-h-screen   max-lg:overflow-auto hidden-scrollbar ">
        <div className="flex flex-col items-center max-lg:justify-center max-lg:pb-20 px-6 sm:px-9 lg:px-12 ">
          {/* Header text start  */}
          <div className="flex items-center ">
            <div className="text-center text-color-dark">
              <h1 className="text-2xl lg:text-3xl font-semibold drop-shadow-2xl">
                Lengkapi Data Alamat!
              </h1>
              <p className="pb-6 pt-3 text-sm max-w-sm max-w-440 text-center ">
                Pastikan anda memasukan data alamat dengan benar, Masukan data sebenar benarnya!
              </p>
            </div>
          </div>
          {/* Header text end */}
          <InfoDaftarSuccess />
          {/* Input data start  */}
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

export default ContentDashMLocation;

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
            className="select capitalize select-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2"
            required
          >
            <option value="" disabled>
              {cb.placeholder}
            </option>
            {cb.option.map((sb, indax) => {
              const usetitle = sb.split("_").join(" ");
              return (
                <option value={sb} key={indax} className="capitalize">
                  {usetitle}
                </option>
              );
            })}
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
        <div className="w-full sm:col-span-3">
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
