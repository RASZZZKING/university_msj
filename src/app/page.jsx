import Badge from "@/components/Badge";
import Carousel from "@/components/Carousel";
import Carousel2 from "@/components/Carousel/Carousel2";
import CuriculumCard from "@/components/CuriculumCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import News from "@/components/NewsPage";
import ParalaxReview from "@/components/ParalaxReview";
import ReviewPeople from "@/components/ReviewPeople";
import VideosPage from "@/components/VideosPage";
import VisiMision from "@/components/VisiMision";
import HeadPage from "@/components/utils/HeadPage";
import HeadPage2 from "@/components/utils/HeadPage/HeadPage2";
import Image from "next/image";
import React from "react";
import "aos"
import authUserSession from "@/models/libs/auth-libs";
import { redirect } from "next/dist/server/api-utils";
import prisma from "@/models/libs/prisma";

const Page = async() => {
  const user = await authUserSession()
  console.log(user);
  const data = await prisma.account.findFirst({
    where: { email: user?.email }
  })

  return (
    <div className="bg-white min-h-svh">
      <Navbar user={user} hasReg={data} />
      <Carousel2 />
      <VideosPage />
      <ParalaxReview />
      <div className="-mt-1 -mb-5">
      <HeadPage head={"Why Must Unindra?"} title={"Best Curiculum UNINDRA"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sint neque necessitatibus maiores minima ab suscipit inventore porro, amet commodi. Vel repellendus officiis, eveniet veritatis ratione sunt eos culpa natus."} />
      </div>
      <CuriculumCard />
      <Badge />
      <VisiMision />
      <div className="-mt-5">
      <HeadPage  head={"What Others Say?"} title={"From Unindra To Others"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sint neque necessitatibus maiores minima ab suscipit inventore porro, amet commodi. Vel repellendus officiis, eveniet veritatis ratione sunt eos culpa natus."} />
      </div>
      <ReviewPeople />
      <News />
      <Footer/>
    </div>
  );
};

export default Page;
