import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const InformationItem = ({ title, value, width }) => {
    return (
        <Stack color="white" alignItems="center" justifyContent="center" width={350}>
            <Box flexDirection="column" justifyContent="flex-start" width={width}>
                <Text  fontWeight="bold" fontSize={["x-small", "xs"]}>{title}</Text>
                <Stack flexDirection="row" alignItems="center" justifyContent="flex-start">
                    <Text fontSize={['xs', 'unset']} fontWeight="extrabold">{ value }</Text>
                    <ChevronDownIcon />
                </Stack>
            </Box>
        </Stack>
    )
}

export { InformationItem }