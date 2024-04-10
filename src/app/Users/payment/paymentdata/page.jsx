import ContentPaymentMobile from "@/components/Content/ContentPaymentMobile";
import ContentPaymentPC from "@/components/Content/ContentPaymentPC";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <NavbarSamping />
      </div>
      {/* <ContentPayment /> */}
      <ContentPaymentMobile />
      <ContentPaymentPC />
      <NavbarMobile />
    </>
  );
};

export default page;
