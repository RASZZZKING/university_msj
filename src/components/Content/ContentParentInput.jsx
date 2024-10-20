"use client";
import { Printer, UserCircleGear } from "@phosphor-icons/react";
import React, { useState } from "react";
import InfoDaftarSuccess from "../utils/InfoDaftarSuccess";
import { useRouter } from "next/navigation";

const ContentParetnsInput = ({ isFill, data, dFull }) => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    id: isFill && isFill !== null ? isFill.id : "",
    id_user: data.id,
    nik_ayah: isFill && isFill !== null ? isFill.nik_ayah : "",
    nama_ayah: isFill && isFill !== null ? isFill.nama_ayah : "",
    tempat_lahir_ayah:
      isFill && isFill !== null ? isFill.tempat_lahir_ayah : "",
    tanggal_lahir_ayah:
      isFill && isFill !== null ? isFill.tanggal_lahir_ayah : "",
    pendidikan_ayah: isFill && isFill !== null ? isFill.pendidikan_ayah : "",
    pekerjaan_ayah: isFill && isFill !== null ? isFill.pekerjaan_ayah : "",
    penghasilan_ayah: isFill && isFill !== null ? isFill.penghasilan_ayah : "",
    no_hp_ayah: isFill && isFill !== null ? isFill.no_hp_ayah : "",
    nik_ibu: isFill && isFill !== null ? isFill.nik_ibu : "",
    nama_ibu: isFill && isFill !== null ? isFill.nama_ibu : "",
    tempat_lahir_ibu: isFill && isFill !== null ? isFill.tempat_lahir_ibu : "",
    tanggal_lahir_ibu:
      isFill && isFill !== null ? isFill.tanggal_lahir_ibu : "",
    pendidikan_ibu: isFill && isFill !== null ? isFill.pendidikan_ibu : "",
    pekerjaan_ibu: isFill && isFill !== null ? isFill.pekerjaan_ibu : "",
    penghasilan_ibu: isFill && isFill !== null ? isFill.penghasilan_ibu : "",
    no_hp_ibu: isFill && isFill !== null ? isFill.no_hp_ibu : "",
    nik_wali: isFill && isFill !== null ? isFill.nik_wali : "",
    nama_wali: isFill && isFill !== null ? isFill.nama_wali : "",
    tempat_lahir_wali:
      isFill && isFill !== null ? isFill.tempat_lahir_wali : "",
    tanggal_lahir_wali:
      isFill && isFill !== null ? isFill.tanggal_lahir_wali : "",
    pendidikan_wali: isFill && isFill !== null ? isFill.pendidikan_wali : "",
    pekerjaan_wali: isFill && isFill !== null ? isFill.penghasilan_wali : "",
    penghasilan_wali: isFill && isFill !== null ? isFill.penghasilan_wali : "",
    no_hp_wali: isFill && isFill !== null ? isFill.no_hp_wali : "",
  });

  const dataAyah = [
    {
      type: "number",
      title: "NIK Ayah",
      name: "nik_ayah",
      placeholder: "nomor nik ayah",
      value: formData.nik_ayah,
    },
    {
      type: "text",
      title: "Nama Ayah",
      name: "nama_ayah",
      placeholder: "Nama lengkap ayah",
      value: formData.nama_ayah,
    },
    {
      type: "text",
      title: "Tempat Lahir",
      name: "tempat_lahir_ayah",
      placeholder: "Kabupaten / kota",
      value: formData.tempat_lahir_ayah,
    },
    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir_ayah",
      value: formData.tanggal_lahir_ayah,
    },
    {
      type: "select",
      title: "Pendidikan",
      placeholder: "pilih pendidikan terakhir ayah",
      name: "pendidikan_ayah",
      value: formData.pendidikan_ayah,
      option: [
        "Tidak_Sekolah",
        "SD",
        "SMP_Sederajat",
        "SMA_Sederajat",
        "D1",
        "D2",
        "D3,",
        "S1",
        "S2",
        "S3",
        "Rektor",
        "Magister",
      ],
    },
    {
      type: "select",
      title: "Pekerjaan",
      placeholder: "pekerjaan ayah",
      name: "pekerjaan_ayah",
      value: formData.pekerjaan_ayah,
      option: [
        "Tidak_Bekerja",
        "Freelancer",
        "Serabutan",
        "Guru",
        "Karyawan",
        "Karyawan_Swasta",
        "Pengusaha",
        "PNS",
        "Dosen",
        "Buruh",
      ],
    },
    {
      type: "select",
      title: "Penghasilan",
      placeholder: "pilih penghasilan ayah",
      name: "penghasilan_ayah",
      value: formData.penghasilan_ayah,
      option: [
        "<_rp._1jt",
        "rp._1jt_s/d_rp._2jt",
        "rp._3jt_s/d_rp._5jt",
        "rp._5jt_s/d_rp._10jt",
        "rp._10jt_s/d_rp._20jt",
        "rp._20jt_s/d_rp._50jt",
        ">_rp._50jt",
      ],
    },
    {
      type: "number",
      title: "Nomor Telepon Ayah",
      name: "no_hp_ayah",
      placeholder: "nomor telepon: +62xxxx",
      value: formData.no_hp_ayah,
    },
  ];
  const dataIbu = [
    {
      type: "number",
      title: "NIK Ibu",
      name: "nik_ibu",
      placeholder: "nomor nik ibu",
      value: formData.nik_ibu,
    },
    {
      type: "text",
      title: "Nama Ibu",
      name: "nama_ibu",
      placeholder: "Nama lengkap ibu",
      value: formData.nama_ibu,
    },
    {
      type: "text",
      title: "Tempat Lahir",
      name: "tempat_lahir_ibu",
      placeholder: "Kabupaten / kota",
      value: formData.tempat_lahir_ibu,
    },
    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir_ibu",
      value: formData.tanggal_lahir_ibu,
    },
    {
      type: "select",
      title: "Pendidikan",
      placeholder: "pilih pendidikan terakhir ibu",
      name: "pendidikan_ibu",
      value: formData.pendidikan_ibu,
      option: [
        "Tidak_Sekolah",
        "SD",
        "SMP_Sederajat",
        "SMA_Sederajat",
        "D1",
        "D2",
        "D3,",
        "S1",
        "S2",
        "S3",
        "Rektor",
        "Magister",
      ],
    },
    {
      type: "select",
      title: "Pekerjaan",
      placeholder: "pekerjaan ibu",
      name: "pekerjaan_ibu",
      value: formData.pekerjaan_ibu,
      option: [
        "Tidak_Bekerja",
        "Freelancer",
        "Serabutan",
        "Guru",
        "Karyawan",
        "Karyawan_Swasta",
        "Pengusaha",
        "PNS",
        "Dosen",
        "Buruh",
      ],
    },
    {
      type: "select",
      title: "Penghasilan",
      placeholder: "pilih penghasilan ibu",
      name: "penghasilan_ibu",
      value: formData.penghasilan_ibu,
      option: [
        "<_rp._1jt",
        "rp._1jt_s/d_rp._2jt",
        "rp._3jt_s/d_rp._5jt",
        "rp._5jt_s/d_rp._10jt",
        "rp._10jt_s/d_rp._20jt",
        "rp._20jt_s/d_rp._50jt",
        ">_rp._50jt",
      ],
    },
    {
      type: "number",
      title: "Nomor Telepon Ibu",
      name: "no_hp_ibu",
      placeholder: "nomor telepon: +62xxxx",
      value: formData.no_hp_ibu,
    },
  ];
  const dataWali = [
    {
      type: "number",
      title: "NIK Wali",
      name: "nik_wali",
      placeholder: "nomor nik wali",
      value: formData.nik_wali,
    },
    {
      type: "text",
      title: "Nama Wali",
      name: "nama_wali",
      placeholder: "Nama lengkap wali",
      value: formData.nama_wali,
    },
    {
      type: "text",
      title: "Tempat Lahir",
      name: "tempat_lahir_wali",
      placeholder: "Kabupaten / kota",
      value: formData.tempat_lahir_wali,
    },
    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir_wali",
      value: formData.tanggal_lahir_wali,
    },
    {
      type: "select",
      title: "Pendidikan",
      placeholder: "pilih pendidikan terakhir wali",
      name: "pendidikan_wali",
      value: formData.pendidikan_wali,
      option: [
        "Tidak_Sekolah",
        "SD",
        "SMP_Sederajat",
        "SMA_Sederajat",
        "D1",
        "D2",
        "D3,",
        "S1",
        "S2",
        "S3",
        "Rektor",
        "Magister",
      ],
    },
    {
      type: "select",
      title: "Pekerjaan",
      placeholder: "pekerjaan wali",
      name: "pekerjaan_wali",
      value: formData.pekerjaan_wali,
      option: [
        "Tidak_Bekerja",
        "Freelancer",
        "Serabutan",
        "Guru",
        "Karyawan",
        "Karyawan_Swasta",
        "Pengusaha",
        "PNS",
        "Dosen",
        "Buruh",
      ],
    },
    {
      type: "select",
      title: "Penghasilan",
      placeholder: "pilih penghasilan wali",
      name: "penghasilan_wali",
      value: formData.penghasilan_wali,
      option: [
        "<_rp._1jt",
        "rp._1jt_s/d_rp._2jt",
        "rp._3jt_s/d_rp._5jt",
        "rp._5jt_s/d_rp._10jt",
        "rp._10jt_s/d_rp._20jt",
        "rp._20jt_s/d_rp._50jt",
        ">_rp._50jt",
      ],
    },
    {
      type: "number",
      title: "Nomor Telepon Wali",
      name: "no_hp_wali",
      placeholder: "nomor telepon: +62xxxx",
      value: formData.no_hp_wali,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((dataPrev) => ({
      ...dataPrev,
      [name]: value,
    }));
  };

  const kirimData = async (e) => {
    e.preventDefault();

    if (
      formData.nik_ayah.trim() === "" ||
      formData.nama_ayah.trim() === "" ||
      formData.tempat_lahir_ayah.trim() === "" ||
      formData.tanggal_lahir_ayah.trim() === "" ||
      formData.pendidikan_ayah.trim() === "" ||
      formData.pekerjaan_ayah.trim() === "" ||
      formData.penghasilan_ayah.trim() === "" ||
      formData.no_hp_ayah.trim() === "" ||
      formData.nik_ibu.trim() === "" ||
      formData.nama_ibu.trim() === "" ||
      formData.tempat_lahir_ibu.trim() === "" ||
      formData.tanggal_lahir_ibu.trim() === "" ||
      formData.pendidikan_ibu.trim() === "" ||
      formData.pekerjaan_ibu.trim() === "" ||
      formData.penghasilan_ibu.trim() === "" ||
      formData.no_hp_ibu.trim() === ""
    ) {
      return;
    }

    const {
      id,
      id_user,
      nik_ayah,
      nama_ayah,
      tempat_lahir_ayah,
      tanggal_lahir_ayah,
      pendidikan_ayah,
      pekerjaan_ayah,
      penghasilan_ayah,
      no_hp_ayah,
      nik_ibu,
      nama_ibu,
      tempat_lahir_ibu,
      tanggal_lahir_ibu,
      pendidikan_ibu,
      pekerjaan_ibu,
      penghasilan_ibu,
      no_hp_ibu,
      nik_wali,
      nama_wali,
      tempat_lahir_wali,
      tanggal_lahir_wali,
      pendidikan_wali,
      pekerjaan_wali,
      penghasilan_wali,
      no_hp_wali,
    } = formData;
    const datax = {
      id,
      id_user,
      nik_ayah,
      nama_ayah,
      tempat_lahir_ayah,
      tanggal_lahir_ayah,
      pendidikan_ayah,
      pekerjaan_ayah,
      penghasilan_ayah,
      no_hp_ayah,
      nik_ibu,
      nama_ibu,
      tempat_lahir_ibu,
      tanggal_lahir_ibu,
      pendidikan_ibu,
      pekerjaan_ibu,
      penghasilan_ibu,
      no_hp_ibu,
      nik_wali,
      nama_wali,
      tempat_lahir_wali,
      tanggal_lahir_wali,
      pendidikan_wali,
      pekerjaan_wali,
      penghasilan_wali,
      no_hp_wali,
    };

    const response = await fetch(
      isFill && isFill !== null
        ? "/api/v1/dataOrangtua/update"
        : "/api/v1/dataOrangtua/create",
      {
        method: "POST",
        body: JSON.stringify(datax),
      }
    );
    const logs = await response.json();
    console.log("🚀 ~ kirimData ~ logs:", logs);
  if(logs.status === 200) {
    alert("Data berhasil diupload")
    dFull.dSiswa === null ? router.push("/Users/dashboard2/forms/student")  : dFull.dMaps === null ? router.push("/Users/dashboard2/forms/location") : dFull.dDocs === null ? router.push("/Users/dashboard2/forms/document") :  router.refresh()
  } 
    
  };

  return (
    <>
      <div className=" bg-color-primary flex sm:w-full lg:ps-[18rem]  lg:px-5 justify-center  py-6 sm:pt-10 lg:min-h-screen   max-lg:overflow-auto hidden-scrollbar ">
        <form onSubmit={kirimData} action={""} method="post" className="flex flex-col  w-full sm:max-lg:w-3/4 items-center max-lg:justify-center max-lg:pb-20 px-6 sm:px-9 lg:px-12 ">
          {/* Header text start  */}
          <InfoDaftarSuccess isFill={isFill} />
          <div className="flex items-center justify-center w-full relative max-lg:mt-7 ">
            <div className="absolute flex justify-between w-full max-lg:hidden">
              <button
                className={`btn ${
                  isFill && isFill !== null
                    ? isFill.status === "Diterima"
                      ? "btn-success text-success"
                      : isFill.status === "Pending" &&
                        "btn-warning text-warning"
                    : "btn-error text-error"
                } hover:bg-opacity-50 bg-opacity-25  shadow-md btn-sm  h-5`}
              >
                <p className=" whitespace-nowrap text-nowrap">
                  {isFill ? isFill.status : "Belum Isi Form"}
                </p>
              </button>
              <button className="btn btn-primary flex gap-1  bg-opacity-20 hover:bg-opacity-50 text-primary hover:text-color-birulaut  shadow-md w-24 ">
                <Printer size={26} />
                <p>Print</p>
              </button>
            </div>
            <div className="text-center text-color-dark max-sm:mt-6">
              <h1 className="text-2xl lg:text-3xl font-semibold drop-shadow-2xl">
                Tolong dilengkapi ya abi dan umi!
              </h1>
              <p className="pb-6 pt-3 text-sm max-w-sm max-w-440 text-center ">
                Pastikan anda memasukan data pribadi dengan benar, Masukan data
                dengan sebenar benarnya!
              </p>
            </div>
          </div>
          {/* Header text end */}
          {/* Input data start  */}
          <div className="flex my-4 flex-row items-center w-full text-color-dark gap-3">
            <UserCircleGear size={26} />
            <p className="font-bold text-lg">Data Ayah </p>
          </div>
          <div className="flex-col flex w-full  lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataAyah.map((cb, index) => (
              <InputFormUser key={index} handleChange={handleChange} cb={cb} />
            ))}
          </div>
          <div className="flex mt-6 my-4 flex-row items-center w-full text-color-dark gap-3">
            <UserCircleGear size={26} />
            <p className="font-bold text-lg">Data Ibu </p>
          </div>
          <div className="flex-col flex w-full lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataIbu.map((cb, index) => (
              <InputFormUser key={index} cb={cb} handleChange={handleChange} />
            ))}
          </div>
          <div className="flex mt-6 my-4 flex-row items-center w-full text-color-dark gap-3">
            <UserCircleGear size={26} />
            <p className="font-bold text-lg">Data Wali </p>
          </div>
          <div className="flex-col flex w-full lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataWali.map((cb, index) => (
              <InputFormUser key={index} cb={cb} handleChange={handleChange} isNoRequired={true} />
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

export default ContentParetnsInput;

export const InputFormUser = ({ cb, handleChange, isNoRequired }) => {
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
            className={`select ${
              cb.value !== "" && "capitalize"
            } select-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2`}
            required={isNoRequired ? false : true}
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
                required={isNoRequired ? false : true}
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
                required={isNoRequired ? false : true}
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
                required={isNoRequired ? false : true}
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
                required={isNoRequired ? false : true}
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
                required={isNoRequired ? false : true}
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
              required={isNoRequired ? false : true}
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
            required={isNoRequired ? false : true}
          />
        </div>
      )}
    </>
  );
};
