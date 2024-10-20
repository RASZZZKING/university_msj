"use client";
import { Printer, UserRectangle } from "@phosphor-icons/react";
import { GraduationCap } from "@phosphor-icons/react/dist/ssr";
import React, { useState, useEffect, useRef } from "react";
import InfoDaftarSuccess from "../utils/InfoDaftarSuccess";
import { useRouter } from "next/navigation";

const ContentDashFiles = ({ data, isFill, dFull }) => {
  const router = useRouter()
  const [url, setUrl] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [filesData, setFilesData] = useState({
    id: isFill ? isFill.id : "",
    id_user: data.id, // Pastikan id_user adalah string
    kartu_keluarga: isFill ? isFill.kartu_keluarga : "",
    akte_kelahiran: isFill ? isFill.akte_kelahiran : "",
    ktp_orang_tua: isFill ? isFill.ktp_orang_tua : "",
    skl: isFill ? isFill.skl : "",
    ijazah: isFill ? isFill.ijazah : "",
    shun_skhun: isFill ? isFill.shun_skhun : "",
    rapor: isFill ? isFill.rapor : "",
    kartu_nisn: isFill ? isFill.kartu_nisn : "",
  });
  const [preview, setPreview] = useState({
    kartu_keluarga: "",
    akte_kelahiran: "",
    ktp_orang_tua: "",
    skl: "",
    ijazah: "",
    shun_skhun: "",
    rapor: "",
    kartu_nisn: "",
  })

  const handleChange = (e) => {
    const { name, files } = e.target;
    setFilesData((prevState) => ({
      ...prevState,
      [name]: files[0], // Set file ke state
    }));

    const prv = URL.createObjectURL(files[0])
    setPreview((prev)=>({
      ...prev,
      [name]: prv
    }))
    
  };

  const dataInput = {
    items: [
      {
        title: "SKL",
        placeholder: "Upload nomor SKL",
        lihat: "Lihat SKL",
        name: "skl",
        value: filesData.skl,
      },
      {
        title: "IJAZAH",
        placeholder: "Upload nomor Ijazah",
        lihat: "Lihat IJAZAH",
        name: "ijazah",
        value: filesData.ijazah,
      },
      {
        title: "SHUN / SKHUN",
        placeholder: "Upload nomor SHUN / SKHUN",
        lihat: "Lihat SHUN / SKHUN",
        name: "shun_skhun",
        value: filesData.shun_skhun,
      },
      {
        title: "RAPOR",
        placeholder: "Upload nomor Rapor",
        lihat: "Lihat RAPOR",
        name: "rapor",
        value: filesData.rapor,
      },
      {
        title: "Kartu NISN",
        placeholder: "Upload nomor Kartu NISN",
        lihat: "Lihat Kartu NISN",
        name: "kartu_nisn",
        value: filesData.kartu_nisn,
      },
    ],

    items2: [
      {
        title: "Kartu Keluarga",
        placeholder: "Upload nomor kartu keluarga",
        lihat: "Lihat Kartu Keluarga",
        name: "kartu_keluarga",
        value: filesData.kartu_keluarga,
      },
      {
        title: "Akte Kelahiran",
        placeholder: "Upload nomor akte kelahiran",
        lihat: "Lihat Akte Kelahiran",
        name: "akte_kelahiran",
        value: filesData.akte_kelahiran,
      },
      {
        title: "KTP Orang Tua",
        placeholder: "Upload nomor KTP orang tua",
        lihat: "Lihat KTP Orang Tua",
        name: "ktp_orang_tua",
        value: filesData.ktp_orang_tua,
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(
      filesData.kartu_keluarga === "" ||
      filesData.akte_kelahiran === "" ||
      filesData.ktp_orang_tua === "" ||
      filesData.skl === "" ||
      filesData.ijazah === "" ||
      filesData.shun_skhun === "" ||
      filesData.rapor === "" ||
      filesData.kartu_nisn === "" 
    ) return alert("Tidak boleh ada data yang kosong!!!")

    const formData = new FormData();
    formData.append("id_user", filesData.id_user); // Tambahkan id_user ke formData
    formData.append("id", filesData.id); // Tambahkan id_user ke formData

    for (const key in filesData) {
      if (key !== "id_user" && key !== "id" && filesData[key]) {
        // Exclude id_user
        const file = filesData[key];

        if (
          !["image/jpg", "image/jpeg", "image/png"].includes(file.type) &&
          typeof file === "object"
        ) {
          alert(
            `File ${key} harus berupa gambar dengan format PNG, JPG, atau JPEG`
          );
          return;
        }

        if (file.size > 1_000_000 && typeof file === "object") {
          // Batas ukuran 1MB
          alert(`Ukuran file ${key} tidak boleh lebih dari 1MB`);
          return;
        }

        formData.append(key, file); // Masukkan file ke formData
      }
    }

    try {
      const response = await fetch(
        isFill ? "/api/v1/dataDocs/update" : "/api/v1/dataDocs/create",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert(`Dokumen berhasil di${isFill ? "update" : "upload"}`)
        dFull.dSiswa === null ? router.push("/Users/dashboard2/forms/student") : dFull.dOrtu  === null? router.push("/Users/dashboard2/forms/parents")  : dFull.dOrtu  === null? router.push("/Users/dashboard2/forms/parents")  : router.refresh()
      } else {
        console.log(`Gagal meng${isFill ? "update" : "upload"} dokumen`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSee = (urll) => {
    setUrl(urll);
    setIsOpen(true);
  };
  const onCLose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* flex */}
      <div className="max-sm:hidden min-h-[35.5svh]  justify-center hidden">
        <div className="flex items-center ">
          <div className="text-center text-color-dark">
            <h1 className="text-2xl font-bold drop-shadow-2xl">
              UNINDRA VIDEOS !!!
            </h1>
          </div>
        </div>
      </div>
      <div className="flex lg:flex sm:max-xl:bottom-0  sm:w-full sm:rounded-t-3xl lg:rounded-none sm:shadow-inner  lg:shadow-none lg:ps-[18rem] justify-center px-5 py-6 sm:pt-10  bg-color-primary  lg:min-h-screen  hidden-scrollbar ">
        <form onSubmit={handleSubmit} method="post" action={""} className=" flex flex-col items-center gap-6 justify-center  sm:px-16">
          {/* <div className="flex flex-col items-center max-lg:justify-center max-lg:pb-20 px-6 sm:px-9 lg:px-12">  sm:max-lg:px-6*/}
          {/* Header text start  */}
          <InfoDaftarSuccess isFill={isFill} />
          <div className="flex items-center justify-center w-full relative ">
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
            <div className="text-center text-color-dark">
              <h1 className="text-2xl lg:text-3xl font-semibold drop-shadow-2xl">
                Lengkapi Dokumen!
              </h1>
              <p className=" pt-3 text-sm max-w-sm max-w-440 text-center ">
                Pastikan anda memasukan data pribadi dengan benar, besar kecil
                huruf nama sesuai Kartu Keluarga!
              </p>
            </div>
          </div>
          {/* Header text end */}
          {/* Input data start  */}
          <div className="flex gap-2 w-full text-color-dark">
            <UserRectangle size={26} />
            <p className="text-xl font-semibold">Dokumen Keluarga</p>
          </div>
          <div className="flex-col flex sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-4 gap-x-6 ">
            {dataInput.items2.map((cb, index) => (
              <InputFormUser
                url={preview[cb.name] !== "" ? preview[cb.name] : isFill ? `/document/${cb.value}` :  null }
                key={index}
                cb={cb}
                isHasFill={preview[cb.name] !== "" ? true : isFill ? true : false}
                handleSee={handleSee}
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className="flex gap-2 w-full text-color-dark">
            <GraduationCap size={26} />
            <p className="text-xl font-semibold">Dokumen Sekolah</p>
          </div>
          <div className="flex-col flex sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-4 gap-x-6 ">
            {dataInput.items.map((cb, index) => (
              <InputFormUser
                url={preview[cb.name] !== "" ? preview[cb.name] : isFill ? `/document/${cb.value}` :  null }
                key={index}
                cb={cb}
                isHasFill={ preview[cb.name] !== "" ? true : isFill  ? true : false}
                handleSee={handleSee}
                handleChange={handleChange}
              />
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

      <Outer onClose={onCLose} url={url} isVisible={isOpen} />
    </>
  );
};

export default ContentDashFiles;

const InputFormUser = ({ cb, handleChange, isHasFill, handleSee, url }) => (
  <div className="w-full">
    <span className="label-text text-color-dark font-semibold w-full text-base">
      {cb.title}
    </span>
    <input
      onChange={handleChange}
      type="file"
      name={cb.name}
      className={
        isHasFill
          ? "file-input file-input-bordered file:border-success file-input-success file:text-success file:bg-opacity-15 text-color-dark bg-color-primary file:rounded-md  w-full mt-2 text-md"
          : "file-input file-input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
      }
    />
    {isHasFill && (
      <div className="w-full flex justify-end">
        <div
          onClick={() => handleSee(url)}
          className="mt-2 btn btn-xs btn-success bg-opacity-15 hover:bg-opacity-40 text-success"
        >
          lihat
        </div>
      </div>
    )}
  </div>
);
``;

export const Outer = ({ onClose, isVisible, url }) => {
  const showImg = useRef();
  const [slow, setSlow] = useState(false);

  const handleClose = () => {
    setSlow(true);
    setTimeout(() => {
      onClose();
      setSlow(false);
    }, 300);
  };

  const handleClickOutside = (e) => {
    if (showImg.current && !showImg.current.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);
  return (
    <div
      className={`fixed
      ${isVisible ? "flex" : "hidden"}
      ${slow ? "fadeOut" : "fadeIn3"}
    top-0 z-[100] left-0  justify-center w-full h-full max-h-screen items-center`}
    >
      <div ref={showImg} className=" w-[50vh]  flex justify-center items-center">
        <img src={url} alt={url} className="rounded-md object-scale-down" />
      </div>
    </div>
  );
};
