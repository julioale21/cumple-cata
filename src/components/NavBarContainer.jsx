import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Eagle_Lake } from "next/font/google";

const eagle = Eagle_Lake({ subsets: ['latin'], weight: "400" });

export const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        className={eagle.className}
        justify="space-between"
        wrap="wrap"
        w="100%"
        paddingX={10}
        paddingY={1}
        backgroundColor="transparent"
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }