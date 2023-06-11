import React from "react"
import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box alignItems="center" display="flex" flexDirection="row" justifyContent="center" {...props}>
      <Image width={70} src="/logo.jpeg" />
      <Text fontWeight="extrabold" fontSize="sm" marginLeft={5} color="blue.800">United Party Airline</Text>
    </Box>
  )
}