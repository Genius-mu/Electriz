import {
  CalendarDays,
  File,
  Linkedin,
  Mail,
  PanelTopClose,
  PhoneOutgoing,
  Target,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 Add this import

const Banner = () => {
  return (
    <>
      <section className="g_parent bg-white mt-[6em] overflow-hidden">
        {/* 🎬 Parent slide-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 60 }} // start slightly below
          animate={{ opacity: 1, y: 0 }} // slide up to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bgImg parent pt-[6%] sm:pl-[10px] sm:pr-[10px] pl-[10px] pr-[10px] mb-[3em] pb-[3%] bg-purple-500 rounded-2xl flex-col gap-y-[4em]"
        >
          {/* 🎬 Text area slides from bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full flex items-center justify-center flex-col gap-y-[10px]"
          >
            <p className="xl:pl-[1%] xl:pr-[1%] xl:pt-[.5%] xl:pb-[.5%] md:pl-[2%] md:pr-[2%] md:pt-[1%] md:pb-[1%] pl-[4%] pr-[4%] pt-[2%] pb-[2%] bg-white/40 rounded-3xl border-1 shadow-lg border-white text-[13px] sm:text-[15px] font-semibold text-white shad">
              Used by professionals in 100+ countries
            </p>
            <h2 className="xl:max-w-[600px] sm:text-4xl md:text-5xl sm:max-w-[500px] text-center xl:text-6xl font-semibold text-white shad">
              Get Your Professional Headshots in Minutes
            </h2>
            <p className="max-w-[400px] text-white xl:text-xl text-center shad sm:text-[14px] md:text-[15px]">
              Look confident and professional - All headshots delivered in under
              20 minutes, no studio needed.
            </p>
            <span className="w-fit sm:p-[.7%] p-[1%] bg-white/40 rounded-[15px] border-1 border-white shadow-lg">
              <Link
                to=""
                className="pt-[3%] pb-[3%] pl-[20px] pr-[20px] shadow-lg rounded-[10px] bg-blue-700 text-white shad flex justify-center items-center hover:bg-blue-600 transition ease-[ease-in-out] duration-[.3s]"
              >
                Create Headshots Now →
              </Link>
            </span>
          </motion.div>

          {/* 🎬 Images slide from the sides */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-3 xl:gap-x-[2%]"
          >
            <div className="w-[90%] sm:w-[45%] md:w-[30%] xl:w-[20%] h-[15em] rounded-2xl shadow-lg overflow-hidden border-2 border-white">
              <img
                src="/image/user1.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-[90%] sm:w-[45%] md:w-[30%] xl:w-[20%] h-[15em] rounded-2xl shadow-lg overflow-hidden border-2 border-white">
              <img
                src="/image/user6.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-[90%] sm:w-[45%] md:w-[30%] xl:w-[20%] h-[15em] rounded-2xl shadow-lg overflow-hidden border-2 border-white">
              <img
                src="/image/user3.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-[90%] sm:w-[45%] md:w-[30%] xl:w-[20%] h-[15em] rounded-2xl shadow-lg overflow-hidden border-2 border-white">
              <img
                src="/image/user4.jpg"
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* 🎬 Links slide up last */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="parent flex-col gap-y-[1em]"
          >
            {/* Social link groups */}
            <span className="flex gap-x-[10px] w-full justify-center items-center flex-wrap gap-2">
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <Linkedin
                  size={19}
                  className="bg-blue-600 rounded p-[3px]"
                  fill="#fff"
                  strokeWidth={0}
                />
                LinkedIn
              </Link>
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <PanelTopClose size={17} />
                Teams
              </Link>
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <Twitter
                  size={17}
                  className="bg-blue-600 rounded p-[3px]"
                  fill="#fff"
                  strokeWidth={0}
                />
                Tweeter
              </Link>
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <PhoneOutgoing size={14} strokeWidth={3} />
                Zoom
              </Link>
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <CalendarDays size={14} strokeWidth={3} />
                Business Cards
              </Link>
            </span>
            <span className="flex gap-x-[10px] w-full justify-center items-center flex-wrap gap-2">
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] flex justify-center items-center gap-x-[5px] text-blue-600 hover:bg-white/70 transition text-[14px] sm:text-[14px]"
              >
                <File
                  size={20}
                  className="text-blue-600 rounded p-[3px]"
                  strokeWidth={3}
                />
                CV/Resume
              </Link>
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <Mail size={17} strokeWidth={2} />
                Email Signature
              </Link>
              <Link
                to=""
                className="bg-white shad2 rounded-3xl sm:pt-[.5%] sm:pb-[.5%] sm:pl-[2%] sm:pr-[2%] font-semibold pt-[1%] pb-[1%] pl-[3%] pr-[3%] font-semibold flex justify-center items-center gap-x-[5px] text-blue-600 text-[14px] sm:text-[14px] hover:bg-white/70 transition"
              >
                <Target size={14} strokeWidth={3} />
                Social Media
              </Link>
            </span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Banner;

{
  /* <div className="min-h-screen flex items-center justify-center bg-blue-600 text-white text-4xl font-bold">
      Tailwind is Working 🎉
    </div> */
}
