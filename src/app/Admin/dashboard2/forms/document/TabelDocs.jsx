"use client";
import { Outer } from "@/components/Content/ContentDashFiles";
import { Check } from "@phosphor-icons/react";
import { UserList, X } from "@phosphor-icons/react/dist/ssr";
import React, { useRef, useState } from "react";

const TabelDocs = ({ datax }) => {
  //outer
  const [isVisible, setIsVisible] = useState(false);
  const [url, setUrl] = useState("");
  //outer

  const onClose = () => {
    setIsVisible(false);
  };

  const [pagination, setPagination] = useState(0);
  const valueSelect = useRef();
  const [vall, setVall] = useState(10);
  const handleChange = (e) => {
    const { value } = e.target;
    setVall(value);
  };
  const handleNext = () => {
    if ((pagination + 1) * vall < datax.length) {
      setPagination(pagination + 1);
    }
  };
  const handlePrev = () => {
    if (pagination !== 0) {
      setPagination(pagination - 1);
    }
  };
  const TableBiaya = () => (
    <div className="p-6 shadow-xl rounded-xl flex flex-col gap-3 max-lg:hidden">
      <div className="flex justify-between" data-theme="light">
        <div className="text-lg font-semibold flex gap-2 justify-center items-center">
          <p>Show</p>
          <select
            onChange={handleChange}
            ref={valueSelect}
            name="slek"
            value={vall}
            className="select select-bordered select-sm w-full max-w-xs"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <p>entries</p>
        </div>
        <label className="input input-bordered input-sm flex items-center gap-2">
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
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-color-dark">
              <th></th>
              <th>No Pendaftaran</th>
              <th>Nama Pendaftar</th>
              <th>KK</th>
              <th>Akte</th>
              <th>KTP Ortu</th>
              <th>SKL</th>
              <th>Ijazah</th>
              <th>SHUN/SKHUN</th>
              <th>Rapor</th>
              <th>NISN</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-color-dark  opacity-90">
            {/* row 1 */}
            {datax
              .slice(
                pagination * vall,
                (pagination + 1) * vall > datax.length
                  ? datax.length
                  : (pagination + 1) * vall
              )
              .map((cb, i) => {
                const showImg = (isi) => {
                    setIsVisible(true)
                  setUrl(`/document/${isi}`);
                };
                const handleAccept = async(e) => {
                    e.preventDefault()
                    const id_user = cb.id
                    const status = "Diterima"
                    const data = {
                        id_user,
                        status
                    }
                    console.log("🚀 ~ handleAccept ~ id_user:", id_user)
                    const response = await fetch(
                        "/api/v1/dataDocs/accept",{
                          method: "POST",
                          body: JSON.stringify(data)  
                        }
                    )
                    const show = await response.json()
                    console.log("🚀 ~ handleReject ~ show:", show)
                    if(show.status === 200 ) return alert(`Data berhasil di acc`)
                        else return alert(`Data Gagal di Acc`)
                                    
                  }
                  const handleReject = async(e) => {
                    e.preventDefault()
                    const id_user = cb.id
                    const status = "Ditolak"
                    const data = {
                        id_user,
                        status
                    }
                    const response = await fetch(
                        "/api/v1/dataDocs/reject",{
                          method: "POST",
                          body: JSON.stringify(data)  
                        }
                    )
                    const show = await response.json()
                    console.log("🚀 ~ handleReject ~ show:", show)
                    if(show.status === 200 ) return alert(`Data berhasil di tolak`)
                        else return alert(`Data Gagal di tolak`)
                  }
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      PPDB2024
                      {cb.id < 10
                        ? `00${cb.id}`
                        : cb.id < 100
                        ? `0${cb.id}`
                        : cb.id}
                    </td>
                    <td>{cb.nama}</td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.kartu_keluarga)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.akte_kelahiran)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.ktp_orang_tua)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.skl)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.ijazah)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.shun_skhun)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.rapor)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div onClick={()=>showImg(cb.data_docs.kartu_nisn)} className="btn btn-xs btn-primary bg-opacity-20 hover:bg-opacity-45 text-primary">
                        Lihat
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <div
                          className={`btn btn-xs  bg-opacity-20 
                        ${
                          cb.status === "Diterima"
                            ? "btn-success text-success"
                            : cb.status === "Pending"
                            ? "btn-warning text-warning"
                            : "btn-error text-error"
                        }
                         hover:bg-opacity-45`}
                        >
                          {cb.status}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex gap-2 justify-center items-center">
                        <div onClick={handleReject} className="btn btn-xs btn-error text-error border-error bg-opacity-20 hover:bg-opacity-45">
                          <X size={16} weight="bold" />
                        </div>
                        <div onClick={handleAccept} className="btn btn-xs btn-success text-success border-success bg-opacity-20 hover:bg-opacity-45">
                          <Check size={16} weight="bold" />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between" data-theme="light">
        <p className="text-sm font-extralight flex justify-center items-center">
          Showing {pagination * vall + 1} to{" "}
          {(pagination + 1) * vall > datax.length
            ? datax.length
            : (pagination + 1) * vall}{" "}
          of {datax.length} Registrant
        </p>
        <div className="join ">
          <button
            className={`join-item btn ${
              pagination === 0 && "btn-disable"
            } max-h-10  h-10  min-h-10`}
            onClick={handlePrev}
          >
            «
          </button>
          <button className="join-item text-xs btn max-h-10  h-10  min-h-10">
            Page {pagination + 1}
          </button>
          <button
            className={`join-item btn ${
              (pagination + 1) * vall < datax.length && "btn-disable"
            } max-h-10  h-10  min-h-10`}
            onClick={handleNext}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
  const TablePembayaranMobile = ({ cb }) => (
    <div
      className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg lg:hidden"
      data-theme="light"
    >
      <div className="flex justify-between items-center pb-1.5">
        <div className="flex flex-col justify-between items-center">
          <div className="font-semibold text-lg">{cb.nama}</div>
        </div>
        <div
          className={`text-sm 
          ${
            cb.status === "Diterima"
              ? "btn-success border-success text-success"
              : cb.status === "Pending"
              ? "btn-warning text-warning border-warning"
              : "btn-error text-error border-error"
          }
          btn min-w-24  bg-opacity-15 hover:bg-opacity-40  max-h-8 h-8 min-h-8`}
        >
          {cb.status === "Belum Bayar Uang Muka" ? "Belum DP" : cb.status}
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Nomor Pendaftaran</p>
          <p className="text-xs">
            PPDB2024
            {cb.id < 10 ? `00${cb.id}` : cb.id < 100 ? `0${cb.id}` : cb.id}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Nama Pendaftar</p>
          <p className="text-xs">{cb.nama}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Asal Sekolah</p>
          <p className="text-xs">{cb.asal_sekolah}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Status</p>
          <p className="text-xs">{cb.status}</p>
        </div>
      </div>
    </div>
  );
  const Pagination = () => (
    <div className="join shadow-lg" data-theme="light">
      <button
        className={`${
          pagination === 0 && "btn-disable"
        } join-item btn bg-color-primary`}
        onClick={handlePrev}
      >
        «
      </button>
      <div className="join-item btn bg-color-primary">
        Page {pagination + 1}
      </div>
      <button
        className={`${
          (pagination + 1) * vall < datax.length && "btn-disable"
        } join-item btn bg-color-primary`}
        onClick={handleNext}
      >
        »
      </button>
    </div>
  );
  return (
    <>
      <div className="w-full min-h-screen bg-color-primary lg:ps-[18rem] lg:px-5  pt-5 sm:pt-14">
        <div className="w-full flex flex-col px-4 sm:px-10 lg:px-6 gap-4 ">
          <div className="flex gap-4 sm:items-center text-color-dark max-sm:justify-center max-sm:shadow rounded-lg max-sm:py-2">
            <UserList size={32} />
            <p className="text-2xl font-bold text-color-dark">
              Data Dokumen Siswa
            </p>
          </div>
          <TableBiaya />
          <div className="px-2 mt-4 lg:hidden">
            <label
              className="input input-bordered flex items-center gap-2"
              data-theme="light"
            >
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
          </div>
          <div className="sm:min-h-[34rem] min-h-[22rem] lg:hidden">
            <div className="lg:hidden grid sm:grid-cols-2 gap-3 px-2">
              {datax
                .slice(
                  pagination * vall,
                  (pagination + 1) * vall > datax.length
                    ? datax.length
                    : (pagination + 1) * vall
                )
                .map((cb, i) => (
                  <TablePembayaranMobile key={i} cb={cb} />
                ))}
            </div>
          </div>
          <div className="flex justify-center lg:hidden">
            <Pagination />
          </div>
        </div>
      </div>
      <Outer url={url} onClose={onClose} isVisible={isVisible} />
    </>
  );
};

export default TabelDocs;
