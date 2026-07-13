import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

// Typing this explicitly as 'Variants' resolves the generic array widening issue
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95, 
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1], // TypeScript now correctly contextually types this as a cubic-bezier tuple
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95, 
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1], // TypeScript now correctly contextually types this as a cubic-bezier tuple
    },
  },
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full flex flex-col items-start justify-center py-6 text-left"
    >
      {children}
    </motion.div>
  );
}