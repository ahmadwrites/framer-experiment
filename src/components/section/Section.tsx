"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import classes from "./Section.module.css";

interface SectionProps {
  title: string;
  highlight?: string[];
}

/* 
  Should be scroll based, so no moment of "blank" canvas. The opacity of the text
  should be based on the scroll position. The more I scroll, the more faded out it should get.
  Eventually new sentence should fade in and replace it. Essentially it's just a scroll based 
  fade in / fade for text or other elements. Thanks Mr Pidaus for the help!
*/
const Section: React.FC<SectionProps> = ({ title, highlight = [] }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.7 } },
    hidden: { opacity: 0, y: 0, transition: { duration: 0.3 } },
  };

  const highlightedVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 0, transition: { duration: 0.3 } },
  };

  const words = title.split(" ").map((word, index) => {
    const isHighlighted = highlight.includes(word);
    return (
      <React.Fragment key={index}>
        <motion.span
          className={isHighlighted ? classes.highlighted : classes.word}
          variants={isHighlighted ? highlightedVariants : variants}
          initial="hidden"
          animate={controls}
        >
          {word}
        </motion.span>{" "}
      </React.Fragment>
    );
  });

  return (
    <div ref={ref} className={classes.section}>
      <h1 className={classes.title}>{words}</h1>
    </div>
  );
};

export default Section;
