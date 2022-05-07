import { motion } from "framer-motion";
import { navBarItems } from "../Animation";
import { useOnVisible } from "../hooks/useOnVisible";
import Person1 from "../images/image-emily.jpg";
import Person3 from "../images/image-jennie.jpg";
import Person2 from "../images/image-thomas.jpg";

const Testimonials = () => {
  const [emilyTestRef, emilyTestControl] = useOnVisible();
  const [thomasTestRef, thomasTestControl] = useOnVisible();
  const [jennieTestRef, jennieTestControl] = useOnVisible();

  return (
    <div className="py-10">
      <div className="tracking-widest p-4 text-center text-gray-blue text-2xl font-bold font-header">
        <h2>CLIENTS TESTIMONIALS</h2>
      </div>
      <div className="mt-3 text-very-dark-blue md:flex lg:px-16 md:justify-center">
        <motion.div
          ref={emilyTestRef}
          variants={navBarItems}
          animate={emilyTestControl}
          className="flex flex-col justify-center items-center space-y-10 px-4 py-8 text-center max-w-sm mx-auto"
        >
          <img className="rounded-full w-20 h-20" src={Person1} alt="Emily" />
          <p className="font-semibold">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="flex flex-col text-center space-y-1">
            <span className="font-black font-header">Emily R.</span>
            <span className="text-sm text-gray-blue">Marketing Director</span>
          </div>
        </motion.div>
        <motion.div
          ref={thomasTestRef}
          variants={navBarItems}
          animate={thomasTestControl}
          className="flex flex-col items-center space-y-10 px-4 py-8 text-center max-w-sm mx-auto"
        >
          <img className="rounded-full w-20 h-20" src={Person2} alt="Thomas" />
          <p className="font-semibold">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <div className="flex flex-col text-center space-y-1">
            <span className="font-black font-header">Thomas S.</span>
            <span className="text-sm text-gray-blue">
              Chief Operating Officer
            </span>
          </div>
        </motion.div>
        <motion.div
          ref={jennieTestRef}
          variants={navBarItems}
          animate={jennieTestControl}
          className="flex flex-col items-center space-y-10 px-4 py-8 text-center max-w-sm mx-auto"
        >
          <img className="rounded-full w-20 h-20" src={Person3} alt="Jennie" />
          <p className="font-semibold">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="flex flex-col text-center space-y-1">
            <span className="font-black font-header">Jennie F. </span>
            <span className="text-sm text-gray-blue">Business Owner</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
