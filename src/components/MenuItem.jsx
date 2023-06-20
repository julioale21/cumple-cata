import React from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text 
          fontWeight="bold" 
          fontSize={['normal', 'xl']}  
          color="blue.900" 
          display="block" 
          {...rest}
        >
          {children}
        </Text>
      </Link>
    )
  }