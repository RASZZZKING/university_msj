"use client";
import { Printer } from "@phosphor-icons/react";
import React, { useState } from "react";
import InfoDaftarSuccess from "../utils/InfoDaftarSuccess";
import { useRouter } from "next/navigation";

const ContentDashMLocation = ({ isFill, data, dFull }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    id: isFill && isFill !== null ? isFill.id : "",
    id_user: data.id,
    alamat: isFill && isFill !== null ? isFill.alamat : "",
    rt: isFill && isFill !== null ? isFill.rt : "",
    rw: isFill && isFill !== null ? isFill.rw : "",
    desa: isFill && isFill !== null ? isFill.desa : "",
    kecamatan: isFill && isFill !== null ? isFill.kecamatan : "",
    kota: isFill && isFill !== null ? isFill.kota : "",
    provinsi: isFill && isFill !== null ? isFill.provinsi : "",
    kode_pos: isFill && isFill !== null ? isFill.kode_pos : "",
    tinggal_bersama: isFill && isFill !== null ? isFill.tinggal_bersama : "",
    jarak_kesekolah: isFill && isFill !== null ? isFill.jarak_kesekolah : "",
    waktu_kesekolah: isFill && isFill !== null ? isFill.waktu_kesekolah : "",
    transportasi: isFill && isFill !== null ? isFill.transportasi : "",
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
      name: "rt",
      placeholder: "RT",
      value: formData.rt,
      doubled: true,
      title2: "RW",
      name2: "rw",
      type2: "nubmer",
      placeholder2: "RW",
      value2: formData.rw,
    },
    {
      type: "text",
      title: "Desa",
      name: "desa",
      placeholder: "alamat desa",
      value: formData.desa,
    },
    {
      type: "text",
      title: "Kecamatan",
      name: "kecamatan",
      placeholder: "alamat kecamatan",
      value: formData.kecamatan,
    },
    {
      type: "text",
      title: "Kabupaten/Kota",
      name: "kota",
      placeholder: "alamat kabupaten / kota",
      value: formData.kota,
    },
    {
      type: "text",
      title: "Provinsi",
      name: "provinsi",
      placeholder: "alamat provinsi",
      value: formData.provinsi,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((dataPrev) => ({
      ...dataPrev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.alamat.trim() === "" ||
      formData.rt.trim() === "" ||
      formData.rw.trim() === "" ||
      formData.desa.trim() === "" ||
      formData.kecamatan.trim() === "" ||
      formData.kota.trim() === "" ||
      formData.provinsi.trim() === "" ||
      formData.kode_pos.trim() === "" ||
      formData.tinggal_bersama.trim() === "" ||
      formData.jarak_kesekolah.trim() === "" ||
      formData.waktu_kesekolah.trim() === "" ||
      formData.transportasi.trim() === ""
    )
      return Response.json({ status: 250, message: "woi ada yg kosong" });

    const {
      id,
      id_user,
      alamat,
      rt,
      rw,
      desa,
      kecamatan,
      kota,
      provinsi,
      kode_pos,
      tinggal_bersama,
      jarak_kesekolah,
      waktu_kesekolah,
      transportasi,
    } = formData;

    const datax = {
      id,
      id_user,
      alamat,
      rt,
      rw,
      desa,
      kecamatan,
      kota,
      provinsi,
      kode_pos,
      tinggal_bersama,
      jarak_kesekolah,
      waktu_kesekolah,
      transportasi,
    };

    const response = await fetch(
      isFill && isFill !== null
        ? "/api/v1/dataAlamat/update"
        : "/api/v1/dataAlamat/create",
      {
        method: "POST",
        body: JSON.stringify(datax),
      }
    );
    const showData = await response.json();
    console.log("🚀 ~ handleSubmit ~ showData:", showData);
    if(showData.status === 200){
      alert("Data berhasil diupload")
      dFull.dSiswa === null ? router.push("/Users/dashboard2/forms/student") : dFull.dOrtu === null ? router.push("/Users/dashboard2/forms/parents")  :  dFull.dDocs === null ? router.push("/Users/dashboard2/forms/document")  : router.refresh()
    } 
      
  };

  return (
    <>
      <div className=" bg-color-primary flex sm:w-full lg:ps-[18rem] lg:px-5  justify-center  py-6 sm:pt-10 lg:min-h-screen   max-lg:overflow-auto hidden-scrollbar ">
        <form method="post" action={""} onSubmit={handleSubmit} className="flex flex-col items-center max-lg:justify-center max-lg:pb-20 px-6 sm:px-9 lg:px-12 ">
          {/* Header text start  */}
          <InfoDaftarSuccess isFill={isFill} />
          <div className="flex items-center justify-center w-full relative max-lg:mt-7 ">
            <div className="absolute flex justify-between w-full max-lg:hidden">
              <button className={`btn ${
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
              <button className="btn btn-primary flex gap-1  bg-opacity-20 hover:bg-opacity-50 text-primary hover:text-color-birulaut  shadow-md w-24 ">
                <Printer size={26} />
                <p>Print</p>
              </button>
            </div>
            <div className="text-center text-color-dark">
              <h1 className="text-2xl lg:text-3xl font-semibold drop-shadow-2xl">
                Lengkapi Data Alamat!
              </h1>
              <p className="pb-6 pt-3 text-sm max-w-sm max-w-440 text-center ">
                Pastikan anda memasukan data alamat dengan benar, Masukan data
                sebenar benarnya!
              </p>
            </div>
          </div>
          {/* Header text end */}
          {/* Input data start  */}
          <div className="flex-col flex lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataInputDaftar.map((cb, index) => (
              <InputFormUser key={index} cb={cb} handleChange={handleChange} />
            ))}
          </div>

          <div className="w-full mt-5 gap-3  flex justify-end">
            <button
              type="submit"
              className="btn bg-color-birulaut hover:bg-color-birulaut hover:scale-105 border-color-birulaut  text-color-primary shadow-md w-24 sm:h-10  h-5"
            >
                            {isFill ? "Update" : "Kirim"}

            </button>
            {/* Input data end */}
          </div>
        </form>
      </div>
    </>
  );
};

export default ContentDashMLocation;

export const InputFormUser = ({ cb, handleChange }) => {
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
