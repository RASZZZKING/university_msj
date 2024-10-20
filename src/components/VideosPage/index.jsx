const VideosPage = () => {
    return(
        <div className="text-color-dark mt-14 md:mt-32  md:mb-40 flex justify-center">
            <div className="w-9/12 flex max-xl:flex-col-reverse flex-wrap-reverse flxLow ">
                <div className="xl:w-7/12 w-full max-md:mt-10 matOp flex flex-col gap-2 ">
                    <p className="text-lg font-semibold">+ Muslimah Sejati School</p>
                    <p className="text-3xl font-bold">Invest Your Knowledge Here.</p>
                    <p className="text-base text-wrap whitespace-pre pad12">{`Discover a place where your education is not only about academics but also about building character and deepening your faith. At our Islamic boarding school for girls, we provide a balanced curriculum that combines modern subjects with Islamic teachings, helping you grow intellectually and spiritually in a supportive environment.

Join a community that nurtures leadership, discipline, and personal growth. With our strong focus on both religious and academic excellence, you'll gain the tools and knowledge to succeed in this world while staying true to your Islamic values.
                    `}</p>
                    <div className="xl:w-5/12 max-md:mt-3 flex gap-3 max-md:justify-end">
                        <button className ="btn btn-xs hover:bg-color-primary hover:text-color-birulaut text-color-primary rounded-md btn-active bg-color-birulaut border-none shadow-lg font-bold">Know More</button>
                    </div>
                </div>
                <div className="xl:w-5/12 w-full   flex justify-center md:justify-end "  >
                    <div className="aspect-video w-100 max-sm:w-72 border-8 border-color-birulaut absolute mt-3 sm:mt-5 max-sm:ms-3 sm:max-md:ms-5">

                    </div>
                    <iframe src={"https://www.youtube.com/embed/ueT_X1bx_s0"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="aspect-video w-100 max-sm:w-72 absolute z-10 bg-color-dark me-5">

                    </iframe>
                    <div className="aspect-video w-100 max-sm:w-72 mt-3 sm:mt-5 max-sm:ms-3 sm:max-md:ms-5">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideosPage