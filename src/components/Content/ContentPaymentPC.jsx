"use client";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import PaymentPay from "../Payment/PaymentPay";
import DataBiaya from "../Payment/DataBiaya";
import DataPayment from "../Payment/DataPayment";

const ContentPaymentPC = ({dataBiaya, statusDataBiaya, dataPembayarann ,dataUser}) => {
  const path = usePathname()
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
  const TablePembiayaan = () => {
    return (
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <DataPayment
            dataPembayaran={ dataPembayarann }
            dataUser={dataUser}
            dataBiaya={dataBiaya}
          />
      </div>
    );
  };
  const TableBiaya = () => (
    <div
      role="tabpanel"
      className="tab-content  border-base-300 rounded-box p-6"
    >
                <DataBiaya dataBiaya={dataBiaya} statusDataBiaya={statusDataBiaya} />

    </div>
  );
  const CaraPembayaran = () => (
    <div
      role="tabpanel"
      className="tab-content  border-base-300 rounded-box p-6"
    >
      <div className="flex justify-center items-center gap-4 flex-col">
        <p className="text-xl font-extralight">
          PROSEDUR PEMBAYARAN PSB 2024-2025
        </p>
        <ul className="steps steps-vertical lg:steps-horizontal">
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
        <>
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
        </>
      </div>
    </div>
  );
  const BayarContent = () => (
    <div
      role="tabpanel"
      className="tab-content  border-base-300 rounded-box p-6"
    >
      <PaymentPay dataBiaya={dataBiaya} dataUser={dataUser} />
    </div>
  );
  const dataPayPC = {
    data: [
      {
        title: "Data Pembayaran",
        child: <TablePembiayaan />,
      },
      {
        title: "Data Biaya",
        child: <TableBiaya />,
      },
      {
        title: "Cara Pembayaran",
        child: <CaraPembayaran />,
      },
      {
        title: "Bayar",
        child: <BayarContent />,
      },
    ],
    path: [
      "/Users/payment", "/Users/payment/paymentdata", "/Users/payment/pay", "/Users/payment/howtopay"
    ]
  };
  
  const HeadMain = ({children, title, no }) => {
    return (
      <>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab whitespace-nowrap"
          aria-label={title}
          // onChange={() => handleTab(no)}
          defaultChecked={path === dataPayPC.path[no] ? true : false}
        />
        {children}
      </>
    );
  };
  
  

  return (
    <div className="max-lg:hidden flex ps-[14.24rem] justify-center px-5 py-6 pt-24 bg-color-primary min-h-screen text-color-dark">
      <div className=" flex flex-col items-center  w-full px-12">
        <div 
          className="w-full p-4 rounded-xl shadow-xl flex flex-col"
          data-theme="light"
        >
          <div className="tabs tabs-lifted bg-color-primary ">
            {dataPayPC.data.map((cb, index) => (
                <HeadMain title={cb.title} no={index} key={index} >
                  {cb.child}
                </HeadMain>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPaymentPC;
