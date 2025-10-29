import { motion } from "framer-motion";

const Section1 = () => {
  // Variants for the cards’ animation styles
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.9 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.9 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.9 },
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
      <section className="g_parent pt-[6%] pb-[3%] bg-white">
        <div className="parent flex flex-col gap-y-[1em]">
          {/* Header Section */}
          <div className="w-full h-fit flex justify-center items-center flex-col gap-y-[20px]">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-blue-500 pt-[.6%] pb-[.6%] pl-[20px] pr-[20px] bg-white rounded-3xl shadow-lg font-semibold"
            >
              How it Works
            </motion.h3>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-black text-2xl font-semibold [text-shadow:_1px_1px_1px_#444] sm:text-4xl text-center"
            >
              How it Works? It's simple
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-[350px] text-center text-[13px] sm:text-xl"
            >
              Get professional headshots in 3 simple steps. No need to leave
              your home.
            </motion.p>
          </div>

          {/* Cards Section */}
          <div className="flex w-full flex-wrap gap-4 justify-center items-center gap-x-[20px] mt-[2em]">
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl md:w-[30%] w-[90%] sm:w-[45%] xl:w-[20%] h-fit shadow-lg p-[20px] flex flex-col gap-y-[20px] justify-center items-center bg-blue-500/20 hover:scale-[1.05] transition-transform duration-500"
            >
              <div className="w-full h-[10em] rounded-2xl shadow-lg overflow-hidden border border-white">
                <img
                  src="/image/user3.jpg"
                  alt="Centered image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-y-[7px]">
                <h2 className="font-semibold text-[18px]">
                  Upload a few photos
                </h2>
                <p className="text-[15px] text-gray-700">
                  You'll receive different backgrounds, poses, and styles to
                  download easily.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl md:w-[30%] w-[90%] sm:w-[45%] xl:w-[20%] h-fit shadow-lg p-[20px] flex flex-col gap-y-[20px] justify-center items-center bg-blue-500/20 hover:scale-[1.05] transition-transform duration-500"
            >
              <div className="w-full h-[10em] rounded-2xl shadow-lg overflow-hidden border border-white">
                <img
                  src="/image/user4.jpg"
                  alt="Centered image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-y-[7px]">
                <h2 className="font-semibold text-[18px]">
                  AI Enhances Your Look
                </h2>
                <p className="text-[15px] text-gray-700">
                  Our AI retouches your image automatically for perfect lighting
                  and balance.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              initial="hiddenUp"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl md:w-[30%] w-[90%] sm:w-[45%] xl:w-[20%] h-fit shadow-lg p-[20px] flex flex-col gap-y-[20px] justify-center items-center bg-blue-500/20 hover:scale-[1.05] transition-transform duration-500"
            >
              <div className="w-full h-[10em] rounded-2xl shadow-lg overflow-hidden border border-white">
                <img
                  src="/image/user6.jpg"
                  alt="Centered image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full h-fit flex flex-col gap-y-[7px]">
                <h2 className="font-semibold text-[18px]">
                  Download Instantly
                </h2>
                <p className="text-[15px] text-gray-700">
                  Your new professional headshots are ready within minutes to
                  download.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
