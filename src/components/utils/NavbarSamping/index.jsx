"use client";
import {
  Files,
  House,
  IdentificationBadge,
  MapPinArea,
  Megaphone,
  Student,
  UserList,
  Users,
} from "@phosphor-icons/react";
import { CreditCard } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarSamping = () => {
  const path = usePathname();

  const dataIcon = [
    {
      href: "/",
      name: "Beranda",
      icon: <House size={26} weight={path === "/" ? "fill" : "regular"} />,
    },
    {
      href: "/details/123",
      name: "Pembayaran",
      icon: (
        <CreditCard
          size={26}
          weight={path === "/Users/payment" ? "fill" : "regular"}
        />
      ),
    },
    {
      href: "/Users/dashboard",
      name: "Formulir",
      icon: (
        <IdentificationBadge
          size={26}
          weight={path === "/Users/dashboard2" ? "fill" : "regular"}
        />
      ),
    },
    {
      href: "/user",
      name: "Pengumuman",
      icon: (
        <Megaphone
          size={26}
          className="mirror-h"
          weight={path === "/news" ? "fill" : "regular"}
        />
      ),
    },
    {
      href: "/Users/listuser",
      name: "List Siswa",
      icon: <UserList size={26}
        weight={path === "/Users/listuser" ? "fill" : "regular"}
      />,
    },
  ];
  return (
    <div className=" fixed left-0 z-40 h-full min-w-24 shadow-xl bg-color-primary max-lg:hidden">
      <div className="h-12 px-6 mt-12 mb-6">
        <div className="w-full h-full bg-color-placeholder rounded">
          
        </div>
      </div>
      <div className="flex flex-col">
        {dataIcon.map((cb, index) => {
          if (cb.name !== "Formulir") {
            return (
              <Link
                href={cb.href}
                key={index}
                className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-extralight px-12"
              >
                {cb.icon}
                <p className="text-base">{cb.name}</p>
              </Link>
            );
          } else {
            return (
              <div className="flex flex-col " key={index}>
                <div className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex  justify-start items-center gap-2 text-color-dark font-extralight px-12">
                  {cb.icon}
                  <p className="text-base">{cb.name}</p>
                </div>
                <div className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light px-12 ps-[4.25rem]">
                  <Student size={26} weight={"fill"} />
                  <p className="text-base">Data Diri</p>
                </div>
                <div className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light px-12 ps-[4.25rem]">
                  <MapPinArea size={26} />
                  <p className="text-base">Data Alamat</p>
                </div>
                <div className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light px-12 ps-[4.25rem]">
                  <Users size={26} />
                  <p className="text-base">Orang Tua</p>
                </div>
                <div className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light px-12 ps-[4.25rem]">
                  <Files size={26} />
                  <p className="text-base">Dokumen</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NavbarSamping;
