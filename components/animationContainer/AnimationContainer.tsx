"use client";
import { motion } from "motion/react";

interface IContainerProps {
  children: React.ReactNode;
}

const AnimationContainer = ({ children }: IContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
