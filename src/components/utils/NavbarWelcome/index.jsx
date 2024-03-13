import { faArrowLeft, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";



const NavbarWelcome = () => {
    return (
      <Link href={"/"} className="absolute mt-10 cursor-pointer ms-20">
        <FontAwesomeIcon  icon={faArrowLeft} className="w-8 h-8 text-color-dark" />
      </Link>
    );
  };

export default NavbarWelcome