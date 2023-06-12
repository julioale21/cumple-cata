import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const Option = ({ value, selected = false }) => {
  return (
    <Box 
        display="flex" 
        bg={selected ? "gray.800" : "gray.600"} 
        width={[70,100]} 
        border={`${selected ? '2px solid black' : '2px solid white'}`} 
        padding={[1, 2]} 
        borderRadius={[20, 25]} 
        justifyContent="center" 
        alignItems="center"
        >
        <Text fontWeight="bold" fontSize="x-small" color={"white"}>{value}</Text>
    </Box>
  )
}

export  { Option }
