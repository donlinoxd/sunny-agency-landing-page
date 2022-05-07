import { useOnVisible } from "../hooks/useOnVisible";
import { leftAnimation, rightAnimation, scaleAnimation } from "../Animation";
import { motion } from "framer-motion";

// IMAGES
import Transform from "../images/mobile/image-transform.jpg";
import StandOut from "../images/mobile/image-stand-out.jpg";
import Photography from "../images/mobile/image-photography.jpg";
import GraphicDesign from "../images/mobile/image-graphic-design.jpg";
import TransformDesktop from "../images/desktop/image-transform.jpg";
import StandOutDesktop from "../images/desktop/image-stand-out.jpg";
import PhotographyDesktop from "../images/desktop/image-photography.jpg";
import GraphicDesignDesktop from "../images/desktop/image-graphic-design.jpg";

const Features = () => {
  const [transformDescRef, transformDescControl] = useOnVisible();
  const [transformImgRef, transformImgControl] = useOnVisible();
  const [standOutDescRef, standOutDescControl] = useOnVisible();
  const [standOutImgRef, standOutImgControl] = useOnVisible();
  const [GraphicDesignRef, GraphicDesignControl] = useOnVisible();
  const [PhotographyRef, PhotographyControl] = useOnVisible();

  return (
    <div className="xl:text-2xl">
      <div className="w-full flex flex-col items-center md:flex-row-reverse overflow-hidden">
        <div ref={transformImgRef} className="w-full md:w-1/2">
          <picture>
            <source media="(min-width: 640px)" srcSet={TransformDesktop} />
            <motion.img
              variants={rightAnimation}
              animate={transformImgControl}
              className="w-full object-cover"
              src={Transform}
              alt="transformn"
            />
          </picture>
        </div>
        <div
          ref={transformDescRef}
          className="w-full md:w-1/2 text-center px-3 py-12 lg:text-left lg:px-16 lg:py-20 xl:px-20 xl:py-24"
        >
          <motion.h3
            variants={leftAnimation}
            animate={transformDescControl}
            className="text-3xl xl:text-4xl font-black font-header text-very-dark-blue"
          >
            Transform your brand
          </motion.h3>
          <motion.p
            variants={leftAnimation}
            animate={transformDescControl}
            className="my-6 xl:my-16 text-dark-gray-blue"
          >
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </motion.p>
          <motion.button
            variants={leftAnimation}
            animate={transformDescControl}
            className="font-bold relative"
          >
            <span
              className="h-2 bg-yellow absolute left-0 bottom-0 w-full rounded-full opacity-50"
              style={{ zIndex: -1 }}
            />
            <a
              className="text-very-dark-blue font-header font-extrabold"
              href="/"
            >
              LEARN MORE
            </a>
          </motion.button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center md:flex-row overflow-hidden">
        <div ref={standOutImgRef} className="w-full md:w-1/2">
          <picture>
            <source media="(min-width: 640px)" srcSet={StandOutDesktop} />
            <motion.img
              variants={leftAnimation}
              animate={standOutImgControl}
              className="w-full object-cover"
              src={StandOut}
              alt="Stand out"
            />
          </picture>
        </div>
        <div
          ref={standOutDescRef}
          className="w-full md:w-1/2 text-center px-3 py-12 lg:text-left lg:px-16 lg:py-20"
        >
          <motion.h3
            variants={rightAnimation}
            animate={standOutDescControl}
            className="text-3xl xl:text-4xl font-black font-header text-very-dark-blue"
          >
            Stand out to the right audience
          </motion.h3>
          <motion.p
            variants={rightAnimation}
            animate={standOutDescControl}
            className="my-4 xl:my-16 text-dark-gray-blue"
          >
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </motion.p>
          <motion.button
            variants={rightAnimation}
            animate={standOutDescControl}
            className="font-bold relative"
          >
            <span
              className="h-2 bg-soft-red absolute left-0 bottom-0 w-full rounded-full opacity-50"
              style={{ zIndex: -1 }}
            />
            <a
              className="text-very-dark-blue font-header font-extrabold"
              href="/"
            >
              LEARN MORE
            </a>
          </motion.button>
        </div>
      </div>

      <div className="md:flex">
        <div ref={GraphicDesignRef} className="relative w-full md:w-1/2">
          <motion.div
            variants={scaleAnimation}
            animate={GraphicDesignControl}
            className="w-full"
          >
            <picture>
              <source
                media="(min-width: 640px)"
                srcSet={GraphicDesignDesktop}
              />
              <img
                className="w-full object-cover"
                src={GraphicDesign}
                alt="Graphic Design"
              />
            </picture>
            <div className="absolute text-dark-cyan bottom-0 left-1/2 w-4/5 transform -translate-x-1/2 text-center h-1/2 flex flex-col py-8 px-0.25 lg:px-12 justify-evenly">
              <h3 className="font-black text-3xl xl:text-4xl font-header">
                Graphic design
              </h3>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </motion.div>
        </div>
        <div ref={PhotographyRef} className="relative w-full md:w-1/2">
          <motion.div
            variants={scaleAnimation}
            animate={PhotographyControl}
            className="w-full"
          >
            <picture>
              <source media="(min-width: 640px)" srcSet={PhotographyDesktop} />
              <img
                className="w-full object-cover"
                src={Photography}
                alt="Photography"
              />
            </picture>
            <div className="absolute text-dark-cyan bottom-0 left-1/2 w-4/5 transform -translate-x-1/2 text-center h-1/2 flex flex-col py-8 px-0.25 lg:px-12 justify-evenly">
              <h3 className="font-black text-3xl xl:text-4xl font-header">
                Photography
              </h3>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
