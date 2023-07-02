import React from 'react';

import { Button, Flex, HStack } from "@chakra-ui/react";
import { useCarousel } from "chakra-framer-carousel";

export const Toolbar = () => {
  const { onNext, onPrevious } = useCarousel();
  return (
    <Flex mt={5} w="full" justify="center">
      <HStack>
        <Button
          colorScheme="blue"
          variant="outline"
          w="115px"
          onClick={onPrevious}
        >
          Previous
        </Button>
        <Button colorScheme="blue" variant="outline" w="115px" onClick={onNext}>
          Next
        </Button>
      </HStack>
    </Flex>
  );
};
