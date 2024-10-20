import best_program from "@/models/data/best_program";

const CuriculumCard = () => {
  return (
    <div className="flex justify-center   text-color-dark">
      <div className="flex gap-10 max-md:flex-col flex-wrap justify-center">
        {best_program.data.slice(0,3).map((cb, i) => (
          <CardTemplate cb={cb} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CuriculumCard;

const CardTemplate = ({ cb }) => {
  return (
    <div className=" w-80 max-sm:w-64 bg-color-primary shadow-2xl  p-3 rounded-xl">
      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={cb.image_url} alt={cb.image_url}
          className="h-32 w-11/12  bg-color-secondary rounded-xl object-cover">
          
          </img>
          <p className="font-bold my-4 text-xl text-center">{cb.name}</p>
          <p className="opacity-80 text-sm  text-center max-md:p-3">
            {cb.copywriting}
          </p>
        </div>
        <div          //flex
         className=" justify-center mt-2 hidden">
          <button className="btn  text-color-primary hover:bg-color-primary hover:text-color-dark btn-sm mt-2">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
