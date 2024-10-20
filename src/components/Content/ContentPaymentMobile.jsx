"use client";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { toRupiah } from "to-rupiah";

const ContentPaymentMobile = ({dataBiaya}) => {
  const path = usePathname();
  const totalBayar = useRef();
  const tanggalBayar = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const numBayar = totalBayar.current.value;
    const tglBayar = tanggalBayar.current.value;
    // Lakukan sesuatu dengan data yang diperoleh dari input
    console.log("Username:", numBayar);
    console.log("Password:", tglBayar);
  };
  const [rnPage, setRnPage] = useState(0);
  const [steps, setSteps] = useState(3);
  const handleTab = (params) => {
    setRnPage(params);
  };
  const handleSteps = (numb, event) => {
    event.preventDefault();
    setSteps(numb);
  };
  const dataPembayaran = {
    data: [
      {
        date: "25 Juli 2024",
        name: "Uang Gedung",
        kode: "1432432432",
        siswa: "Farras AR",
        nominal: "3.000.000",
        status: "Diterima",
        img: "asdsad",
      },
      {
        date: "25 Juli 2024",
        name: "Uang SPP",
        kode: "1432432432",
        siswa: "Farras AR",
        nominal: "2.000.000",
        status: "Pending",
        img: "asdsad",
      },
      {
        date: "25 Juli 2024",
        name: "Uang Makan",
        kode: "1432432432",
        siswa: "Farras AR",
        nominal: "1.000.000",
        status: "Gagal",
        img: "asdsad",
      },
    ],
  };
  const TablePembayaranMobile = ({ cb }) => (
    <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <div className="text-xs">{cb.date}</div>
          <div className="font-semibold text-lg">{cb.name}</div>
        </div>
        <div
          className={`text-sm ${
            cb.status === "Diterima"
              ? "btn-success border-color-success text-success"
              : cb.status === "Gagal"
              ? "btn-error border-color-error text-error"
              : "btn-warning border-color-warning text-warning"
          } btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
        >
          {cb.status}
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Kode Transaksi</p>
          <p className="text-xs">{cb.kode}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Nama Siswa</p>
          <p className="text-xs">{cb.siswa}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Jumlah Bayar</p>
          <p className="text-xs">{cb.nominal}</p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut">
          Bukti
        </div>
        <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          Cetak
        </div>
      </div>
    </div>
  );
  const dataBiaya2 = {
    data: [
      {
        name: "SPP",
        nominal: "2.000.000",
        minus: "0",
        status: "Lunas",
      },
      {
        name: "Seragam",
        nominal: "2.000.000",
        minus: "0",
        status: "Lunas",
      },
      {
        name: "Uang Makan",
        nominal: "1.000.000",
        minus: "-300.000",
        status: "Cicil",
      },
      {
        name: "Uang Gedung",
        nominal: "1.000.000",
        minus: "-1.000.000",
        status: "Belum Dibayar",
      },
    ],
  };
  const TableBiayaMobile = ({ cb }) => (
    <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg">
      <div className="flex justify-between items-center pb-1">
        <div className="flex flex-col justify-center">
          <div className="font-semibold text-lg">{cb.nama_biaya}</div>
        </div>
        <div
          className={`text-sm ${
            cb.status === "Lunas"
              ? "btn-success text-success border-color-success"
              : cb.status === "Cicil"
              ? "btn-warning text-warning border-color-warning"
              : "btn-error text-error border-color-error"
          } btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
        >
          {cb.status}
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Nama Biaya</p>
          <p className="text-xs">{cb.nama_biaya}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Jumlah Biaya</p>
          <p className="text-xs">{toRupiah(cb.jumlah_biaya, {dot: "." ,floatingPoint: 0}   )}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Kurang</p>
          <p className="text-xs">Rp {cb.minus}</p>
        </div>
      </div>
      <div
        className={`${
          cb.status === "Lunas" && "hidden"
        } flex justify-end gap-2`}
      >
        <div
          className={`${
            cb.status === "Cicil" && "hidden"
          } btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut`}
        >
          Cicil
        </div>
        <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          {cb.status === "Cicil" ? cb.status : "Bayar"}
        </div>
      </div>
    </div>
  );
  const BayarContentMobile = () => (
    <div className="flex justify-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="card-title text-xl">Tambah Pembayaran</h2>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Nama Pembayaran"}
            </span>
            <select
              name={"jenis_pembayaran"}

              className="select select-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2"
              required
            >
              <option value="" checked defaultChecked disabled>
                Jenis pendaftaran
              </option>
              {dataBiaya.map((cb,i)=>
              (
                <option value={cb.nama_biaya} key={i}>
                  {cb.nama_biaya}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Jumlah Pembayaran"}
            </span>
            <input
              // onChange={()=>handleTab(1)}
              name={"name"}
              type={"number"}
              ref={totalBayar}
              placeholder={"contoh: 5000000"}
              className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
              required
            />
          </div>
          
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Bukti Pembayaran"}
            </span>
            <input
              name={"namesz"}
              type={"file"}
              className="file-input file-input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
              required
            />
          </div>
          <div className="card-actions justify-end mt-3">
            <button
              className="btn btn-primary btn-md bg-color-birulaut border-color-birulaut"
              type="submit"
            >
              Buy Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  const CaraPembayaranMobile = () => (
    <div className="flex justify-center items-center gap-6 sm:gap-8 flex-col">
      <p className="text-xl sm:text-2xl font-bold text-center text-wrap">
        PROSEDUR PEMBAYARAN PSB 2024-2025
      </p>
      <div className="flex sm:justify-between max-sm:flex-col items-center gap-4 w-full">
        <ul className="steps steps-horizontal sm:steps-vertical lg:steps-horizontal sm:h-full">
          <li
            className={`step ${
              steps === 3 || steps === 2 || steps === 1 || steps === 0
                ? "step-neutral"
                : ""
            }`}
            // onClick={(event) => handleSteps(0, event)}
          >
            Cash/Tunai
          </li>
          <li
            className={`step ${
              steps === 3 || steps === 2 || steps === 1 ? "step-neutral" : ""
            }`}
            // onClick={(event) => handleSteps(1, event)}
          >
            Via ATM
          </li>
          <li
            className={`step ${
              steps === 3 || steps === 2 ? "step-neutral" : ""
            }`}
            // onClick={(event) => handleSteps(2, event)}
          >
            Cicilan
          </li>
          <li
            className={`step ${steps === 3 ? "step-neutral" : ""}`}
            // onClick={(event) => handleSteps(3, event)}
          >
            Konfirmasi
          </li>
        </ul>
        <div className="sm:max-w-md flex flex-col gap-3">
          <div
            className="collapse collapse-arrow border "
            // onClick={(event) => handleSteps(0, event)}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Cash / Tunai
            </div>
            <div className="collapse-content">
              <p>
                Datang langsung ke Ponpes Muslimah Sejati. Alamat: Jl. Kp. Buwek
                Raya No.39 RT 02/RW 02 , Tridaya Sakti, Kec. Tambun Sel.,
                Bekasi, Jawa Barat 17510
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow border "
            // onClick={(event) => handleSteps(1, event)}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Transfer via ATM/Bank
            </div>
            <div className="collapse-content">
              <p>
                NAMA YAYASAN : AR-RISALAH DAKWAH BEKASI
                <br />
                BANK : BANK BJB SYARIAH
                <br />
                KODE BANK : 425
                <br />
                NO. REK : 5300-2060-15274
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow border "
            // onClick={(event) => handleSteps(2, event)}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Cicilan</div>
            <div className="collapse-content ">
              <p>
                Pembayaran bisa dicicil Sampai Tanggal, Desember 2024
                <br />
                (karena sebagai Syarat Pengambilan Seragam dan Buku harus sudah
                lunas Pembiayaan PPDB 100?)
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow border"
            // onClick={(event) => handleSteps(3, event)}
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Konfirmasi</div>
            <div className="collapse-content  ">
              <p>
                Setelah teransfer Konfermasi ke Panitia PSB <br /> No. WA/HP :
                0877-7333-4692 <br /> Kembali ke Menu Utama KETIK PSB <br />
                Terimakasih kami ucapkan kepada Abi/Ummi yang telah
                bersilaturahmi ke Ponpes Putri Muslimah Sejati Semoga diberikan
                kesehatan,
                <br /> kelancaran Rezekinya dan segala urusannya Mohon ke
                Ikhlasnya untuk Support Akun media Ponpes <br />
                <a
                  href="https://linktr.ee/ponpesputrimuslimahsejati"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://linktr.ee/ponpesputrimuslimahsejati
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full justify-around gap-5">

                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Cash / Tunai</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Cash / Tunai</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Cash / Tunai</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Cash / Tunai</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
                </div> */}
    </div>
  );
  return (
    <div className="lg:hidden flex justify-center py-6 sm:pt-10 bg-color-primary min-h-screen text-color-dark">
      <div className=" flex flex-col items-center pb-20 w-full px-6 ">
        {/* Header text start  */}
        <div
          className={`w-full  flex flex-col  gap-3 justify-center ${
            path !== "/Users/payment/paymentdata" &&
            path !== "/Users/payment" &&
            "h-full"
          }`}
          data-theme="light"
        >
          {(path === "/Users/payment/paymentdata" ||
            path === "/Users/payment") && (
            <>
              <p className="text-2xl font-bold">Data Pembayaran</p>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <p className="text-sm">Menampilakan 10 Data Pembayaran</p>
            </>
          )}
          <div className="max-sm:flex max-sm:flex-col justify-center items-center gap-3 sm:grid sm:grid-cols-2">
            {path === "/Users/payment/paymentdata" &&
              dataPembayaran.data.map((cb, index) => (
                <TablePembayaranMobile cb={cb} key={index} />
              ))}
            {path === "/Users/payment" &&
              dataBiaya.map((cb, index) => (
                <TableBiayaMobile cb={cb} key={index} />
              ))}
          </div>

          {path === "/Users/payment/pay" && <BayarContentMobile />}
          {path === "/Users/payment/howtopay" && <CaraPembayaranMobile />}
        </div>
      </div>
    </div>
  );
};

export default ContentPaymentMobile;
