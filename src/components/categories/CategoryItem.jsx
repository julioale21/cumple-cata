'use client';

import React from 'react';
import { Image, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

const CategoryItem = ({ width = "60px", height = "60px", icon, type }) => {
  return (
    <Link href='/'>
      <Stack flexDirection="column" alignItems="center" justifyContent="center">
        <Stack 
          justifyContent="center" 
          alignItems="center"
          borderRadius="50%" 
          border="0.5px solid" 
          borderColor="blue.900" 
          bgColor="white" 
          height={height} 
          width={width}
        >
          <Image width="36px" height="29px" src={icon} />
        </Stack>
        <Text fontWeight="bold">{type}</Text>
      </Stack>
    </Link>
  )
}

export default CategoryItem