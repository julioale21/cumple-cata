import { Flex } from '@chakra-ui/react';
import React from 'react';

export const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        paddingX={8}
        paddingY={1}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }