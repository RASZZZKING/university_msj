const ParalaxReview = () => {
    return(
    <div style={{backgroundImage: `url("/logo/orientasi_santri.jpg")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }} className="h-64  flex flex-col gap-14 text-color-primary bg-color-secondary justify-center items-center mt-16 md:mt-32 p-4">
        <p className="font-bold md:text-3xl sm:text-2xl text-xl lg:px-20  text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">Belajar Disini dengan Pembelajaran yang Aktif dengan Materi berkualitas, Kritis dalam berfikir serta Kreatif dalam Kemajuan.</p>
        <div className="flex sm:gap-14 gap-2 ">
        <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">9</p>
                <p className="sm:text-base text-xs max-sm:font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">Porgram Tahunan</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">11</p>
                <p className="sm:text-base text-xs max-sm:font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">Program Unggulan</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">14</p>
                <p className="sm:text-base text-xs max-sm:font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">Fasilitas Premium</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">8</p>
                <p className="sm:text-base text-xs max-sm:font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">Ekstrakurikuler</p>
            </div>
        </div>
    </div>
    )
}

export default ParalaxReview