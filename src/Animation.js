export const introLoaderContainer = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const introLoaderChildren = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 1.6,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      ease: "linear",
      duration: 1.5,
    },
  },
};

export const introLoaderMain = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.6,
    },
  },
};

export const navBar = {
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

export const navBarItems = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export const navMenuContainer = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: "-50%",
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut",
      duration: 0.5,
      delayChildren: 0.4,
    },
  },
  exit: {
    x: "100vw",
  },
};

export const navMenuItems = {
  hidden: {
    opacity: 0,
    y: -16,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
  },
};

export const banner = {
  show: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const bannerText = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  infinite: {
    y: [0, 30],
    transition: {
      delay: 1,
      ease: "easeIn",
      yoyo: Infinity,
    },
  },
};

export const bannerTextMain = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const arrow = {
  show: {
    y: 30,
    transition: {
      ease: "easeIn",
      yoyo: Infinity,
      duration: 0.65,
    },
  },
};

export const rightAnimation = {
  hidden: {
    x: "60vw",
  },
  show: {
    x: 0,
  },
};

export const leftAnimation = {
  hidden: {
    x: "-60vw",
  },
  show: {
    x: 0,
  },
};

export const scaleAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};
