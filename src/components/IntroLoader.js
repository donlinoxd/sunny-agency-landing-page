import { motion } from "framer-motion";
import {
  introLoaderChildren,
  introLoaderContainer,
  introLoaderMain,
} from "../Animation";

import MainIntroImgDesktop from "../images/desktop/image-header.jpg";
import MainIntroImgMobile from "../images/mobile/image-header.jpg";
import IntroImgMobile1 from "../images/mobile/image-transform.jpg";
import IntroImgMobile2 from "../images/mobile/image-graphic-design.jpg";
import IntroImgMobile3 from "../images/mobile/image-gallery-sugar-cubes.jpg";
import IntroImgMobile4 from "../images/mobile/image-photography.jpg";

const IntroLoader = ({ setLoading }) => {
  return (
    <motion.div
      key="loader"
      variants={introLoaderContainer}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      // className="intro-loader-container"
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      style={{
        width: `${
          window.innerWidth > 1024
            ? "65%"
            : window.innerWidth > 768
            ? "80%"
            : "95%"
        }`,
        padding: `${window.innerWidth > 1024 ? "10% 0" : "20% 0"}`,
      }}
    >
      <motion.div className="relative w-3/4" variants={introLoaderMain}>
        <div className="h-52 w-full overflow-hidden relative md:h-auto">
          <picture className="w-full">
            <source media="(min-width: 640px)" srcSet={MainIntroImgDesktop} />
            <motion.img
              className="w-full object-cover absolute bottom-0 left-0 md:relative"
              layoutId="animate"
              src={MainIntroImgMobile}
              alt="Header"
            />
          </picture>
        </div>
      </motion.div>
      <motion.img
        style={{ left: "5%", bottom: "3%" }}
        className={`absolute ${window.innerWidth > 1024 ? "w-1/5" : "w-1/4"}`}
        variants={introLoaderChildren}
        src={IntroImgMobile1}
        alt="Header"
      />
      <motion.img
        style={{ right: "4%", top: "4%" }}
        className={`absolute ${window.innerWidth > 1024 ? "w-1/5" : "w-1/4"}`}
        variants={introLoaderChildren}
        src={IntroImgMobile2}
        alt="Header"
      />
      <motion.img
        style={{ right: 0, bottom: 0 }}
        className={`absolute ${window.innerWidth > 1024 ? "w-1/5" : "w-1/4"}`}
        variants={introLoaderChildren}
        src={IntroImgMobile3}
        alt="Header"
      />
      <motion.img
        style={{ left: 0, top: 0 }}
        className={`absolute ${window.innerWidth > 1024 ? "w-1/5" : "w-1/4"}`}
        variants={introLoaderChildren}
        src={IntroImgMobile4}
        alt="Header"
      />
    </motion.div>
  );
};

export default IntroLoader;
