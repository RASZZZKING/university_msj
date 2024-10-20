"use client";
import { Pencil } from "@phosphor-icons/react";
import { Printer } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";

const ConstentDashFull = ({ data, isFill, dFull }) => {
  const router = useRouter()
  const [imagePrev, setImagePrev] = useState(
    isFill && isFill !== null ? `/foto_siswa/${isFill.foto}` : ""
  );
  const [formDatax, setFormData] = useState({
    id: isFill ? isFill.id : "",
    id_user: data.id,
    no_pendaftaran: `PPDB2024${
      data.id < 10 ? `00${data.id}` : data.id < 100 ? `0${data.id}` : data.id
    }`,
    foto: isFill && isFill !== null ? isFill.foto : "",
    nisn: isFill && isFill !== null ? isFill.nisn : "",
    nik: isFill && isFill !== null ? isFill.nik : "",
    no_kk: isFill && isFill !== null ? isFill.no_kk : "",
    nama_lengkap: isFill && isFill !== null ? isFill.nama_lengkap : "",
    tempat: isFill && isFill !== null ? isFill.tempat : "",
    email: data.email,
    tanggal_lahir: isFill && isFill !== null ? isFill.tanggal_lahir : "",
    no_hp: isFill && isFill !== null ? isFill.no_hp : "",
    asal_sekolah: isFill && isFill !== null ? isFill.asal_sekolah : "",
    urutan_anak: isFill && isFill !== null ? isFill.urutan_anak : "",
    jumlah_saudara: isFill && isFill !== null ? isFill.jumlah_saudara : "",
    tinggi_badan: isFill && isFill !== null ? isFill.tinggi_badan : "",
    berat_badan: isFill && isFill !== null ? isFill.berat_badan : "",
    status_dalam_keluarga:
      isFill && isFill !== null ? isFill.status_dalam_keluarga : "",
    kip: isFill && isFill !== null ? isFill.kip : "",
    ukuran_baju: isFill && isFill !== null ? isFill.ukuran_baju : "",
  });

  const dataInputDaftar = [
    {
      type: "text",
      title: "Nomor Pendaftaran",
      name: "no_pendaftaran",
      placeholder: "nodftar",
      value: formDatax.no_pendaftaran,
      disabled: true,
    },
    {
      type: "text",
      title: "Nama Lengkap",
      name: "nama_lengkap",
      placeholder: "Nama lengkap",
      value: formDatax.nama_lengkap,
    },
    {
      type: "number",
      title: "No Handphone",
      placeholder: "contoh: +621149902234",
      name: "no_hp",
      value: formDatax.no_hp,
    },
    {
      type: "text",
      title: "Asal Sekolah",
      name: "asal_sekolah",
      placeholder: "Asal sekolah",
      value: formDatax.asal_sekolah,
    },
    {
      type: "text",
      title: "Tanah Kelahiran",
      name: "tempat",
      placeholder: "Kabupaten/kota",
      value: formDatax.tempat,
      doubled: true,
      type2: "date",
      title2: "Tanggal Lahir",
      name2: "tanggal_lahir",
      placeholder2: "",
      value2: formDatax.tanggal_lahir,
    },
    {
      type: "number",
      title: "NISN",
      name: "nisn",
      placeholder: "NISN",
      value: formDatax.nisn,
    },
    {
      type: "number",
      title: "NIK",
      name: "nik",
      placeholder: "NIK",
      value: formDatax.nik,
    },
    {
      type: "number",
      title: "Anak Ke",
      name: "urutan_anak",
      placeholder: "Anak ke",
      value: formDatax.urutan_anak,
      doubled: true,
      type2: "number",
      title2: "Jumlah Saudara",
      name2: "jumlah_saudara",
      placeholder2: "Jumlah saudara",
      value2: formDatax.jumlah_saudara,
    },

    {
      type: "number",
      title: "Nomor Kartu Keluarga",
      name: "no_kk",
      placeholder: "Nomor kartu keluarga",
      value: formDatax.no_kk,
    },

    {
      type: "date",
      title: "Tanggal Lahir",
      name: "tanggal_lahir",
      placeholder: "",
      value: formDatax.tanggal_lahir,
      hasDouble: true,
    },

    {
      type: "number",
      title: "Jumlah Saudara",
      name: "jumlah_saudara",
      placeholder: "Jumlah saudara",
      value: formDatax.jumlah_saudara,
      hasDouble: true,
    },
    {
      type: "number",
      title: "Berat Badan",
      name: "berat_badan",
      placeholder: "...Kg",
      value: formDatax.berat_badan,
      hasDouble: true,
    },
    {
      type: "text",
      title: "Status Dalam Keluarga",
      name: "status_dalam_keluarga",
      placeholder: "Status",
      value: formDatax.status_dalam_keluarga,
    },
    {
      type: "number",
      title: "Tinggi Badan",
      name: "tinggi_badan",
      placeholder: "...cm",
      value: formDatax.tinggi_badan,
      tripled: true,
      type2: "number",
      title2: "Berat Badan",
      name2: "berat_badan",
      placeholder2: "...Kg",
      value2: formDatax.berat_badan,
      type3: "text",
      title3: "Ukuran Baju",
      name3: "ukuran_baju",
      placeholder3: "S/M/L/XL/XXL",
      value3: formDatax.ukuran_baju,
    },
    {
      type: "number",
      title: "No KIP",
      name: "kip",
      placeholder: "Kosongkan kalau tidak ada",
      value: formDatax.kip,
    },
  ];

  const {
    id,
    id_user,
    no_pendaftaran,
    nisn,
    nik,
    no_kk,
    nama_lengkap,
    tempat,
    email,
    tanggal_lahir,
    no_hp,
    asal_sekolah,
    urutan_anak,
    jumlah_saudara,
    tinggi_badan,
    berat_badan,
    status_dalam_keluarga,
    kip,
    ukuran_baju,
  } = formDatax;
  let datax = {
    id,
    id_user,
    no_pendaftaran,
    nisn,
    nik,
    no_kk,
    nama_lengkap,
    tempat,
    email,
    tanggal_lahir,
    no_hp,
    asal_sekolah,
    urutan_anak,
    jumlah_saudara,
    tinggi_badan,
    berat_badan,
    status_dalam_keluarga,
    kip,
    ukuran_baju,
  };

  const handleLanjut = async (e) => {
    e.preventDefault();
    if (
      formDatax.no_pendaftaran.trim() === "" ||
      formDatax.nisn.trim() === "" ||
      formDatax.nik.trim() === "" ||
      formDatax.no_kk.trim() === "" ||
      formDatax.nama_lengkap.trim() === "" ||
      formDatax.tempat.trim() === "" ||
      formDatax.email.trim() === "" ||
      formDatax.tanggal_lahir.trim() === "" ||
      formDatax.no_hp.trim() === "" ||
      formDatax.asal_sekolah.trim() === "" ||
      formDatax.urutan_anak.trim() === "" ||
      formDatax.jumlah_saudara.trim() === "" ||
      formDatax.tinggi_badan.trim() === "" ||
      formDatax.berat_badan.trim() === "" ||
      formDatax.status_dalam_keluarga.trim() === "" ||
      formDatax.kip.trim() === "" ||
      formDatax.ukuran_baju.trim() === ""
    )
      return alert("Data tidak boleh ada yang kosong");

    const formData = new FormData();
    for (const key in formDatax) {
      if (key !== "foto") {
        formData.append(key, formDatax[key]);
      } else {
        const file = formDatax[key];
        if (typeof file !== "String") {
          if (!["image/png", "image/jpg", "image/jpeg"].includes(file.type))
            return alert(
              `File ${key} harus berupa gambar dengan format PNG, JPG, atau JPEG`
            );
          if (file.size > 1000000)
            return alert(`Ukuran File ${key} tidak boleh diatas 1MB`);
        }
        formData.append(key, file);
      }
    }
    const response = await fetch(
      isFill && isFill !== null
        ? "/api/v1/dataSiswa/update"
        : "/api/v1/dataSiswa/create",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.ok) {
      alert("Data terkirim, silahkan isi data selanjutnya.");
      dFull.dMaps === null ? router.push("/Users/dashboard2/forms/location") : dFull.dOrtu === null ? router.push("/Users/dashboard2/forms/parents")  :  dFull.dDocs === null ? router.push("/Users/dashboard2/forms/document")  :   router.refresh()

    } else {
      console.log(`Gagal meng${isFill ? "update" : "upload"} dokumen`);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name !== "foto") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      if (!["image/png", "image/jpg", "image/jpeg"].includes(files[0].type))
        return alert(
          `File Foto harus berupa gambar dengan format PNG, JPG, atau JPEG`
        );
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      const previewUrl = URL.createObjectURL(files[0]);
      setImagePrev(previewUrl);
    }
  };

  return (
    <>
      <div className=" bg-color-primary flex sm:w-full lg:ps-[18rem] lg:px-5  justify-center  py-6 sm:pt-10 lg:min-h-screen   max-lg:overflow-auto hidden-scrollbar ">
        <form
          method="post"
          action={""}
          onSubmit={handleLanjut}
          className="flex flex-col items-center max-lg:justify-center max-lg:pb-20 px-6 sm:px-9 lg:px-12 "
        >
          {/* Header text start  */}
          <div className="flex  items-center justify-center relative gap-4 w-full">
            <div className="absolute max-lg:hidden flex justify-between w-full">
              <button
                className={`btn ${
                  isFill && isFill !== null
                    ? isFill.status === "Diterima"
                      ? "btn-success text-success"
                      : isFill.status === "Pending" &&
                        "btn-warning text-warning"
                    : "btn-error text-error"
                } hover:bg-opacity-50  bg-opacity-25  shadow-md btn-sm  h-5`}
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
            <div className="text-center col-span-2 text-color-dark">
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
          {/* <InfoDaftarSuccess /> */}
          {/* Input data end */}
          {/* Input data start  */}
          <div className="w-full flex justify-center mb-4 relative">
            <div className="absolute w-full justify-between flex">
              <button className={`btn -ms-6 sm:-ms-10 lg:hidden rounded-s-none
              ${
                  isFill && isFill !== null
                    ? isFill.status === "Diterima"
                      ? "btn-success text-success"
                      : isFill.status === "Pending" &&
                        "btn-warning text-warning"
                    : "btn-error text-error"
                } 
              hover:bg-opacity-50 bg-opacity-25  shadow-md btn-xs  h-5 w-20`}>
                <p className=" whitespace-nowrap text-nowrap">Diterima</p>
              </button>
              <button className="btn -me-6 sm:-me-10 absolute lg:hidden rounded-e-none btn-primary flex gap-1  bg-opacity-20 hover:bg-opacity-50 text-primary hover:text-color-birulaut w-20 right-0  shadow-md btn-xs ">
                <Printer size={20} />
                <p>Print</p>
              </button>
            </div>
            <div>
              <label className="flex flex-col justify-center items-center gap-1">
                <span className="label-text text-nowrap whitespace-nowrap text-color-dark font-semibold text-base">
                  Foto Siswa
                </span>
                <div className="avatar ">
                  <div className="w-28 rounded-full  bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder border  ">
                    {imagePrev !== "" && <img src={imagePrev} />}
                  </div>
                </div>
                {imagePrev === "" && (
                  <div className="absolute mt-7 flex items-end justify-end  text-color-secondary w-28 h-28">
                    <Pencil size={32} className="" />
                  </div>
                )}
              </label>
              <input
                type="file"
                onChange={handleChange}
                name="foto"
                className="absolute bg-color-birulaut h-28 w-28 rounded-full -mt-28 opacity-0 cursor-pointer"
                required
              />
            </div>
          </div>
          <div className="flex-col flex lg:grid lg:grid-cols-3  gap-4 gap-x-6">
            {dataInputDaftar.map((cb, index) => (
              <InputFormUser key={index} handleChange={handleChange} cb={cb} />
            ))}
          </div>
          <div className="w-full mt-5 gap-3  flex justify-end">
            <button
              onClick={handleLanjut}
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

export default ConstentDashFull;

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
