"use client";
import React, { useRef, useState } from "react";

const ContentPayment = () => {
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
  const TablePembayaranMobile = () => (
    <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-between">
          <div className="text-xs">24 Juli 2021</div>
          <div className="font-semibold text-lg">Asuransi</div>
        </div>
        <div className="text-sm btn-success btn min-w-24 border-color-success bg-opacity-15 hover:bg-opacity-40 text-success max-h-8 h-8 min-h-8">
          Diterima
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Kode Transaksi</p>
          <p className="text-xs">202012260001</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Nama Siswa</p>
          <p className="text-xs">Fuji Nurul Fadhilah</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Jumlah Bayar</p>
          <p className="text-xs">Rp 300.000</p>
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
  const TableBiayaMobile = () => (
    <div className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg">
      <div className="flex justify-between items-center pb-1">
        <div className="flex flex-col justify-center">
          <div className="font-semibold text-lg">Asuransi</div>
        </div>
        <div className="text-sm btn-success btn min-w-24 border-color-success bg-opacity-15 hover:bg-opacity-40 text-success max-h-8 h-8 min-h-8">
          Lunas
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Nama Biaya</p>
          <p className="text-xs">Uang Gedung</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Jumlah Biaya</p>
          <p className="text-xs">Rp 2.000.000</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Kurang</p>
          <p className="text-xs">Rp 0</p>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="btn btn-xs mt-1.5 btn-primary hover:bg-color-dark hover:bg-opacity-20 hover:border-color-birulaut bg-color-primary text-color-birulaut border-color-birulaut">
          Cicil
        </div>
        <div className="btn btn-xs mt-1.5 hover:bg-color-birulaut hover:bg-opacity-80 hover:border-color-birulaut btn-primary bg-color-birulaut border-color-birulaut">
          Bayar
        </div>
      </div>
    </div>
  );
  const TablePembiayaan = () => {
    return (
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-color-dark opacity-80">
                <th></th>
                <th>Kode Transaksi</th>
                <th>Nama Siswa</th>
                <th>Jumlah Bayar</th>
                <th>Tanggal Bayar</th>
                <th>Nama Biaya</th>
                <th>Verifikasi</th>
                <th>Bukti</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>202193912391</td>
                <td>Fuji Merapi Jawa</td>
                <td>Rp 300.000</td>
                <td>23-3-2022</td>
                <td>Biaya Gedung</td>
                <td>Pembayaran diterima</td>
                <td>
                  <div className="p-1 cursor-pointer w-16 flex justify-center text-color-gray  border-color-birulaut text-color-birulaut border rounded-lg hover:scale-105 ease-in-out transition-all">
                    Bukti
                  </div>
                </td>
                <td>
                  <div className="p-1 cursor-pointer w-16 flex justify-center text-color-gray  border-color-birulaut bg-color-birulaut text-color-primary hover:scale-105 ease-in-out transition-all border rounded-lg">
                    Cetak
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  const TableBiaya = () => (
    <div
      role="tabpanel"
      className="tab-content  border-base-300 rounded-box p-6"
    >
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-color-dark opacity-80">
              <th></th>
              <th>Nama Biaya</th>
              <th>Jumlah Bayar</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Fuji Merapi Jawa</td>
              <td>Rp 300.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  const HeadMain = ({ title, no }) => {
    return (
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab whitespace-nowrap"
        aria-label={title}
        // onChange={() => handleTab(no)}
        defaultChecked={no === 0 ? true : false}
      />
    );
  };
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
    </div>
  );
  const BayarContent = () => (
    <div
      role="tabpanel"
      className="tab-content  border-base-300 rounded-box p-6"
    >
      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <h2 className="card-title text-xl">Tambah Pembayaran</h2>
            <div className="w-full">
              <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
                {"Jumlah Pembayaran"}
              </span>
              <input
                // onChange={()=>handleTab(1)}
                name={"name"}
                type={"text"}
                ref={totalBayar}
                // value={value}
                placeholder={"contoh: 5.000.000"}
                className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
                required
              />
            </div>
            <div className="w-full">
              <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
                {"Tanggal Pembayaran"}
              </span>
              <input
                ref={tanggalBayar}
                // onChange={()=>handleTab()}
                name={"names"}
                type={"date"}
                // value={value}
                className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
                required
              />
            </div>
            <div className="w-full">
              <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
                {"Bukti Pembayaran"}
              </span>
              <input
                // onChange={()=>handleTab()}
                name={"namesz"}
                type={"file"}
                // value={value}
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
    </div>
  );
  const BayarContentMobile = () => (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="card-title text-xl">Tambah Pembayaran</h2>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Jumlah Pembayaran"}
            </span>
            <input
              // onChange={()=>handleTab(1)}
              name={"name"}
              type={"text"}
              ref={totalBayar}
              // value={value}
              placeholder={"contoh: 5.000.000"}
              className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
              required
            />
          </div>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Tanggal Pembayaran"}
            </span>
            <input
              ref={tanggalBayar}
              // onChange={()=>handleTab()}
              name={"names"}
              type={"date"}
              // value={value}
              className="input input-bordered text-color-dark bg-color-primary border-color-placeholder ring-color-placeholder focus:outline-color-placeholder w-full mt-2 text-md"
              required
            />
          </div>
          <div className="w-full">
            <span className="label-text text-color-dark font-extralight opacity-70 w-full text-base">
              {"Bukti Pembayaran"}
            </span>
            <input
              // onChange={()=>handleTab()}
              name={"namesz"}
              type={"file"}
              // value={value}
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
    <div className="flex justify-center items-center gap-4 flex-col">
      <p className="text-xl font-bold text-center text-wrap">
        PROSEDUR PEMBAYARAN PSB 2024-2025
      </p>
      <div className="flex sm:justify-between max-sm:flex-col items-center gap-4 w-full">
        <ul className="steps steps-horizontal sm:steps-vertical lg:steps-horizontal">
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
    <div className="flex lg:ps-[14.24rem] justify-center lg:px-5 py-6 sm:pt-10 lg:pt-24 bg-color-primary min-h-screen text-color-dark">
      <div className=" flex flex-col items-center  max-lg:pb-20 w-full px-6 lg:px-12">
        {/* Header text start  */}
        <div
          className="w-full p-4 rounded-xl shadow-xl flex flex-col max-lg:hidden"
          data-theme="light"
        >
          <div className="tabs tabs-lifted bg-color-primary ">
            <HeadMain title={"Data Pembayaran"} no={0} />
            <TablePembiayaan />

            <HeadMain title={"Data Biaya"} no={1} />
            <TableBiaya />

            <HeadMain title={"Cara Pembayaran"} no={2} />
            <CaraPembayaran />

            <HeadMain title={"Bayar"} no={3} />
            <BayarContent />
          </div>
        </div>
        <div
          className="w-full lg:hidden flex flex-col  gap-3"
          data-theme="light"
        >
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
          <div className="max-sm:flex max-sm:flex-col justify-center items-center gap-3 sm:grid sm:grid-cols-2">
            {/* <TablePembayaranMobile />
          <TablePembayaranMobile />
          <TablePembayaranMobile /> */}

            {/* <TableBiayaMobile />
          <TableBiayaMobile />
          <TableBiayaMobile />
          <TableBiayaMobile /> */}
          </div>

          {/* <BayarContentMobile /> */}
          <CaraPembayaranMobile />
        </div>
      </div>
    </div>
  );
};

export default ContentPayment;
