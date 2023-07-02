import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';

import {
    useCarouselItem,
} from "chakra-framer-carousel";

const Card = ({image, index}) => {
    const { numberOfSlides, onClickHandler, position } = useCarouselItem();
    const isCenter = position === "center";
    return (
        <Flex
        boxSize={isCenter ? "400px" : "300px"}
        pos="relative"
        boxShadow="lg"
        as="button"
        onClick={onClickHandler}
        >
        <Flex
            borderRadius="full"
            bg="whiteAlpha.400"
            p={2}
            left={2}
            top={2}
            position="absolute"
        >
            <Text>{`${index + 1}/${numberOfSlides}`}</Text>
        </Flex>
    
        <Image
            src={image}
            boxSize={isCenter ? "400px" : "300px"}
            objectFit="cover"
            objectPosition="center center"
            borderRadius={10}
            _hover={{
            scale: 1.1
            }}
        />
        </Flex>
    );

}

export default Card