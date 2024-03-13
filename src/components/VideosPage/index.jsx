const VideosPage = () => {
    return(
        <div className="text-color-dark mt-14 md:mt-32  md:mb-40 flex justify-center">
            <div className="w-9/12 flex max-xl:flex-col-reverse flex-wrap-reverse flxLow ">
                <div className="xl:w-7/12 w-full max-md:mt-10 matOp flex flex-col gap-2 ">
                    <p className="text-lg font-semibold">+ Unindra Info School</p>
                    <p className="text-3xl font-bold">Invest Your Knowledge Here.</p>
                    <p className="text-base text-wrap pad12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quasi nihil, culpa aspernatur ullam, laborum consequuntur tempore tempora repellat libero accusantium dicta cupiditate natus necessitatibus, veritatis ex autem! Beatae dolorum officia, odit deleniti aperiam tempore non reiciendis dolorem fuga ab?</p>
                    <p className="text-base text-wrap pad12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloribus ipsum non. Atque rerum corporis impedit facilis cumque beatae recusandae.</p>
                    <div className="xl:w-5/12 max-md:mt-3 flex gap-3 max-md:justify-end">
                        <button className ="btn btn-xs hover:bg-color-primary hover:text-color-birulaut text-color-primary rounded-md btn-active bg-color-birulaut border-none shadow-lg font-bold">Read More</button>
                    </div>
                </div>
                <div className="xl:w-5/12 w-full   flex justify-center md:justify-end "  >
                    <div className="aspect-video w-100 max-sm:w-72 border-8 border-color-birulaut absolute mt-3 sm:mt-5 max-sm:ms-3 sm:max-md:ms-5">

                    </div>
                    <div className="aspect-video w-100 max-sm:w-72 absolute z-10 bg-color-dark me-5">
                    </div>
                    <div className="aspect-video w-100 max-sm:w-72 mt-3 sm:mt-5 max-sm:ms-3 sm:max-md:ms-5">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideosPage