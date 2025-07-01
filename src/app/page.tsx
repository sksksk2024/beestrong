'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/global/Header';
import img1 from '@/app/favicon.ico';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/motionVariants/motionVariants';
import ProductCarousel from '@/components/global/ProductCarousel';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlimenteModal, setIsAlimenteModal] = useState(false);
  const [isVestimentareModal, setIsVestimentareModal] = useState(false);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isAlimenteModal || isVestimentareModal) {
      setTimeout(() => {
        carouselRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);
    }
  }, [isAlimenteModal, isVestimentareModal]);

  useEffect(() => {
    if (isMenuOpen || isAlimenteModal || isVestimentareModal) {
      document.body.classList.add('bodyClass');
    } else {
      document.body.classList.remove('bodyClass');
    }

    // Clean up on unmount
    return () => document.body.classList.remove('bodyClass');
  }, [isMenuOpen, isAlimenteModal, isVestimentareModal]);

  const handleVestimentareModal = () => {
    setIsVestimentareModal(!isVestimentareModal);
  };

  const handleAlimenteModal = () => {
    setIsAlimenteModal(!isAlimenteModal);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-20">
      {/* Overlay that darkens the content when menu is open */}
      <div
        className={`z-20 fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      {(isAlimenteModal || isVestimentareModal) && (
        <div
          className={`z-20 fixed inset-0 bg-black z-40 w-[100dvw] ${
            isAlimenteModal || isVestimentareModal
              ? 'opacity-75'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={
            isAlimenteModal ? handleAlimenteModal : handleVestimentareModal
          }
        />
      )}

      {/* Sliding Menu */}
      <div
        className={`z-20 fixed top-0 left-0 h-full w-full sm:w-1/4 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <motion.li
              variants={buttonVariants}
              initial="hidden"
              animate="end"
              whileHover="hover"
              className="cursor-pointer"
            >
              Home
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <section
        className={`flex flex-col gap-[20rem] transition-all duration-300 ${
          isMenuOpen ? 'blur-sm' : ''
        }`}
      >
        {/* BG - VIDEO */}
        <div className="z-20 flex flex-col justify-between items-center h-[100dvh]">
          <Header toggleMenu={toggleMenu} />
          <h2>FORTA DIVINA DIRECT DE LA ALBINA</h2>
        </div>

        <div className="flex justify-around items-center px-[1rem]">
          {(isVestimentareModal || isAlimenteModal) && (
            <ProductCarousel
              ref={carouselRef}
              isAlimenteModal={isAlimenteModal}
              isVestimentareModal={isVestimentareModal}
              handleAlimenteModal={handleAlimenteModal}
              handleVestimentareModal={handleVestimentareModal}
            />
          )}
          <Card
            onClick={handleAlimenteModal}
            className="z-20 relative w-[30%] h-[30rem]"
          >
            <Image className="w-[100%]" src={img1} alt="img" />
            <h3 className="absolute left-[1rem] bottom-[2rem] bg-black text-yellow-500 px-[0.5rem]">
              Art Alimentare
            </h3>
          </Card>

          <Card
            onClick={handleVestimentareModal}
            className="z-20 relative w-[30%] h-[30rem]"
          >
            <Image className="w-[100%]" src={img1} alt="img" />
            <h3 className="absolute left-[1rem] bottom-[2rem] bg-black text-yellow-500 px-[0.5rem]">
              Art Vestimentare
            </h3>
          </Card>
        </div>
        <Card className="z-20 relative w-[100%] h-[30rem] m-auto flex justify-center items-center text-5xl font-bold">
          COMMUNITY
        </Card>

        <Card className="z-20 my-[1rem] w-[100%] h-[30rem] m-auto flex flex-row justify-around items-center font-bold px-[1rem] rounded-none">
          <div className="max-w-[14rem] text-center">
            <h4>Livrare</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus molestiae eaque optio veritatis, excepturi non
              laudantium sunt eum cumque illum!
            </p>
          </div>
          <div className="z-20 max-w-[14rem] text-center">
            <h4>Livrare</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus molestiae eaque optio veritatis, excepturi non
              laudantium sunt eum cumque illum!
            </p>
          </div>
          <div className="z-20 max-w-[14rem] text-center">
            <h4>Livrare</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus molestiae eaque optio veritatis, excepturi non
              laudantium sunt eum cumque illum!
            </p>
          </div>
        </Card>

        <footer className="z-20">
          <div className="flex items-center">
            <Image className="w-[10%]" src={img1} alt="img" />
            <span className="font-bold text-3xl">STRONG</span>
          </div>
          <ul className="flex items-center gap-2 ml-4">
            <li className="p-2 bg-black text-yellow-400 w-10">1</li>
            <li className="p-2 bg-black text-yellow-400 w-10">1</li>
            <li className="p-2 bg-black text-yellow-400 w-10">1</li>
            <li className="p-2 bg-black text-yellow-400 w-10">1</li>
          </ul>
          <div className="flex items-center">
            <Image className="w-[4%]" src={img1} alt="img" />
            <span>0719832756</span>
          </div>
          <div className="flex items-center">
            <Image className="w-[4%]" src={img1} alt="img" />
            <span>george.beestrong@gmail.com</span>
          </div>

          <div className="flex justify-between items-center px-[1rem]">
            <Card className="relative w-[30%] h-[30rem]">
              <Image className="w-[100%]" src={img1} alt="img" />
              <h3 className="absolute left-[1rem] bottom-[2rem] bg-black text-yellow-500 px-[0.5rem]">
                Art Alimentare
              </h3>
            </Card>
            <Card className="relative w-[30%] h-[30rem]">
              <Image className="w-[100%]" src={img1} alt="img" />
              <h3 className="absolute left-[1rem] bottom-[2rem] bg-black text-yellow-500 px-[0.5rem]">
                Art Vestimentare
              </h3>
            </Card>
          </div>
        </footer>
      </section>
    </div>
  );
}
