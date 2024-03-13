const HeadPage2 = ({head, title, description}) => {
    return(
        <div className="flex justify-center mt-14 mb-10">
            <div className="flex flex-col w-8/12 items-center justify-center">
                <p className="font-bold text-color-dark text-5xl py-10 px-32 border-4 border-color-dark rounded-lg">{title}</p>
            </div>
        </div>
    )
}

export default HeadPage2