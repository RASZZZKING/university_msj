"use client";

import Image from "next/image";
import Rem from "../../../public/rem.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar2 = ({ user, hasReg }) => {
  const sessionUser = user
    ? { title: "Logout", login: "/api/auth/signout" }
    : { title: "Login", login: "/Login" };
  hasReg =
    hasReg && user
      ? { title: "Update Data", login: "/Users/dashboard2/forms/student" }
      : { title: "Register Form", login: "/Register" };

  const path = usePathname();
  const custom = path === "/Users/dashboard2" || path === "/Users/payment";
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
      title: sessionUser.title,
      path: "/Login",
      href: sessionUser.login,
    },
    {
      title: hasReg.title,
      path: "/Register",
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
    if (path === "/") {
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
      {/* <Link
        className={`menuActive transition-all duration-700
        `
      }
        href={dt.href}
      > */}
      {dt.title}
    </Link>
  );
  return (
    <div
      ref={navibarz}
      className={`w-full napibar ${
        path !== "/" && "bg-color-primary  shadow-md nav-sticky !p-0"
      } top-0 left-0  flex justify-center h-auto z-30  fixed duration-700 transition-all `}
    >
      <div className="navbar w-11/12 justify-between">
        <div className="flex-1">
          <Link href={`/`} className="">
            <Image
              src={Rem}
              width={100}
              height={100}
              alt="rem"
              className="aspect-8 h-16 w-14  btn btn-ghost p-2   rounded-xl ms-10"
            />
          </Link>
        </div>
        <div className="flex-none flex justify-between ">
          <div className="md:flex hidden mr-20 text-2xl font-bold">
            <div className="wrapperMenu">
              {dataLinkNavbar.map((cb, i) => (
                <Linkgs key={i} dt={cb} i={i} />
              ))}
              <div className="animationss start-home"></div>
            </div>
          </div>
          <div className="dropdown dropdown-end relative z-20 text-color-dark">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost swap md:hidden border-none txxt  mr-4 swap-rotate"
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
              <li className="hover:bg-color-secondary hover:bg-opacity-20 rounded-xl">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:bg-color-secondary hover:bg-opacity-20 rounded-xl">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:bg-color-secondary hover:bg-opacity-20 rounded-xl">
                <Link href={sessionUser.login}>{sessionUser.title}</Link>
              </li>
              <li className="hover:bg-color-secondary hover:bg-opacity-20 rounded-xl">
                <Link href={hasReg.login}>{hasReg.title}</Link>
              </li>
              <li className="hover:bg-color-secondary hover:bg-opacity-20 rounded-xl">
                <Link href={"/about"}>Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
