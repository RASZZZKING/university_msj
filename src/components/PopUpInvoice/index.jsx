import { X } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const PopUpInvoice = ({ setPopUp, popUp, jenjang }) => {
  const handleSetPopUp = (e) => {
    e.preventDefault()
    setPopUp(!popUp);
  };
  const dataBiaya = {
    SMP: {
      pembiayaan: [
        {
          name: "Uang Pangkal",
          harga: "4.000.000",
        },
        {
          name: "Seragam 5 Steal",
          harga: "1.600.000",
        },
        {
          name: "Buku Paket",
          harga: "1.200.000",
        },
        {
          name: "Kitab Pondok",
          harga: "400.000",
        },
        {
          name: "Kegiatan 1 Tahun",
          harga: "1.700.000",
        },
        {
          name: "Multimedia (Lab Komputer)",
          harga: "500.000",
        },
        {
          name: "Ekstrakulikuler 1 Tahun",
          harga: "300.000",
        },
        {
          name: "Kesehatan 1 Tahun",
          harga: "300.000",
        },
      ],
      jumlah: "10.000.000",
      spp: "1.400.000",
    },
    SMA: {
      pembiayaan: [
        {
          name: "Uang Pangkal",
          harga: "4.000.000",
        },
        {
          name: "Seragam 5 Steal",
          harga: "1.600.000",
        },
        {
          name: "Buku Paket",
          harga: "1.500.000",
        },
        {
          name: "Kitab Pondok",
          harga: "500.000",
        },
        {
          name: "Kegiatan 1 Tahun",
          harga: "1.700.000",
        },
        {
          name: "Multimedia (Lab Komputer)",
          harga: "500.000",
        },
        {
          name: "Ekstrakulikuler 1 Tahun",
          harga: "300.000",
        },
        {
          name: "Kesehatan 1 Tahun",
          harga: "300.000",
        },
      ],
      jumlah: "10.400.000",
      spp: "1.400.000",
    },
    Santri: {
      pembiayaan: [
        {
          name: "Uang Pangkal",
          harga: "Free",
        },
        {
          name: "Seragam 5 Steal",
          harga: "1.600.000",
        },
        {
          name: "Buku Paket",
          harga: "1.400.000",
        },
        {
          name: "Kitab Pondok",
          harga: "400.000",
        },
        {
          name: "Kegiatan 1 Tahun",
          harga: "1.700.000",
        },
        {
          name: "Multimedia (Lab Komputer)",
          harga: "300.000",
        },
        {
          name: "Ekstrakulikuler 1 Tahun",
          harga: "300.000",
        },
        {
          name: "Kesehatan 1 Tahun",
          harga: "300.000",
        },
      ],
      jumlah: "6.000.000",
      spp: "1.400.000",
    },
    Pindahan: {
      pembiayaan: [
        {
          name: "Uang Pangkal",
          harga: "3.000.000",
        },
        {
          name: "Seragam 5 Steal",
          harga: "1.600.000",
        },
        {
          name: "Buku Paket",
          harga: "1.000.000",
        },
        {
          name: "Kitab Pondok",
          harga: "500.000",
        },
        {
          name: "Kegiatan 1 Tahun",
          harga: "1.700.000",
        },
        {
          name: "Multimedia (Lab Komputer)",
          harga: "300.000",
        },
        {
          name: "Ekstrakulikuler 1 Tahun",
          harga: "300.000",
        },
        {
          name: "Kesehatan 1 Tahun",
          harga: "300.000",
        },
      ],
      jumlah: "8.700.000",
      spp: "1.400.000",
    },
  };
  const Isi = () => {
    return (
      <div className=" min-w-80 max-w-80 flex flex-col gap-6 p-6 rounded-lg shadow-xl text-color-dark bg-color-primary">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Invoice Pendaftaran {jenjang}</p>
          <X size={22} className="cursor-pointer" onClick={handleSetPopUp} />
        </div>
        <div className="flex flex-col gap-2">
          {dataBiaya[jenjang].pembiayaan.map((cb, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <p className=" text-wrap">{cb.name}</p>
              <div className=" flex justify-end gap-1 text-nowrap items-center whitespace-nowrap">
                <p className="flex justify-end opacity-40 text-xs font-semibold mt-0.5">
                  Rp
                </p>
                <p className="flex justify-end">{cb.harga}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full border-t border-color-dark -my-3" />
        <div className="flex flex-col gap-1">
          <div className="grid grid-cols-2 gap-2">
            <p>Jumlah Total</p>
            <div className=" flex justify-end gap-1 text-nowrap items-center whitespace-nowrap">
              <p className="flex justify-end opacity-40 text-xs font-semibold mt-0.5">
                Rp
              </p>
              <p className="flex justify-end">
                {dataBiaya[jenjang].jumlah}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <p>SPP/bulan</p>
            <div className=" flex justify-end gap-1 text-nowrap items-center whitespace-nowrap">
              <p className="flex justify-end opacity-40 text-xs font-semibold mt-0.5">
                Rp
              </p>
              <p className="flex justify-end">{dataBiaya[jenjang].spp}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {popUp && jenjang !== undefined && (
        <div className="fixed z-50 top-0 left-0 w-svw h-svh flex justify-center items-center">
          <Isi />
        </div>
      )}
    </>
  );
};

export default PopUpInvoice;
