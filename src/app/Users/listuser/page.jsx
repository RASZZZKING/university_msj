import ContentListSiswa from "@/components/Content/ContentListSiswa";
import NavbarMobile from "@/components/utils/NavbarMobile";
import NavbarSamping from "@/components/utils/NavbarSamping";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <NavbarSamping />
      </div>
      <ContentListSiswa />
      <NavbarMobile />
    </>
  );
};

export default page;
