"use client";
import {
  Files,
  House,
  IdentificationBadge,
  MapPinArea,
  Megaphone,
  Student,
  User,
  UserList,
  Users,
} from "@phosphor-icons/react";
import { CreditCard } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarSamping = ({ user }) => {
  const path = usePathname();
  const trimPath = path.split("/");
  const isPayment = trimPath[2] === "payment";
  const isForm = trimPath[3] === "forms";

  const isDocs = trimPath[4] === "document"
  const isParents = trimPath[4] === "parents"
  const isLocation = trimPath[4] === "location"
  const isStudent = trimPath[4] === "student"


  const isAdmin = process.env.NEXT_PUBLIC_ADMIN === user;
  console.log("🚀 ~ NavbarSamping ~ isAdmin:", isAdmin)

  const dataIcon = [
    {
      href: "/",
      name: "Beranda",
      icon: <House size={26} weight={path === "/" ? "fill" : "regular"} />,
    },
    {
      href: "/Admin/dashboard2/user",
      name: "Akun",
      icon: <User size={26} weight={path === "/Admin/dashboard2/user" ? "fill" : "regular"} />,
    },
    {
      href: isAdmin ? "/Admin/payment" : "/Users/payment",
      name: "Pembayaran",
      icon: <CreditCard size={26} weight={isPayment ? "fill" : "regular"} />,
    },
    {
      href: isAdmin
        ? "/Admin/dashboard2/forms/student"
        : "/Users/dashboard2/forms/student",
      name: "Formulir",
      icon: (
        <IdentificationBadge size={26} weight={isForm ? "fill" : "regular"} />
      ),
    },
    {
      href: "/News",
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
      icon: (
        <UserList
          size={26}
          weight={path === "/Users/listuser" ? "fill" : "regular"}
        />
      ),
    },
  ];
  const iconIptData2 = {
    data: [
      {
        logo: (
          <Student
            size={26}
            weight={
              isStudent ? "fill" : "regular"
            }
          />
        ),
        name: "Data Diri",
        href: isAdmin
          ? "/Admin/dashboard2/forms/student"
          : "/Users/dashboard2/forms/student",
      },
      {
        logo: (
          <MapPinArea
            size={26}
            weight={
              isLocation ? "fill" : "regular"
            }
          />
        ),
        name: "Data Alamat",
        href: isAdmin
          ? "/Admin/dashboard2/forms/location"
          : "/Users/dashboard2/forms/location",
      },
      {
        logo: (
          <Users
            size={26}
            weight={
              isParents ? "fill" : "regular"
            }
          />
        ),
        name: "Orang Tua",
        href: isAdmin
          ? "/Admin/dashboard2/forms/parents"
          : "/Users/dashboard2/forms/parents",
      },
      {
        logo: (
          <Files
            size={26}
            weight={
              isDocs ? "fill" : "regular"
            }
          />
        ),
        name: "Dokumen",
        href: isAdmin
          ? "/Admin/dashboard2/forms/document"
          : "/Users/dashboard2/forms/document",
      },
    ],
  };
  return (
    <div className=" fixed left-0 z-40 h-full min-w-24 shadow-xl bg-color-primary max-lg:hidden">
      <div className="h-12 px-6 mt-12 mb-3">
        <img
          src="/logo/logo.png"
          className="w-full h-full object-scale-down rounded"
        ></img>
      </div>
      <div className="flex flex-col">
        {dataIcon.map((cb, index) => {
          if(!isAdmin && cb.name === "Akun") return

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
                <Link
                  href={cb.href}
                  className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex  justify-start items-center gap-2 text-color-dark font-extralight px-12"
                >
                  {cb.icon}
                  <p className="text-base">{cb.name}</p>
                </Link>
                {iconIptData2.data.map((cb, index) => (
                  <Link
                    key={index}
                    href={cb.href}
                    className="min-w-32 h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light px-12 ps-[4.25rem]"
                  >
                    {cb.logo}
                    <p className="text-base">{cb.name}</p>
                  </Link>
                ))}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NavbarSamping;
