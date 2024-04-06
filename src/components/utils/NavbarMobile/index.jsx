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
          weight={path === "/Users/payment" ? "fill" : "regular"}
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
          weight={path === "/Users/dashboard2" ? "fill" : "regular"}
          tabIndex={0}
          role="button"
        />
      ),
    },
    {
      href: "/user",
      icon: (
        <Megaphone
          size={26}
          className="mirror-h"
          weight={path === "/details/123" ? "fill" : "regular"}
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
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <Student size={26} weight={"fill"} />
                  <p className="text-base">Data Diri</p>
                </div>
              </li>
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <MapPinArea size={26} />
                  <p className="text-base">Data Alamat</p>
                </div>
              </li>
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <Users size={26} />
                  <p className="text-base">Orang Tua</p>
                </div>
              </li>
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <Files size={26} />
                  <p className="text-base">Dokumen</p>
                </div>
              </li>
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
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <Cardholder size={26} weight={"fill"} />
                  <p className="text-base">Data Biaya</p>
                </div>
              </li>
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <Receipt size={26} />
                  <p className="text-base">Data Pembayaran</p>
                </div>
              </li>
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <HandCoins size={26} />
                  <p className="text-base">Bayar</p>
                </div>
              </li>
              <li>
                <div className="w-full h-12 bg-color-primary hover:bg-color-putihbg flex justify-start items-center gap-2 text-color-dark font-light">
                  <Question size={26} />
                  <p className="text-base">Cara Pembayaran</p>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
