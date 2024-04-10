import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News, { HeaderNews } from "@/components/NewsPage";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <HeaderNews />
      </div>
      <div className="mt-6 pb-10">
        <News />
        <News />
      </div>
      <Footer />
    </>
  );
};

export default page;
