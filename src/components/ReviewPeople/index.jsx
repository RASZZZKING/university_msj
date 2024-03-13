const ReviewPeople = () => {
  return (
    <div>
      <div className="h-72 bg-color-secondary p-5 text-color-primary flex justify-center flex-col items-center">
        <p className="text-3xl text-center font-semibold">
          Thanks For Wali Murid karena telah mempercayai Kami
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="min-h-64 w-10/12 flex max-md:flex-col gap-8 -mt-16">
          <Testimoni />
          <Testimoni />
          <Testimoni />
        </div>
      </div>
    </div>
  );
};

export default ReviewPeople;

const Testimoni = ({nama, namaDetail, header, content}) => {
  return(
    <div className="md:w-4/12 w-full p-6 gap-4 flex flex-col bg-color-primary rounded-xl shadow-xl ">
          <div className="flex gap-4">
                <div className="w-10 h-10 bg-color-secondary rounded-full"></div>
                <div className="flex flex-col text-color-dark gap-1">
                    <p className="text-sm font-bold">Iki Ganteng</p>
                    <p className="text-xs opacity-80">Orang tua murid</p>
                </div>
            </div>
            <p className="text-base text-color-secondary opacity-80">
            <span className="text-lg font-bold text-color-dark opacity-100 "> Lorem ipsum dolor sit amet.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              provident eius non itaque velit adipisci dicta necessitatibus quae
              exercitationem. Cumque, id. Laborum, amet doloremque suscipit
              culpa eius quas ipsum nobis, quis architecto nulla facilis
              reiciendis quae at tempore velit commodi?
            </p>
            
          </div>
  )
}