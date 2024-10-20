import { review } from "@/models/data/review";

const ReviewPeople = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: `url("/logo/kumpul.jpg")`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
       }} className="h-72 bg-color-secondary p-5 text-color-primary flex justify-center flex-col items-center">
        <p className="text-3xl text-center font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)">
          Terimakasih untuk Wali Murid karena telah mempercayai Kami
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="min-h-64 w-10/12 flex max-md:flex-col gap-8 -mt-16">
        {review.data.slice(0,3).map((cb,i)=>(
          <Testimoni cb={cb} key={i} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPeople;

const Testimoni = ({cb}) => {
  return(
    <div className="md:w-4/12 w-full p-6 gap-4 flex flex-col bg-color-primary rounded-xl shadow-xl ">
          <div className="flex gap-4">
                <div className="w-10 h-10 bg-color-secondary rounded-full"></div>
                <div className="flex flex-col text-color-dark gap-1">
                    <p className="text-sm font-bold">{cb.nama}</p>
                    <p className="text-xs opacity-80">{cb.sebagai}</p>
                </div>
            </div>
            <p className="text-base text-color-secondary opacity-80">
            <span className="text-lg font-bold text-color-dark opacity-100 "></span>
            {cb.pesan}
            </p>
            
          </div>
  )
}