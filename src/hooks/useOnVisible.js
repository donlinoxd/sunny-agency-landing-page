import { useRef, useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useOnVisible = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    let target = ref.current;

    if (target) {
      observer.observe(target);
    }

    return () => observer.unobserve(target);
  });

  return [ref, controls];
};
