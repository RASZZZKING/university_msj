"use client"

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const DataImg = [
  {
    img_url: "img1",
    title: "EL SA VA DORE EL Gusion Jess No Limit TOP GLOBAL 1 GUSION EVOS Player from Indonesian",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus deleniti sint porro ex ipsa, quasi sapiente soluta enim tempora illo magnam quisquam obcaecati atque perferendis distinctio. Pariatur esse nisi ipsum?",
    writer: "Ericko Lim",
  },
  {
    img_url: "img2",
    title: "EL SA VA DORE EL Lancelot Kairi TOP GLOBAL 1 LANCELOT ONIC Player from Philiphina",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus deleniti sint porro ex ipsa, quasi sapiente soluta enim tempora illo magnam quisquam obcaecati atque perferendis distinctio. Pariatur esse nisi ipsum?",
    writer: "Raszking",
  },
  {
    img_url: "img3",
    title: "EL SA VA DORE EL Fanny Zxuan TOP GLOBAL 1 Fanny Player from South Korea",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus deleniti sint porro ex ipsa, quasi sapiente soluta enim tempora illo magnam quisquam obcaecati atque perferendis distinctio. Pariatur esse nisi ipsum?",
    writer: "Brandon Kent",
  },
  {
    img_url: "img4",
    title: "",
    desc: "",
    writer: "",
  },
  {
    img_url: "img5",
    title: "",
    desc: "",
    writer: "",
  },
]

const VisiMision = () => {
  const [logData, setLogData] = useState(0)

  const currentChampion = (param) => {
    setLogData(param)
  }


  return (
    <div className="min-h-dvh flex justify-center items-center bg-color-secondary max-xl:py-10 max-xl:px-2">
      <div className="w-10/12  flex  max-xl:flex-col-reverse max-xl:gap-5">
        {/* Visionn mISSION */}
        <div className="xl:w-1/2 w-full xl:pe-20 max-xl:mt-10">
          <p className="text-5xl font-bold text-color-primary ">Our Champion</p>
          <div className="w-20 h-1 rounded-xl mt-1 mb-5 xl:mb-14 bg-color-primary"></div>
          <div className="flex gap-4 max-sm:flex-col">
          <div className="sm:flex-col max-sm:justify-between flex gap-4 mt-2">
            {DataImg.slice(0,3).map((cb, index)=>{
              return(
                <button key={index} onClick={()=>currentChampion(index)} className="cursor-pointer" >
                  <Image height={1000} width={1000}  className="h-20 w-20  max-[360px]:h-16 max-[360px]:w-16 rounded-lg bg-color-primary"  alt={`${cb.img_url} NA`} />
                </button>
              )
            })}
          </div>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="w-6 h-6 mt-1 text-color-primary max-sm:hidden"
            />
            <OurChampion logData={logData} /> 
          </div>
        </div>
        {/* Collapse */}
        <div className="xl:w-1/2 w-full ">
          <div>
            <p className="text-5xl font-bold text-color-primary ">Our Vision</p>
            <div className="w-20 h-1 rounded-xl mt-1 mb-5 bg-color-primary"></div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow text-color-primary border-color-primary border-2 mb-5"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>

          <p className="text-5xl font-bold text-color-primary max-xl:mt-10">
            Our Mission
          </p>
          <div className="w-20 h-1 rounded-xl mt-1 mb-5 bg-color-primary"></div>
          {/* tableDaisy */}
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse text-color-primary collapse-arrow border-2 border-color-primary mt-2.5">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMision;



const OurChampion = ({title, desc, writer, logData}) => {
  return(
    <div className="flex-col max-sm:mt-2 flex max-sm:gap-2 gap-4 text-color-primary">
              <p className="text-2xl font-bold">
                {DataImg[logData].title}
              </p>
              <p className="text-base">
                {DataImg[logData].desc}
              </p>
              <p className="text-base"> -{DataImg[logData].writer}</p>
    </div>
  )
}
