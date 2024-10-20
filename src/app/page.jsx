import Badge from "@/components/Badge";
import Carousel2 from "@/components/Carousel/Carousel2";
import CuriculumCard from "@/components/CuriculumCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ParalaxReview from "@/components/ParalaxReview";
import ReviewPeople from "@/components/ReviewPeople";
import VideosPage from "@/components/VideosPage";
import VisiMision from "@/components/VisiMision";
import HeadPage from "@/components/utils/HeadPage";
import React from "react";
import "aos";
import authUserSession from "@/models/libs/auth-libs";
import prisma from "@/models/libs/prisma";
import News from "@/components/NewsPage";

const Page = async () => {
  const user = await authUserSession();
  const data = await prisma.account.findFirst({
    where: { email: user?.email },
  });
  return (
    <div className="bg-white min-h-svh">
        <Navbar user={user} hasReg={data} />
      <Carousel2 />
      <VideosPage />
      <ParalaxReview />
      <div className="-mt-1 -mb-5">
        <HeadPage
          head={"Why Must Muslimah Sejati?"}
          title={"Our Best Program"}
          description={
            "Program Unggulan kami menghasilkan 13 Juara dari beberapa kompetisi yang kami ikut secara kompeten, Kami merancang program ini berdasarkan pengamatan serta penelitian pengembangan anak secara mendala serta berkala."
          }
        />
      </div>
      <CuriculumCard />
      <Badge />
      <VisiMision />
      <div className="-mt-5">
        <HeadPage
          head={"What Others Say?"}
          title={"From Muslimah Sejati To Others"}
          description={
            "At our Islamic boarding school, we aim to nurture young Muslimahs into strong, knowledgeable, and compassionate individuals who can inspire and uplift others. By deepening your understanding of Islam and building leadership skills, you'll be prepared not just for personal success, but to become a positive influence in your community, embodying the values of a true Muslimah. Through our holistic education, you will grow into someone who can guide others, share your wisdom, and make a lasting impact."
          }
        />
      </div>
      <ReviewPeople />
      <News />
      <Footer />
    </div>
  );
};

export default Page;
