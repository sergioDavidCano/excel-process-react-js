import React from "react";
import { motion } from "framer-motion";

export const Animation = (props) => {
  const animations = {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 300, opacity: 0 },
  };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
};
