import React from "react";

const Section3 = () => {
  return (
    <>
      <section className="g_parent pt-[5%] pb-[5%] bg-blue-500/5">
        <div className="parent flex-col gap-y-[1em]">
          <div className="flex flex-col sm:flex-col gap-2 md:flex-row w-full h-fit justify-around items-center">
            <span className="flex flex-col items-center justify-center sm:justify-center sm:items-center md:items-start md:justify-start h-full w-fit gap-y-[1em]">
              <p className="bg-white text-blue-700 shadow-lg pl-[4%] pr-[4%] pt-[1%] pb-[1%] rounded-2xl w-fit font-semibold text-center">
                Business Leadership
              </p>
              <h2 className="text-black font-bold text-3xl text-center sm:text-center md:text-left max-w-[350px]">
                <span className="text-blue-500">649,938+</span> headshots
                already created with us
              </h2>
            </span>
            <span className="flex flex-col h-full text-center md:text-left w-fit gap-y-[1em]">
              <p className="text-black max-w-[400px]">
                Here is what the dashboards are saying about our product when
                having samples
              </p>
            </span>
          </div>
          <div className="flex justify-center gap-3 flex-wrap sm:flex-wrap md:flex-nowrap items-center gap-x-[3%] w-full h-fit">
            <div className="w-[90%] sm:50% md:w-[30%] xl:w-[25%] h-[17em] rounded-2xl shadow-lg overflow-hidden border-1 border-white">
              <img
                src="/image/user1.jpg"
                alt="Centered image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-[90%] sm:50% md:w-[30%] xl:w-[25%] h-[17em] rounded-2xl shadow-lg overflow-hidden border-1 border-white">
              <img
                src="/image/user1.jpg"
                alt="Centered image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-[90%] md:w-[30%] xl:w-[25%] h-[17em] rounded-2xl shadow-lg overflow-hidden border-1 border-white">
              <img
                src="/image/user1.jpg"
                alt="Centered image"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
