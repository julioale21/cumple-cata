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
        paddingY={3}
        bg={"transparent"}
        color={["white", "white", "primary.700", "primary.700"]}
        // border="1px solid gray"
        {...props}
      >
        {children}
      </Flex>
    )
  }