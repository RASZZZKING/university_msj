"use client"

import Image from "next/image";
import Rem from "../../../public/rem.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Navbar = ({user, hasReg}) => {
  const sessionUser = user ? {title: "Logout" ,login: "/api/auth/signout"} : {title: "Login" ,login:"/Login"}
  hasReg = hasReg && user ? {title: "Update Data" ,login: "/Users/dashboard"} : {title: "Register Form" ,login:"/Register"}


  const path = usePathname()
  const custom = path === "/Users/dashboard2"  || path === "/Users/payment"

  return (
    <div className={`w-full flex justify-center h-auto z-30 shadow-md bg-color-primary ${custom && "fixed"}`}>
      <div className="navbar w-11/12 justify-between">
        <Link href={`/`} className="flex-1 ">
          <Image
            src={Rem}
            width={100}
            height={100}
            alt="rem"
            className="aspect-8 h-16 w-14  btn btn-ghost p-2   rounded-xl ms-10"
          />
        </Link>
        <div className="flex-none flex justify-between ">
          <div className="md:flex hidden mr-20 text-2xl font-bold">
            <div className="wrapperMenu">
              <Link
                className={`menuActive hover:text-color-dark ${ path === "/" && "actived"}`}
                href="/"
              >
                Home
              </Link>
              <Link className={`menuActive hover:text-color-dark ${ path === "/News" && "actived"}`} href="/News">
                News
              </Link>
              <Link className={`menuActive hover:text-color-dark ${ path === "/Login" && "actived"}`} href={sessionUser.login}>
                {sessionUser.title}
              </Link>
              <Link className={`menuActive hover:text-color-dark ${ path === "/Register" && "actived"}`} href={hasReg.login}>
                {hasReg.title}
              </Link>
              <Link className={`menuActive hover:text-color-dark ${ path === "/Help" && "actived"}`} href="/Help">
                Help
              </Link>
              <div className="animationss start-home"></div>
            </div>
          </div>
          <div className="dropdown dropdown-end relative z-20 bg-color-primary text-color-dark">
              <label tabIndex={0} role="button" className="btn btn-ghost swap md:hidden bg-color-primary border-none text-color-dark mr-4 swap-rotate">
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

          <div className="btn btn-ghost btn-circle me-10 hidden ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              width={25}
              height={25}
              style={{ color: "#000000" }}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
