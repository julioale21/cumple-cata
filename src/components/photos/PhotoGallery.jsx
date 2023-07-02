import React from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselItems,
} from "chakra-framer-carousel";
import { Toolbar } from './Toolbar';
import Card from './Card';

const PhotoGallery = ({ images }) => {
  return (
    <Carousel>
        <CarouselItems>
            {images.map((image, index) => {
                return (
                    <CarouselItem index={index} key={image}>
                        <Card index={index} image={image} />
                    </CarouselItem>
                );
            })}
        </CarouselItems>
        <Toolbar />
    </Carousel >
  )
}

export default PhotoGallery