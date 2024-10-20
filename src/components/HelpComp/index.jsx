"use client";
import React, { useState } from "react";
import Footer from "../Footer";
import PopUpInvoice from "../PopUpInvoice";

const HelpComp = ({pendaftar}) => {
  const [steps, setSteps] = useState(3);
  const [popUp, setPopUp] = useState(false);
  const [jenjangS, setJenjangs] = useState();
  const [dev, setDev] = useState(0);
  const handleInvoice = (event, jenjang) => {
    event.preventDefault();
    setPopUp(!popUp);
    setJenjangs(jenjang);
  };

  const InfoDaftar = () => (
    <div className="flex justify-center items-center gap-4 flex-col">
      <p className="text-xl font-extralight text-center">
        PROSEDUR PENDAFTARAN PSB 2024-2025
      </p>
      <div className="flex sm:justify-between flex-col items-center gap-4 w-full flex-wrap">
        <ul className="steps steps-horizontal lg:w-9/12">
          <li
            className={`step ${
              steps === 3 || steps === 2 || steps === 1 || steps === 0
                ? "step-neutral"
                : ""
            }`}
            // onClick={(event) => handleSteps(0, event)}
          >
            Masuk Menu Register
          </li>
          <li
            className={`step ${
              steps === 3 || steps === 2 || steps === 1 ? "step-neutral" : ""
            }`}
            // onClick={(event) => handleSteps(1, event)}
          >
            Masuk Via Google
          </li>
          <li
            className={`step ${
              steps === 3 || steps === 2 ? "step-neutral" : ""
            }`}
            // onClick={(event) => handleSteps(2, event)}
          >
            Lengkapi Data Utama
          </li>
          <li
            className={`step ${steps === 3 ? "step-neutral" : ""}`}
            // onClick={(event) => handleSteps(3, event)}
          >
            Selamat Akun Terdaftar
          </li>
        </ul>
        <div className="flex flex-col gap-3 w-full">
          <>
            <div
              className="collapse collapse-arrow border "
              // onClick={(event) => handleSteps(0, event)}
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Daftar Akun
              </div>
              <div className="collapse-content">
                <p className="sm:hidden">
                  1. Klik logo di pojok kanan atas, <br />
                  2. Pilih menu register, <br />
                  3. Masuk akun via Google, lengkapi formuliar yang tersedia,{" "}
                  <br />
                  4. Selamat akun anda terdaftar. Akun anda telah dibuat, anda
                  bisa melihat banyak info di dashboard users account mulai dari
                  data pembayaran, dan peserta wajib mengisikan data data
                  formulir yang tersedia, mulai dari data siswa, data orang tua,
                  data alamat, dan data dokumentasi.
                </p>
                <p className="max-sm:hidden">
                  1. Klik menu Register di menu paling atas, <br />
                  2. Pilih menu register, <br />
                  3. Masuk akun via Google, lengkapi formuliar yang tersedia,{" "}
                  <br />
                  4. Selamat akun anda terdaftar. <br />
                  Jika Akun anda telah dibuat, anda bisa melihat banyak info di
                  dashboard users account mulai dari data pembayaran, dan banyak
                  fitur lainnya.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow border ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Syarat Pendaftaran
              </div>
              <div className="collapse-content">
                <ol>
                  <li>1. Muslimah</li>
                  <li>
                    2. Telah Tamat SD/MI untuk SMPIT atau Tamat SMP/MTs untuk
                    SMAIT
                  </li>
                  <li>3. Bersedia Tinggal di Asrama</li>
                  <li>4. Foto Copy Ijazah 2 Lembar</li>
                  <li>5. Foto Copy Rapot (Jika Pindahan)</li>
                  <li>6. Foto Copy NISN</li>
                  <li>7. Foto Copy KK 2 Lembar</li>
                  <li>8. Foto Copy KTP Ortu 2 Lembar</li>
                  <li>
                    9. Foto Siswa 2x3 = 3 Lembar, 3x4 = 3 Lembar, 4x6 = 3 Lembar
                  </li>
                </ol>
              </div>
            </div>
            <div className="collapse collapse-arrow border ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Pembiayaan
              </div>
              <div className="collapse-content ">
                <div className="flex flex-col">
                  <p>Klik tombol untuk melihat rincian pembayaran</p>
                  <div className="flex gap-2 my-4 flex-wrap justify-evenly md:justify-start">
                    <div
                      onClick={(event) => handleInvoice(event, "SMP")}
                      className="btn bg-color-birulaut bg-opacity-20 text-color-birulaut border-color-birulaut"
                    >
                      SMP
                    </div>
                    <div
                      onClick={(event) => handleInvoice(event, "SMA")}
                      className="btn bg-opacity-10 border-color-placeholder"
                    >
                      SMA
                    </div>
                    <div
                      onClick={(event) => handleInvoice(event, "Pindahan")}
                      className="btn btn-info text-info bg-opacity-20 "
                    >
                      PINDAHAN
                    </div>
                    <div
                      onClick={(event) => handleInvoice(event, "Santri")}
                      className="btn btn-success bg-opacity-20 text-success border-success"
                    >
                      SANTRI MUSLIMAH SEJATI
                    </div>
                  </div>
                  <p>
                    Pembayaran bisa dicicil Sampai Tanggal, Desember 2024
                    (karena sebagai Syarat Pengambilan Seragam dan Buku harus
                    sudah lunas Pembiayaan)
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow border">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Kontak Pendaftaran
              </div>
              <div className="collapse-content  ">
                <div className="flex gap-4">
                  <div className="p-4 rounded-xl  shadow-inner flex gap-5 bg-color-putihbg items-center justify-center">
                    <div className="w-14 h-14 bg-color-placeholder rounded-full"></div>
                    <div className="flex flex-col justify-evenly h-full">
                      <p className="font-semibold">Ustad Umar Sahid</p>
                      <p>088328432924</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl  shadow-inner flex gap-5 bg-color-putihbg items-center justify-center">
                    <div className="w-14 h-14 bg-color-placeholder rounded-full"></div>
                    <div className="flex flex-col justify-evenly h-full">
                      <p className="font-semibold">Ustadzah Uut Ahmad</p>
                      <p>088328432924</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
  const ParallaxInfo = () => (
    <div className="h-64 w-full rounded-xl  flex flex-col gap-14 bg-color-dark text-color-primary justify-center items-center mb-10 p-4">
      <p className="font-bold md:text-3xl sm:text-2xl text-xl  text-center">
        Cek Informasi Kuota sebelum mendaftar. Ayo Buruan Daftar!!!
      </p>
      <div className="flex sm:gap-14 gap-2 ">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
            {pendaftar}
          </p>
          <p className="sm:text-base text-xs max-sm:font-semibold text-center">
            Pendaftar
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
            23
          </p>
          <p className="sm:text-base text-xs max-sm:font-semibold text-center">
            Sekolah Mendaftarkan
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
            2
          </p>
          <p className="sm:text-base text-xs max-sm:font-semibold text-center">
            Jenjang
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">
            100
          </p>
          <p className="sm:text-base text-xs max-sm:font-semibold text-center">
            Kuota Santri
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="mt-20 pt-10">
      <div className=" flex flex-col items-center  w-full px-4 sm:px-6 lg:px-12">
        <ParallaxInfo />
        <div
          className="w-full px-4 sm:px-6 lg:px-10 py-6 rounded-3xl shadow-xl flex flex-col"
          data-theme="light"
        >
          {/* <div className="tabs tabs-lifted bg-color-primary ">
            {dataHelp.data.map((cb, index) => (
              <HeadMain title={cb.nama} no={index} key={index}>
                {index}
              </HeadMain>
            ))}
          </div> */}
          <InfoDaftar />
        </div>
      </div>

      <PopUpInvoice setPopUp={setPopUp} popUp={popUp} jenjang={jenjangS} />
      <Footer />
    </div>
  );
};

export default HelpComp;
