import { Variants } from 'framer-motion';

export const svgVariants: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.1,
    rotate: -10,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    scale: 1,
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    transformOrigin: 'left end',
  },
};
