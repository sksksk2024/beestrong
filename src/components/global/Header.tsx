import React from 'react';
import img1 from '@/app/favicon.ico';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { svgVariants } from '../motionVariants/motionVariants';

type HeaderProps = {
  toggleMenu: () => void;
};

const Header = ({ toggleMenu }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-[1rem] w-full">
      <motion.button
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={toggleMenu}
        className="z-50"
      >
        <Image className="w-10" src={img1} alt="img" />
      </motion.button>

      <h1>BEESTRONG</h1>
      <li>2</li>
    </header>
  );
};

export default Header;
