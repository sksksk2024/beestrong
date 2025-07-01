import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type carouselProps = {
  isAlimenteModal: boolean;
  isVestimentareModal: boolean;
  handleAlimenteModal: (isAlimenteModal: boolean) => void;
  handleVestimentareModal: (isVestimentareModal: boolean) => void;
};

const ProductCarousel = ({
  isAlimenteModal,
  isVestimentareModal,
  handleAlimenteModal,
  handleVestimentareModal,
}: carouselProps) => {
  return (
    <section
      id="bg"
      className="flex justify-center items-center absolute w-[99dvw] z-50"
    >
      <div
        onClick={
          !isVestimentareModal
            ? () => handleAlimenteModal(!isAlimenteModal)
            : () => handleVestimentareModal(!isVestimentareModal)
        }
        className="absolute overflow-hidden -inset-y-40 bg-black w-[100dvw] opacity-100 h-[300px] -z-10"
      ></div>

      <Carousel
        opts={{
          align: 'start',
        }}
        orientation="horizontal"
        className="z-50 w-full max-w-xs relative -translate-y-1/2 pt-8"
      >
        <button
          onClick={
            !isVestimentareModal
              ? () => handleAlimenteModal(!isAlimenteModal)
              : () => handleVestimentareModal(!isVestimentareModal)
          }
          className="z-50 bg-white px-2 w-6 absolute top-0 right-0"
        >
          X
        </button>
        <CarouselContent className="w-[400px] h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[66%] max-w-[66%] px-2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
