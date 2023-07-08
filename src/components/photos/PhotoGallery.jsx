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
                    <CarouselItem index={index} key={image.uid || index}>
                        <Card index={index} image={image.url} />
                    </CarouselItem>
                );
            })}
        </CarouselItems>
        <Toolbar visible={ images.length > 1 } />
    </Carousel >
  )
}

export default PhotoGallery