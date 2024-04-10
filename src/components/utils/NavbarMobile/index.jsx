"use client";
import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import {
  Bank,
  Basket,
  Cardholder,
  CreditCard,
  Files,
  HandCoins,
  Heart,
  House,
  IdentificationBadge,
  MagnifyingGlass,
  MapPinArea,
  Megaphone,
  PiggyBank,
  Question,
  Receipt,
  Student,
  User,
  UserCircle,
  UserList,
  Users,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMobile = () => {
  const path = usePathname();
  const trimPath = path.split("/")
  const isPayment = trimPath[2] === "payment"
  const isForm = trimPath[3] === "forms"


  const dataIcon = [
    {
      href: "/",
      icon: <House size={32} weight={path === "/" ? "fill" : "regular"} />,
    },
    {
      href: "/Users/payment",
      icon: (
        <CreditCard
          size={26}
          weight={isPayment ? "fill" : "regular"}
          tabIndex={1}
          role="button"
        />
      ),
    },
    {
      href: "/Users/dashboard2",
      icon: (
        <IdentificationBadge
          size={26}
          weight={isForm ? "fill" : "regular"}
          tabIndex={0}
          role="button"
        />
      ),
    },
    {
      href: "/News",
      icon: (
        <Megaphone
          size={26}
          className="mirror-h"
          weight={path === "/News" ? "fill" : "regular"}
        />
      ),
    },
    {
      href: "/like",
      icon: <UserList size={26} />,
    },
  ];

  return (
    <div className="mw500 lg:hidden  min-[450px]:shadow-none bottom-0  shadow-inner w-full   fixed  rounded-t rounded-xl">
      <div className="h-16 mxb-10 bg-color-primary text-color-dark shadow-inner rounded-t rounded-xl  flex justify-evenly items-center">
        {dataIcon.map((cb, index) => {
          return (
            <IconsNav href={cb.href} active={path === cb.href} key={index}>
              {cb.icon}
            </IconsNav>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarMobile;

export const IconsNav = ({ children, href, active }) => {
  const path = usePathname();
  const iconIptData2 = {
    data: [
      {
        logo: (
          <Student
            size={26}
            weight={
              path === "/Users/dashboard2/forms/student" ? "fill" : "regular"
            }
          />
        ),
        name: "Data Diri",
        href: "/Users/dashboard2/forms/student",
      },
      {
        logo: (
          <MapPinArea
            size={26}
            weight={
              path === "/Users/dashboard2/forms/location" ? "fill" : "regular"
            }
          />
        ),
        name: "Data Alamat",
        href: "/Users/dashboard2/forms/location",
      },
      {
        logo: (
          <Users
            size={26}
            weight={
              path === "/Users/dashboard2/forms/parents" ? "fill" : "regular"
            }
          />
        ),
        name: "Orang Tua",
        href: "/Users/dashboard2/forms/parents",
      },
      {
        logo: (
          <Files
            size={26}
            weight={
              path === "/Users/dashboard2/forms/document" ? "fill" : "regular"
            }
          />
        ),
        name: "Dokumen",
        href: "/Users/dashboard2/forms/document",
      },
    ],
  };
  const logoPayment = {
    data: [
      {
        nama: "Data Biaya",
        logo: <Cardholder size={26} 
        weight={
          path === "/Users/payment" ? "fill" : "regular"
        }
        />,
        href: "/Users/payment",
      },
      {
        nama: "Data Pembayaran",
        logo: <Receipt size={26}  
        weight={
          path === "/Users/payment/paymentdata" ? "fill" : "regular"
        }
        />,
        href: "/Users/payment/paymentdata",
      },
      {
        nama: "Bayar",
        logo: <HandCoins size={26} 
        weight={
          path === "/Users/payment/pay" ? "fill" : "regular"
        } />,
        href: "/Users/payment/pay",
      },
      {
        nama: "Cara Pembayaran",
        logo: <Question size={26} 
        weight={
          path === "/Users/payment/howtopay" ? "fill" : "regular"
        }
        />,
        href: "/Users/payment/howtopay",
      },
    ]
  }
  return (
    <>
      {href !== "/Users/dashboard2" && href !== "/Users/payment" ? (
        <Link
          href={href}
          className="hover:bg-color-gray rounded-full p-2 flex flex-col items-center"
        >
          {children}

          {/* <div  className={`mt-1.5 ${active ? "fade-up" : "opacity-0"}  h-1.5 w-1.5 rounded-full bg-color-secondary`}></div> */}
        </Link>
      ) : href !== "/Users/payment" ? (
        <>
          <div
            href={href}
            className="hover:bg-color-gray rounded-full p-2 flex flex-col items-center dropdown dropdown-top dropdown-hover"
          >
            {children}
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-color-primary rounded-box w-52 mb-4"
            >
              {
                iconIptData2.data.map((cb,index)=>(
              <li key={index}>
                <Link href={cb.href} className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  {cb.logo}
                  <p className="text-base">{cb.name}</p>
                </Link>
              </li>

                ))
              }
            </ul>
          </div>
        </>
      ) : (
        <>
          <div
            href={href}
            className="hover:bg-color-gray rounded-full p-2 flex flex-col items-center dropdown dropdown-top dropdown-hover"
          >
            {children}
            <ul
              tabIndex={1}
              className="dropdown-content z-[1] menu p-2 shadow bg-color-primary rounded-box w-52 mb-4"
            >
              {
                logoPayment.data.map((cb,index)=>(
              <li key={index}>
                <Link href={cb.href} className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  {cb.logo}
                  <p className="text-base">{cb.nama}</p>
                </Link>
              </li>

                ))
              }
            </ul>
          </div>
        </>
      )}
    </>
  );
};
