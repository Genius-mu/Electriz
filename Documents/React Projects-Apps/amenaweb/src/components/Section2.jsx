import { motion } from "framer-motion";

const Section2 = () => {
  // Animation variants
  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.95 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="g_parent pt-[3%] pb-[3%]">
        <div className="parent flex-col gap-y-[1em]">
          {/* Header Texts */}
          <div className="w-full h-fit flex justify-center items-center flex-col gap-y-[20px]">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-blue-500 pt-[.6%] pb-[.6%] pl-[20px] pr-[20px] bg-white rounded-3xl shadow-lg font-semibold"
            >
              Example Generations
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-black max-w-[500px] text-2xl font-semibold [text-shadow:_1px_1px_1px_#444] sm:text-4xl text-center"
            >
              <span className="text-blue-500 [text-shadow:_1px_1px_1px_#999]">
                10+ AI Styles,
              </span>{" "}
              to generate headshots that you want
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-[380px] text-center text-[14px] sm:text-[16px]"
            >
              The most photographic & customizable professional AI headshot
              generator
            </motion.p>
          </div>

          {/* Cards Section */}
          <div className="flex w-full justify-center items-center flex-col gap-y-[1em]">
            {/* ======= First Row ======= */}
            <div className="flex w-full flex-wrap gap-4 justify-center items-center gap-x-[1em]">
              {[
                "Generation 1",
                "Generation 2",
                "Generation 3",
                "Generation 4",
              ].map((text, index) => (
                <motion.div
                  key={text}
                  variants={fadeVariants}
                  initial={
                    index % 2 === 0
                      ? "hiddenLeft"
                      : "hiddenRight"
                  }
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.2 }}
                  id="clBG"
                  className="flex h-[14em] border-1 border-black/10 shadow-lg rounded-2xl w-[19%] justify-between flex-col p-[1%] flex-wrap md:w-[30%] w-[90%] sm:w-[45%] xl:w-[20%] p-[3%] sm:p-[1%] bg-white/70 hover:scale-[1.04] transition-transform duration-500"
                >
                  <div className="w-[2.5em] h-[2.5em] rounded-[10px] shadow-lg overflow-hidden border-1 border-white">
                    <img
                      src="/image/user4.jpg"
                      alt="Centered image"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <p className="bg-blue-500 rounded-4xl pt-[.5%] pb-[.5%] pl-[10px] text-[14px] pr-[10px] w-fit font-semibold text-white shad">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ======= Second Row ======= */}
            <div className="flex flex-wrap w-full justify-center gap-4 items-center gap-x-[1em]">
              {[
                "Generation 5",
                "Generation 6",
                "Generation 7",
                "Generation 8",
              ].map((text, index) => (
                <motion.div
                  key={text}
                  variants={fadeVariants}
                  initial={
                    index % 2 === 0
                      ? "hiddenUp"
                      : "hiddenLeft"
                  }
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.25 }}
                  id="clBG2"
                  className="flex h-[14em] border-1 border-black/10 shadow-lg rounded-2xl w-[19%] justify-between md:w-[30%] w-[90%] sm:w-[45%] xl:w-[20%] flex-col p-[3%] sm:p-[1%] bg-white/70 hover:scale-[1.04] transition-transform duration-500"
                >
                  <div className="w-[2.5em] h-[2.5em] rounded-[10px] shadow-lg overflow-hidden border-1 border-white">
                    <img
                      src="/image/user4.jpg"
                      alt="Centered image"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <p className="bg-blue-500 rounded-4xl pt-[.5%] pb-[.5%] pl-[10px] text-[14px] pr-[10px] w-fit font-semibold text-white shad">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
