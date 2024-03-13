const CuriculumCard = () => {
  return (
    <div className="flex justify-center   text-color-dark">
      <div className="flex gap-10 max-md:flex-col flex-wrap justify-center">
        <CardTemplate
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt esse eos natus modi impedit a rem, eaque id quisquam expedita asperiores tempora dolorem autem harum, iste at eligendi in!"
          }
        />
        <CardTemplate
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque est laudantium aspernatur officia maxime. Provident error sunt quia hic voluptatibus quisquam veritatis natus. Quasi perferendis, ut quis aliquid dolores accusamus perspiciatis. Libero ea esse doloribus deleniti sed voluptatum, corrupti voluptates!"
          }
        />
        <CardTemplate
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque est laudantium aspernatur officia maxime. Provident error sunt quia hic voluptatibus quisquam veritatis natus. Quasi perferendis, ut quis aliquid dolores accusamus perspiciatis. Libero ea esse doloribus deleniti sed voluptatum, corrupti voluptates!"
          }
        />
      </div>
    </div>
  );
};

export default CuriculumCard;

const CardTemplate = ({ content }) => {
  return (
    <div className=" w-80 max-sm:w-64 bg-color-primary shadow-2xl  p-3 rounded-xl">
      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="h-32 w-11/12  bg-color-secondary rounded-xl"></div>
          <p className="font-bold my-4 text-xl text-center">
            Curiculum Merdeka Best
          </p>
          <p className="opacity-80 text-sm  text-center max-md:p-3">{content}</p>
        </div>
        <div className="flex justify-center mt-2">
          <button className="btn  text-color-primary hover:bg-color-primary hover:text-color-dark btn-sm mt-2">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};
