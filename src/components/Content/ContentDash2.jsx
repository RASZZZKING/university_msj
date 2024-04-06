"use client";

import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ContentDash2 = ({ dataUser, isFill }) => {
  const id = isFill?.id;
  console.log("🚀 ~ handleSubmit ~ id:", id);

  const fill = isFill ? 1 : 0;
  console.log(isFill);
  const [inputData, setInputData] = useState(-1);
  const [historyInput, setHistoryInput] = useState(fill);

  // router
  const router = useRouter();

  //state
  const [logState, setLogState] = useState(0);
  const [formData, setFormData] = useState({
    email: dataUser.email,
    nama: dataUser.nama,
    nomor: dataUser.nomor,
    tahun: 2024,
    gelombang: 3,
    password: dataUser.password,
    jalur: dataUser.jalur,
    jurusanAsal: isFill ? isFill.jurusanAsal : "",
    jenjang: isFill ? isFill.jenjang : "",
    prodi: isFill ? isFill.prodi : "",
    emailOrangTua: isFill ? isFill.emailOrangTua : "",
    namaOrangTua: isFill ? isFill.namaOrangTua : "",
    nomorOrangTua: isFill ? isFill.nomorOrangTua : "",
    alamat: isFill ? isFill.alamat : "",
    alamatOrangTua: isFill ? isFill.alamatOrangTua : "",
    NIK: isFill ? isFill.NIK : "",
  });

  //ref
  const input1 = useRef();

  //func
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((dataPrev) => ({
      ...dataPrev,
      [name]: value,
    }));
  };

  const nextState = (param) => {
    if (inputData !== -1) {
      const keyowrd1 = input1.current.value;
      if (!keyowrd1) return;
    }
    const newState = param + 1;
    if (inputData === 0) {
      if (
        formData.jurusanAsal.trim() === "" ||
        formData.jenjang.trim() === "" ||
        formData.prodi.trim() === ""
      ) {
        setLogState(2);
        setTimeout(() => {
          setLogState(0);
        }, 2000);
        return;
      }
    } else if (inputData === 1) {
      if (
        formData.emailOrangTua.trim() === "" ||
        formData.namaOrangTua.trim() === "" ||
        formData.nomorOrangTua.trim() === ""
      ) {
        setLogState(2);
        setTimeout(() => {
          setLogState(0);
        }, 2000);
        return;
      }
    } else if (inputData === 2) {
      if (
        formData.emailOrangTua.trim() === "" ||
        formData.namaOrangTua.trim() === "" ||
        formData.nomorOrangTua.trim() === ""
      ) {
        setLogState(2);
        setTimeout(() => {
          setLogState(0);
        }, 2000);
        return;
      }
    }
    setInputData(newState);
  };

  const previousState = (param) => {
    const newState = param - 1;
    setInputData(newState);
  };

  const handleSubmit = async(event) => {
    const keyowrd1 = input1.current.value;
    if (!keyowrd1) return;
    event.preventDefault();
    if (
      formData.jurusanAsal.trim() === "" ||
      formData.jenjang.trim() === "" ||
      formData.prodi.trim() === ""
    )
      return;
    if (
      formData.emailOrangTua.trim() === "" ||
      formData.namaOrangTua.trim() === "" ||
      formData.nomorOrangTua.trim() === ""
    )
      return;
    if (
      formData.alamat.trim() === "" ||
      formData.alamatOrangTua.trim() === "" ||
      formData.NIK.trim() === ""
    ) {
      setLogState(2);
      setTimeout(() => {
        setLogState(0);
      }, 2000);
      return;
    }
    const {
      email,
      nama,
      nomor,
      tahun,
      gelombang,
      namaOrangTua,
      emailOrangTua,
      nomorOrangTua,
      alamat,
      alamatOrangTua,
      password,
      jalur,
      jenjang,
      jurusanAsal,
      prodi,
      NIK,
    } = formData;
    let data = {
      email,
      nama,
      nomor,
      tahun,
      gelombang,
      namaOrangTua,
      emailOrangTua,
      nomorOrangTua,
      alamat,
      alamatOrangTua,
      password,
      jalur,
      jenjang,
      jurusanAsal,
      prodi,
      NIK,
    };

    if (isFill) {
      data = {
        id,
        email,
        nama,
        nomor,
        tahun,
        gelombang,
        namaOrangTua,
        emailOrangTua,
        nomorOrangTua,
        alamat,
        alamatOrangTua,
        password,
        jalur,
        jenjang,
        jurusanAsal,
        prodi,
        NIK,
      };
    }

    const response = await fetch(
      isFill && isFill !== null
        ? "/api/v1/calonMahasiswa/update"
        : "/api/v1/calonMahasiswa/create",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const tampilKan = await response.json();
    console.log({ tampilKan });

    setLogState(1);
    setTimeout(() => {
      setHistoryInput(1);
      setInputData(-1);
      setLogState(0);
    }, 2000);
  };
  return (
    <>
      <div
        className={`flex ${logState === 0 ? "hidden" : null} justify-center`}
      >
        <div
          role="alert"
          className={`alert alert-${
            logState === 1 ? "success" : "error"
          } absolute z-10 mt-5 w-auto`}
        >
          {logState === 1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}

          <span>
            {logState === 1 ? "Berhasil!" : "Data tidak boleh kosong!!!"}
          </span>
        </div>
      </div>
      <div
        className="bg-color-primary w-full min-h-svh max-h-svh flex justify-center xl:justify-around max-xl:items-center"
        data-theme="light"
      >
        <div className="min-h-svh max-h-svh flex justify-center items-center ">
          <Image
            src={"/../../favicon.ico"}
            height={1000}
            width={1000}
            className="aspect-square h-96 w-96 max-xl:hidden flex-none rounded-xl object-cover"
          />
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <div className="text-center justify-center">
            {historyInput === 0 ? inputData === -1 (
              <>
                <h1 className="text-2xl font-bold drop-shadow-2xl">
                  Yuk Lengkapi Data!
                </h1>
                <p className="pb-6 pt-3 text-sm max-w-sm max-w-440">
                  Segera lengkapi data sebelum tanggal akhir daftar tahap akhir,
                  cek info secara berkala ya!
                </p>
              </>
            ) : null}
            {historyInput === 1 && inputData === -1 ? (
              <>
                <h1 className="text-2xl font-bold drop-shadow-2xl">
                  Ada Yang Perlu Diubah?
                </h1>
                <p className="pb-6 pt-3 text-sm max-w-sm max-w-440">
                  Segera Ubah Data sebelum tanggal akhir daftar tahap akhir, cek
                  info secara berkala ya!
                </p>
              </>
            ) : null}
          </div>
          <div className="card shrink-0 w-full max-w-sm max-w-440 shadow-2xl bg-color-primary">
            <form className="card-body" method="POST" onSubmit={handleSubmit}>
              {/* {INPUT STATE} */}
              {inputData === 0 ? (
                <>
                  <label className="label flext justify-center">
                    <span className="label-text text-lg -mb-4 text-center font-bold text-color-birulaut">
                      Data Calon Mahasiswa
                    </span>
                  </label>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Asal Jurusan
                      </span>
                    </label>
                    <select
                      value={formData.jurusanAsal}
                      onChange={handleChange}
                      name="jurusanAsal"
                      ref={input1}
                      className="select select-bordered w-full max-w-xs"
                      required
                    >
                      <option value="" disabled>
                        pilih jurusan
                      </option>
                      <option value="SMA">SMA</option>
                      <option value="SMK">SMK</option>
                      <option value="Paket_C">Paket C</option>
                      <option value="lanjutS1">
                        Pindahan S1/ Lulusan S1 & D3 (lanjut S1)
                      </option>
                      <option value="lanjutS2">S1 (lanjut S2)</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Jenjang
                      </span>
                    </label>
                    <select
                      value={formData.jenjang}
                      onChange={handleChange}
                      name="jenjang"
                      ref={input1}
                      className="select select-bordered w-full max-w-xs"
                      required
                    >
                      <option value="" disabled>
                        pilih jenjang
                      </option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="Profesi">Profesi</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Program Studi
                      </span>
                    </label>
                    <select
                      value={formData.prodi}
                      onChange={handleChange}
                      name="prodi"
                      ref={input1}
                      className="select select-bordered w-full max-w-xs"
                      required
                    >
                      <option value="" disabled>
                        pilih program
                      </option>
                      <option value="Kedokteran">Kedokteran</option>
                      <option value="Argobisnis">Argobisnis</option>
                    </select>
                  </div>
                </>
              ) : null}
              {inputData === 1 ? (
                <>
                  <label className="label flext justify-center">
                    <span className="label-text text-lg -mb-4 text-center font-bold text-color-birulaut">
                      Data Orangtua Mahasiswa
                    </span>
                  </label>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Email Orang Tua
                      </span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.emailOrangTua}
                      name="emailOrangTua"
                      ref={input1}
                      type="text"
                      placeholder="email"
                      className="input input-bordered  max-xl:h-10"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Nama Orang Tua
                      </span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.namaOrangTua}
                      name="namaOrangTua"
                      ref={input1}
                      type="nama"
                      placeholder="nama"
                      className="input input-bordered  max-xl:h-10"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Nomor Seluler Orang Tua
                      </span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.nomorOrangTua}
                      name="nomorOrangTua"
                      ref={input1}
                      type="nomor"
                      placeholder="+62808080080"
                      className="input input-bordered  max-xl:h-10"
                      required
                    />
                  </div>
                </>
              ) : null}
              {inputData === 2 ? (
                <>
                  <label className="label flext justify-center">
                    <span className="label-text text-lg -mb-4 text-center font-bold text-color-birulaut">
                      Data Alamat Mahasiswa
                    </span>
                  </label>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Alamat
                      </span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.alamat}
                      name="alamat"
                      ref={input1}
                      type="text"
                      placeholder="alamat"
                      className="input input-bordered  max-xl:h-10"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        Alamat Orang Tua
                      </span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.alamatOrangTua}
                      name="alamatOrangTua"
                      ref={input1}
                      type="text"
                      placeholder="alamat orang tua"
                      className="input input-bordered  max-xl:h-10"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-color-dark font-semibold">
                        NIK
                      </span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formData.NIK}
                      name="NIK"
                      ref={input1}
                      type="text"
                      placeholder="nomor induk keluarga"
                      className="input input-bordered  max-xl:h-10"
                      required
                    />
                  </div>
                </>
              ) : null}

              {/* {BTN STATE} */}
              {inputData === -1 ? (
                <button
                  onClick={() => nextState(inputData)}
                  className="btn btn-md flex-1 btn-color-dark"
                >
                  {historyInput === 0 ? "Lengkapi" : "Ubah Data"}
                  <FontAwesomeIcon
                    icon={faUserPen}
                    width={1000}
                    height={1000}
                    className="w-4 h-4 ms-1  text-color-dark "
                  />
                </button>
              ) : null}
              {inputData === 0 ? (
                <div className="form-control flex-row mt-4 gap-2">
                  <button
                    onClick={() => nextState(inputData)}
                    className="btn border-color-birulaut hover:bg-gray hover:text-color-dark hover:border-color-primary bg-color-primary btn-md flex-1"
                  >
                    Next
                  </button>
                </div>
              ) : null}
              {inputData === 1 ? (
                <div className="form-control flex-row mt-4 gap-2">
                  <button
                    onClick={() => previousState(inputData)}
                    className="btn border-color-birulaut hover:bg-gray hover:text-color-dark hover:border-color-primary bg-color-primary btn-md flex-1"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => nextState(inputData)}
                    className="btn border-color-birulaut hover:bg-gray hover:text-color-dark hover:border-color-primary bg-color-primary btn-md flex-1"
                  >
                    Next
                  </button>
                </div>
              ) : null}
              {inputData === 2 ? (
                <div className="form-control flex-row mt-4 gap-2">
                  <button
                    onClick={() => previousState(inputData)}
                    className="btn border-color-birulaut hover:bg-gray hover:text-color-dark hover:border-color-primary bg-color-primary btn-md flex-1"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="btn border-color-birulaut hover:bg-gray hover:text-color-dark hover:border-color-primary bg-color-primary btn-md flex-1"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDash2;
