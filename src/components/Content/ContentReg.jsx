"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";


const ContentReg = ({user}) => {


    const countToken = user ? 1 : 0
  const [regPage, setRegPage] = useState(countToken);
    const regInput = useRef();
    const route = useRouter();
    const [alertState, setAlertState] = useState("hidden");
    const [dangerState, setDangerState] = useState("hidden");
    //state
    const [formData, setFormData] = useState({
      nama: "",
      email: user?.user.email,
      nomor: "",
      jenjang: "",
      jalur: "",
      password: "",
      password2: "",
    });
  
    //func
  
    const nextPage = (params) => {
      if (params !== 0) {
        const keyword = regInput.current.value;
        if (!keyword) return;
      }
      if (regPage === 1) {
        if (
          formData.nama.trim() === "" ||
          formData.nomor.trim() === "" ||
          formData.jalur.trim() === ""
        )
          return;
      }
      const newPage = params + 1;
      setRegPage(newPage);
    };
  
    const prevPage = () => {
      setRegPage(regPage - 1);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((dataPrev) => ({
        ...dataPrev,
        [name]: value,
      }));
    };
    const handleSubmit = (event) => {
      const keyowrd1 = regInput.current.value;
      if (!keyowrd1) return;
      event.preventDefault();
      if (
        formData.nama.trim() === "" ||
        formData.nomor.trim() === "" ||
        formData.jalur.trim() === ""
      )
        return;
      if (
        formData.email.trim() === "" ||
        formData.password.trim() === "" ||
        formData.password2.trim() === ""
      )
        return;
      if (formData.password.trim() !== formData.password2.trim()) {
        setDangerState("");
        setAlertState("c10");
        setTimeout(() => {
          setDangerState("hidden");
          setAlertState("hidden");
        }, 2000);
      }
      if (formData.password.trim() === formData.password2.trim()) {
        setDangerState("c10");
        setAlertState("");

        const { nama, email, nomor , jalur, password } = formData
        const data = { nama, email, nomor, jalur, password }

        const proses = async(data) => {
          const response = await fetch("api/v1/account/create", {
            method: "POST",
            body: JSON.stringify(data)
          })
          const createAccount = await response.json()
          console.log({createAccount});
        }

        proses(data)


        setTimeout(() => {
          route.push("/Users/dashboard2");
        }, 2000);
      }
    };


    const handleDaftar = async(e) => {
      e.preventDefault()
      if (
        formData.nama.trim() === "" ||
        formData.nomor.trim() === "" ||
        formData.jenjang.trim() === "" ||
        formData.jalur.trim() === "" 
      ) return alert("Data tidak boleh kosong")

      const {nama,nomor,jenjang,jalur,email} = formData
      const data = {nama,nomor,jenjang,jalur,email}

      const response = await fetch(
        "/api/v1/account/create", {
          method: "POST",
          body: JSON.stringify(data)
        }
      )
      const showIt = await response.json()
      console.log("🚀 ~ handleDaftar ~ showIt:", showIt)
      alert("Akun behasil terdaftar, silahkan isi formulir")
      route.push("/Users/dashboard2/forms/student");
    }

    return (
      <>
        <div className={`flex ${alertState} ${dangerState} justify-center`}>
          <div
            role="alert"
            className={`alert ${alertState === "" ? "alert-success" : null} ${
              dangerState === "" ? "alert-error" : null
            } absolute z-10 mt-5 w-auto`}
          >
            {alertState === "" ? (
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
            ) : null}
            {dangerState === "" ? (
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
            ) : null}
            <span>
              {alertState === "" ? "Berhasil Daftar!" : null}
              {dangerState === "" ? "Masukan Password dengan benar" : null}{" "}
            </span>
          </div>
        </div>
  
        <div
          className="bg-color-primary w-full min-h-svh  flex  justify-around items-center"
          data-theme="light"
        >
          <div className="py-10 bg-color-primary shadow-xl max-xl:hidden flex-none rounded-xl">
          <Image
            src={"/logo/register-ai.png"}
            height={1000}
            width={1000}
            className="aspect-video w-[30rem]  object-scale-down"
          />
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <div className="text-center justify-center">
              <h1 className="text-5xl font-bold drop-shadow-2xl">
                Daftar sekarang!
              </h1>
              <p className="pb-1 pt-3 text-sm max-w-sm max-w-440">
                Daftarkan segera, Nikmati Fasilitas yang telah kami sediakan.
              </p>
              <div className="flex  justify-center pb-6 text-sm max-w-sm max-w-440">
                <p>Jalur Pendaftaran</p>
                <div className="dropdown dropdown-left dropdown-bottom  dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-circle btn-ghost btn-xs text-info"
                  >
                    <svg
                      tabIndex={0}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    tabIndex={0}
                    className="card compact dropdown-content z-[1] shadow bg-base-100 max-w-52 rounded-box w-64"
                  >
                    <div tabIndex={0} className="card-body ">
                      <h2 className="card-title text-base">
                        2 Jalur Pendaftaran
                      </h2>
                      <p>Normal</p>
                      <p>Beasiswa Yatim Dhuafa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-color-primary">
              <form className="card-body" method="POST">
                {regPage === 1 ? (
                  <>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-color-dark font-semibold">
                          Nama Lengkap
                        </span>
                      </label>
                      <input
                        value={formData.nama}
                        onChange={handleChange}
                        ref={regInput}
                        type="text"
                        placeholder="nama"
                        className="input input-bordered   "
                        required
                        name="nama"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-color-dark font-semibold">
                          Nomor Seluler
                        </span>
                      </label>
                      <input
                        value={formData.nomor}
                        onChange={handleChange}
                        ref={regInput}
                        type="number"
                        placeholder="nomor"
                        className="input input-bordered  "
                        required
                        name="nomor"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-color-dark font-semibold">
                          Jenjang Pendidikan
                        </span>
                      </label>
                      <select
                        value={formData.jenjang}
                        onChange={handleChange}
                        name="jenjang"
                        ref={regInput}
                        className="select select-bordered w-full max-w-xs"
                        required
                      >
                        <option value="" disabled>
                          pilih jenjang pendidikan
                        </option>
                        <option value="SMPIT">Sekolah Menengah Pertama Islam Terpadu</option>
                        <option value="SMAIT">Sekolah Menengah Atas Islam Terpadu</option>
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-color-dark font-semibold">
                          Jalur Pendaftaran
                        </span>
                      </label>
                      <select
                        value={formData.jalur}
                        onChange={handleChange}
                        name="jalur"
                        ref={regInput}
                        className="select select-bordered w-full max-w-xs"
                        required
                      >
                        <option value="" disabled>
                          pilih jalur
                        </option>
                        <option value="Normal">Normal</option>
                        <option value="Beasiswa_Yatim">Beasiswa Yatim Dhuafa</option>
                      </select>
                    </div>
                  </>
                ) : null}
  
                {regPage === 2 ? (
                  <>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-color-dark font-semibold">
                          Email
                        </span>
                      </label>
                      <input
                        value={formData.email}
                        onChange={handleChange}
                        ref={regInput}
                        disabled
                        type="email"
                        name="email"
                        placeholder={user?.user.email}
                        className="input input-bordered  "
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-color-dark font-semibold">
                          Password
                        </span>
                      </label>
                      <input
                        value={formData.password}
                        onChange={handleChange}
                        ref={regInput}
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered  "
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-color-dark font-semibold">
                          Ulangi Password
                        </span>
                      </label>
                      <input
                        value={formData.password2}
                        onChange={handleChange}
                        ref={regInput}
                        type="password"
                        name="password2"
                        placeholder="password"
                        className="input input-bordered  "
                        required
                      />
                    </div>
                  </>
                ) : null}
  
                <div className="form-control mt-2">
                  {regPage === 0 ? (
                    <Link
                      href="/api/auth/signin"
                      className="btn btn-color-dark"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        width={1000}
                        height={1000}
                        className="w-4 h-4 mr-4 -mt-0.5"
                      />
                      SIGN UP WITH GOOGLE
                    </Link>
                  ) : null}
                  {regPage === 1 ? (
                    <button
                      onClick={handleDaftar}
                      className="btn bg-color-birulaut border-color-primary text-color-primary hover:scale-105 transition-all duration-75 hover:bg-color-birulaut hover:opacity-90"
                    >
                      Daftar
                    </button>
                  ) : null}
                  {regPage === 2 ? (
                    <div className="flex flex-row justify-center gap-2 max-w-full">
                      <button
                        onClick={prevPage}
                        className="btn border-color-birulaut bg-color-primary text-color-birulaut hover:bg-color-gray hover:border-color-primary hover:text-color-dark w-1/2"
                      >
                        Previous
                      </button>
  
                      <button
                        onClick={handleSubmit}
                        className="btn border-color-birulaut bg-color-primary text-color-birulaut hover:bg-color-gray hover:border-color-primary hover:text-color-dark w-1/2"
                      >
                        Daftar
                      </button>
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default ContentReg