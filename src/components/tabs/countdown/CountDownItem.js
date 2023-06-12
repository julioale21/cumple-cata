import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

const CountDownItem = ({ value, itemName }) => {
    return (
      <Stack gap={0} flexDirection="column" alignItems="center" justifyContent="center">
        <Text margin={0} paddingY={0} color="white" fontSize={["5xl", "5xl", "8xl"]}>{value}</Text>
        <Text margin={0} color="gray.300" fontSize="sm">{itemName}</Text>
      </Stack>
    )
}

export { CountDownItem }