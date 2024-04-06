"use client";
import { UserList } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const ContentListSiswa = () => {
  const TableBiaya = () => (
    <div className="p-6 shadow-xl rounded-xl flex flex-col gap-3 max-lg:hidden">
      <div className="flex justify-between" data-theme="light">
        <div className="text-lg font-semibold flex gap-2 justify-center items-center">
          <p>Show</p>
          <select className="select select-bordered select-sm w-full max-w-xs">
            <option selected>10</option>
            <option>20</option>
            <option>50</option>
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
              <th>
                <div className="flex justify-center w-32">Status</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-color-dark  opacity-90">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>PPDB12312R31</td>
              <td>Fuji Merapi Jawa</td>
              <td>
                <div className="flex justify-center w-32">
                  <div className="btn btn-xs btn-success bg-opacity-20 text-success hover:bg-opacity-45">
                    Diterima
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>PPDB12312R31</td>
              <td>Fuji Merapi Jawa</td>
              <td>
                <div className="flex justify-center w-32">
                  <div className="btn btn-xs btn-warning bg-opacity-20 text-warning hover:bg-opacity-45">
                    Belum Daftar Ulang
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>PPDB12312R31</td>
              <td>Fuji Merapi Jawa</td>
              <td>
                <div className="flex justify-center w-32">
                  <div className="btn btn-xs btn-error bg-opacity-20 text-error hover:bg-opacity-45">
                    Ditolak
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between" data-theme="light">
        <p className="text-sm font-extralight flex justify-center items-center">
          Showing 71 to 80 of 81 entries
        </p>
        <div className="join ">
          <button className="join-item btn max-h-10  h-10  min-h-10">«</button>
          <button className="join-item text-xs btn max-h-10  h-10  min-h-10">
            Page 22
          </button>
          <button className="join-item btn max-h-10  h-10  min-h-10">»</button>
        </div>
      </div>
    </div>
  );
  const TablePembayaranMobile = () => (
    <div
      className="w-full flex flex-col gap-1 bg-color-primary p-4 shadow-xl rounded-lg lg:hidden"
      data-theme="light"
    >
      <div className="flex justify-between items-center pb-1.5">
        <div className="flex flex-col justify-between items-center">
          <div className="font-semibold text-lg">Fuji Nurul Fadilah</div>
        </div>
        <div className="text-sm btn-success btn min-w-24 border-color-success bg-opacity-15 hover:bg-opacity-40 text-success max-h-8 h-8 min-h-8">
          Diterima
        </div>
      </div>
      <div className="h-0.5 w-full border-t opacity-50"></div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <p className="text-xs">Nomor Pendaftaran</p>
          <p className="text-xs">202012260001</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Nama Pendaftar</p>
          <p className="text-xs">Fuji Nurul Fadhilah</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs">Asal Sekolah</p>
          <p className="text-xs">SDN 1 Trunojaya</p>
        </div>
      </div>
    </div>
  );
  const Pagination = () => (
    <div className="join shadow-lg" data-theme="light">
      <button className="join-item btn bg-color-primary">«</button>
      <button className="join-item btn bg-color-primary">Page 22</button>
      <button className="join-item btn bg-color-primary">»</button>
    </div>
  );
  return (
    <div className="w-full min-h-screen bg-color-primary lg:ps-[14.24rem] pt-5 sm:pt-14">
      <div className="w-full flex flex-col px-4 sm:px-10 gap-4 ">
        <div className="flex gap-4 sm:items-center text-color-dark max-sm:justify-center max-sm:shadow rounded-lg max-sm:py-2">
          <UserList size={32} />
          <p className="text-2xl font-bold text-color-dark">
            Pendaftar Siswa Baru
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
            <TablePembayaranMobile />
            <TablePembayaranMobile />
          </div>
        </div>
        <div className="flex justify-center lg:hidden">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ContentListSiswa;
