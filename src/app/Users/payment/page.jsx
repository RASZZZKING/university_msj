import ContentDashMobile from "@/components/Content/ContentDashMobile";
import ContentPayment from "@/components/Content/ContentPayment";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <Navbar />
        <NavbarSamping />
      </div>
      <ContentPayment />
      <NavbarMobile />
    </>
  );
};

export default page;
