import React from "react"
import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box 
      paddingY={3} 
      alignItems="center" 
      display="flex" 
      flexDirection="row" 
      justifyContent="center" 
      {...props}
    >
      <Image width={[50]} src="/logo.jpeg" />
      <Text fontSize={["md", "xl"]} fontWeight="extrabold" marginLeft={5} color="blue.800">Party Airline</Text>
    </Box>
  )
}