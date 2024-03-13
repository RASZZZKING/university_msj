const HeadPage = ({head, title, description}) => {
    return(
        <div className="flex justify-center my-14">
            <div className="flex flex-col w-8/12 items-center justify-center">
                <p className="text-color-birulaut font-semibold mb-1">{head}</p>
                <p className="font-bold text-color-dark text-3xl text-center">{title}</p>
                <div className="w-32 bg-color-birulaut h-0.5 rounded-lg"></div>
                <p className="text-color-dark text-base text-center mt-5">{description}</p>
            </div>
        </div>
    )
}

export default HeadPage