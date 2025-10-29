import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <>
      <section className="g_parent pt-[5%] pb-[5%] bg-white">
        <div className="parent flex-col gap-y-[3em]">
          <div className="w-full h-fit flex justify-center items-center flex-col gap-y-[20px]">
            <h3 className="text-blue-500 pt-[.6%] pb-[.6%] pl-[20px] pr-[20px] bg-white rounded-3xl shadow-lg font-semibold">
              Pricing
            </h3>
            <h2 className="text-black font-semibold [text-shadow:_1px_1px_1px_#444] text-4xl text-center">
              No monthly subscriptions
            </h2>
            <p className="max-w-[350px] text-center text-1xl">
              Pay once get your dashboard, no hidden costs ongoing types, just
              simple transparent pricing.
            </p>
            <div className="bg-black/10 flex gap-x-[10px] rounded-4xl w-fit h-fit p-[5px]">
              <span className="bg-white shadow-lg pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-4xl">
                Individual
              </span>
              <span className="shadow-lg pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-4xl">
                Group
              </span>
            </div>
          </div>

          <div className="flex w-full h-fit flex-wrap sm:flex-wrap md:flex-nowrap justify-center gap-x-[1em] items-center gap-4">
            <div className="flex shadow-sm flex-col gap-y-[2em] bg-gradient-to-b from-blue-500/30 via-blue-500/13 to-white-500 w-[90%] md:w-[25%] sm:w-[44%] h-fit hover:scale-103 transition-transform duration-300 rounded-3xl pt-[6%] pb-[3%] pl-[3%] pr-[3%] sm:pt-[4%] sm:pb-[1%] sm:pl-[1%] sm:pr-[1%] justify-center items-center">
              <span className="flex flex-col gap-y-[5px] w-full h-fit">
                <p className="text-black">Basic</p>
                <h2 className="text-black font-bold text-3xl">30$</h2>
              </span>
              <div className="flex flex-col gap-y-[.5em] w-full h-fit">
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">30 HG Dashboard</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">2 Brushes</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">3 Credits</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">Done in 60 minutes</label>
                </span>
              </div>
              <Link
                to=""
                className="bg-blue-600 w-full h-fit flex justify-center items-center rounded-3xl pt-[2%] pb-[2%] text-white hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>

            <div className="flex shadow-lg flex-col bg-gradient-to-b from-red-500/30 via-red-500/13 gap-y-[2em] bg-blue-300/10 w-[90%] md:w-[25%] sm:w-[44%] hover:scale-103 transition-transform pt-[4%] pb-[4%] pl-[3%] pr-[3%] duration-300 h-fit rounded-3xl md:pt-[6%] md:pb-[6%] md:pl-[1%] md:pr-[1%] justify-center items-center">
              <span className="flex flex-col gap-y-[5px] w-full h-fit">
                <p className="text-black">Standard</p>
                <h2 className="text-black font-bold text-3xl">39$</h2>
              </span>
              <div className="flex flex-col gap-y-[.5em] w-full h-fit">
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">30 HG Dashboard</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">2 Brushes</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">3 Credits</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">Done in 60 minutes</label>
                </span>
              </div>
              <Link
                to=""
                className="bg-blue-600 w-full h-fit flex justify-center items-center rounded-3xl pt-[2%] pb-[2%] text-white hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>

            <div className="flex shadow-sm flex-col bg-gradient-to-b from-blue-500/30 via-blue-500/13 gap-y-[2em] bg-blue-300/10 w-[90%] md:w-[25%] sm:w-[44%] hover:scale-103 transition-transform duration-300 h-fit rounded-3xl pt-[6%] pb-[3%] pl-[3%] pr-[3%] sm:pt-[4%] sm:pb-[1%] sm:pl-[1%] sm:pr-[1%] justify-center items-center">
              <span className="flex flex-col gap-y-[5px] w-full h-fit">
                <p className="text-black">Pro</p>
                <h2 className="text-black font-bold text-3xl">50$</h2>
              </span>
              <div className="flex flex-col gap-y-[.5em] w-full h-fit">
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">30 HG Dashboard</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">2 Brushes</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">3 Credits</label>
                </span>
                <span className="flex gap-x-[10px]">
                  <input type="radio" checked />
                  <label htmlFor="">Done in 60 minutes</label>
                </span>
              </div>
              <Link
                to=""
                className="bg-blue-600 w-full h-fit flex justify-center items-center rounded-3xl pt-[2%] pb-[2%] text-white hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
