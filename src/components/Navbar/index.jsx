"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ user, hasReg }) => {
  const isAdmin = process.env.NEXT_PUBLIC_ADMIN === user?.user?.email
  const sessionUser = user
    ? { title: "Logout", login: "/api/auth/signout" }
    : { title: "Login", login: "/Login" };
  hasReg =
    hasReg && user
      ? { title: "Dashboard", login: isAdmin ? "/Admin/dashboard2/forms/student" :"/Users/dashboard2/forms/student" }
      : user
      ? { title: "Daftar", login: "/Register" }
      : { title: "Sign in", login: "/Register" };

  const path = usePathname();
  const dataLinkNavbar = [
    {
      title: "Home",
      path: "/",
      href: "/",
    },
    {
      title: "News",
      path: "/News",
      href: "/News",
    },
    {
      title: "Facility",
      path: "/Facility",
      href: "/Facility",
    },
    {
      title: "Ekstrakurikuler",
      path: "/Ekstrakurikuler",
      href: "/Ekstrakurikuler",
    },
    {
      title: hasReg.title,
      path: "/Login",
      href: hasReg.login,
    },
    {
      title: "Help",
      path: "/Help",
      href: "/Help",
    },
  ];

  const navibarz = useRef(null);
  useEffect(() => {
    if (path === "/" || path === "/Facility") {
      const handleScroll = () => {
        if (navibarz.current)
          navibarz.current.classList.toggle("nav-sticky", window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  const Linkgs = ({ dt, i }) => (
    <Link
      className={`menuActive transition-all duration-700
        ${
          path !== "/" &&
          path === dt.path &&
          "text-color-dark hover:!text-color-dark"
        }
    ${path === "/" && path === dt.path && "actived"}
    `}
      href={dt.href}
    >
      <p className={`
        ${path === "/Facility" && path === dt.path && "bg-color-primary max-h-8 flex items-center justify-center rounded-lg " }
        `}>
      {dt.title}
      </p>
    </Link>
  );
  return (
    <div
      ref={navibarz}
      className={`w-full napibar ${
        path !== "/" && path !== "/Facility" && "bg-color-primary  shadow-md nav-sticky !p-0"
      } top-0 left-0  flex justify-center h-auto z-30  fixed duration-700 transition-all `}
    >
      <div className="navbar xl:w-11/12 justify-between px-4">
        <div className="flex-1">
          <Link href={`/`} className="">
            <Image
              src={"/logo/logo.png"}
              width={1000}
              height={1000}
              alt="Logo Sekolah Pondok Muslimah Sejati Tambun Selatan"
              className="h-16 w-48  btn btn-ghost p-1 object-scale-down   rounded-xl ms-4 xl:ms-10"
            />
          </Link>
        </div>
        <div className="flex-none flex justify-between ">
          <div className="lg:flex justify-end hidden xl:mr-20 text-2xl font-bold">
            <div className="wrapperMenu">
              {dataLinkNavbar.map((cb, i) => (
                <Linkgs key={i} dt={cb} i={i} />
              ))}
              <div className="animationss start-home"></div>
            </div>
          </div>

          <div className="dropdown dropdown-end relative z-20 text-color-dark ">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost swap lg:hidden border-none txxt   swap-rotate"
            >
              {/* this hidden checkbox controls the state */}

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content  menu p-2 shadow bg-color-primary mr-3 mt-8 rounded-box w-52"
            >
              {dataLinkNavbar.map((cb, i) => (
              <li key={i} className="hover:bg-color-secondary hover:bg-opacity-20 rounded-xl">
              <Link href={cb.href}>{cb.title}</Link>
            </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
