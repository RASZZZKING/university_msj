import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
  return (
    <div className="flex flex-col  items-center justify-center gap-5">
      <div className="w-9/12 flex justify-between items-end  mt-20 text-color-dark">
        <div className="flex flex-col gap-1.5">
          <p className="text-xl font-bold italic drop-shadow-xl">
            Latest Updates
          </p>
          <p className="text-3xl drop-shadow-xl">NEWS & EVENTS</p>
        </div>
        <div className="flex flex-row gap-3">
          <p className="md:text-xl  font-semibold drop-shadow-xl">
            SEE ALL NEWS AND EVENTS
          </p>
          <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
        </div>
      </div>
      <div className="w-9/12 flex flex-col gap-8 ">
        <div className="flex max-md:flex-col w-full md:mt-3 gap-8">
          <div className="rounded-lg mt-5 md:my-10 shadow-2xl bg-color-secondary aspect-video w-full md:w-6/12"></div>
          <div className="md:w-6/12 w-full gap-8 md:pe-8 flex max-sm:flex-col">
            <div className="aspect-89 shadow-2xl flex flex-col justify-between items-center rounded-lg bg-color-primary w-full sm:w-6/12">
              <div className=" flex flex-col justify-center items-center">
                <div className="w-full aspect-video rounded-t-lg bg-color-secondary"></div>
                <div className="w-9/12 mt-4 flex flex-col gap-1">
                  <p className="text-lg font-semibold text-color-dark">
                    Makrab Events
                  </p>
                  <p className="text-sm text-color-dark opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sint eos quidem! Saepe veritatis veniam quia eum
                    ut, ipsam vel...
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-9/12 pb-4 pt-2 ">
                <p className="text-color-birulaut text-end">Read More</p>
              </div>
            </div>
            <div className="aspect-89 shadow-2xl flex flex-col justify-between items-center rounded-lg bg-color-primary w-full sm:w-6/12">
              <div className=" flex flex-col justify-center items-center">
                <div className="w-full aspect-video rounded-t-lg bg-color-secondary"></div>
                <div className="w-9/12 mt-4 flex flex-col gap-1">
                  <p className="text-lg font-semibold text-color-dark">
                    Makrab Events
                  </p>
                  <p className="text-sm text-color-dark opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sint eos quidem! Saepe veritatis veniam quia eum
                    ut, ipsam vel...
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-9/12 pb-4 pt-2 ">
                <p className="text-color-birulaut text-end">Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-row-reverse max-md:flex-col w-full md:mt-3 gap-8">
          <div className="rounded-lg mt-5 md:my-10 md:ms-8 shadow-2xl bg-color-secondary aspect-video w-full md:w-6/12"></div>
          <div className="md:w-6/12 w-full gap-8 flex max-sm:flex-col ">
            <div className="aspect-89 shadow-2xl flex flex-col justify-between items-center rounded-lg bg-color-primary w-full sm:w-6/12">
              <div className=" flex flex-col justify-center items-center">
                <div className="w-full aspect-video rounded-t-lg bg-color-secondary"></div>
                <div className="w-9/12 mt-4 flex flex-col gap-1">
                  <p className="text-lg font-semibold text-color-dark">
                    Makrab Events
                  </p>
                  <p className="text-sm text-color-dark opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sint eos quidem! Saepe veritatis veniam quia eum
                    ut, ipsam vel...
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-9/12 pb-4 pt-2 ">
                <p className="text-color-birulaut text-end">Read More</p>
              </div>
            </div>
            <div className="aspect-89 shadow-2xl flex flex-col justify-between items-center rounded-lg bg-color-primary w-full sm:w-6/12">
              <div className=" flex flex-col justify-center items-center">
                <div className="w-full aspect-video rounded-t-lg bg-color-secondary"></div>
                <div className="w-9/12 mt-4 flex flex-col gap-1">
                  <p className="text-lg font-semibold text-color-dark">
                    Makrab Events
                  </p>
                  <p className="text-sm text-color-dark opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt sint eos quidem! Saepe veritatis veniam quia eum
                    ut, ipsam vel...
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-9/12 pb-4 pt-2 ">
                <p className="text-color-birulaut text-end">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
