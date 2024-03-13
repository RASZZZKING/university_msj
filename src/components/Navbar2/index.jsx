import Image from "next/image";
import Rem from "../../../public/rem.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Navbar2 = ({historyInput}) => {
  historyInput === 0 ? historyInput = "Lengkapi Data" : historyInput = "Ubah Data"
  return (
    <div className="w-full flex justify-center h-auto sticky z-30 shadow-xl bg-color-primary">
      <div className="navbar  w-full">
        <Link href={`/`} className="flex-1 ">
          <Image
            src={Rem}
            width={100}
            height={100}
            alt="rem"
            className="aspect-8 h-16 w-14  btn btn-ghost p-2  ms-5 rounded-xl "
          />
        </Link>
        <div className="flex-none flex justify-between ">
          <div className="md:flex hidden mr-20 text-2xl font-bold">
            <div className="wrapperMenu">
              <Link
                className="menuActive hover:text-color-dark " href="#"
              >
                Home
              </Link>
              <Link className="menuActive hover:text-color-dark  " href="#">
                About
              </Link>
              <Link className="menuActive hover:text-color-dark " href="/Upload">
                Upload
              </Link>
              <Link className="menuActive hover:text-color-dark actived" href="/Users">
                {historyInput}
              </Link>
              <Link className="menuActive hover:text-color-dark " href="/Help">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
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

export default Navbar2;
