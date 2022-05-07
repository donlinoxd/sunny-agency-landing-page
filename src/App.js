import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import "./styles/styles.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import IntroLoader from "./components/IntroLoader";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    // <IntroLoader setLoading={setLoading} />
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="intro-loader">
            <IntroLoader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <Header />
            <Features />
            <Testimonials />
            <Highlights />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default App;
