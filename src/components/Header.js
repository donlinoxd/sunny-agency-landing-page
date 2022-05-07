import { motion } from "framer-motion";
import { banner, bannerText, bannerTextMain, arrow } from "../Animation";
import HeaderImgMobile from "../images/mobile/image-header.jpg";
import HeaderImgDesktop from "../images/desktop/image-header.jpg";
import { useState } from "react";

const Header = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <motion.div
      variants={banner}
      initial="hidden"
      animate="show"
      className="relative"
      onAnimationComplete={() => setIsComplete(true)}
    >
      <div className="w-full flex absolute top-1/4 flex-col items-center text-center px-8">
        <motion.h1 className="text-3xl lg:text-5xl xl:text-6xl mb-10 text-white inline-block font-header font-black tracking-widest">
          <div className="inline-block">
            {[..."WE"].map((letter, index) => (
              <motion.span
                variants={bannerText}
                key={index}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}{" "}
            {[..."ARE"].map((letter, index) => (
              <motion.span
                variants={bannerText}
                key={index}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}{" "}
          </div>
          <div className="ml-4 inline-block">
            {[..."CREATIVES"].map((letter, index) => (
              <motion.span
                variants={bannerTextMain}
                key={index}
                className={`inline-block ${
                  isComplete &&
                  "text-dark-blue transition ease-in-out duration-1000"
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>
        {isComplete && (
          <motion.svg
            variants={arrow}
            className="block"
            width="36"
            height="114"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#FFF"
              stroke-width="6"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </motion.svg>
        )}
      </div>
      <picture>
        <source media="(min-width: 640px)" srcSet={HeaderImgDesktop} />
        <motion.img layoutId="animate" src={HeaderImgMobile} alt="Header" />
      </picture>
    </motion.div>
  );
};

export default Header;
