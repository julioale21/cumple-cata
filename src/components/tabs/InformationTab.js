import React from 'react';
import { Box, Button, Stack, TabPanel, Text } from '@chakra-ui/react';

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

const FlightTypeList = ({ ...rest }) => {
    return (
        <Stack paddingLeft={3} flexDirection="row" { ...rest } >
            <Option value="One Way" selected />
            <Option value="Round Trip" />
        </Stack>
    )
}

const FlightClassList = ({ ...rest }) => {
    return (
        <Stack paddingLeft={5} flexDirection="row" { ...rest }>
            <Option value="Economy" />
            <Option value="Business" />
            <Option value="First Class" selected />
        </Stack>
    )
}

const InformationTab = () => {
  return (
    <TabPanel height="100%">
        <Stack flexDirection="column" justifyContent="center" height="100%">
            <FlightTypeList marginBottom={25} paddingLeft={[0, 50]} justifyContent={"flex-start"} />
            <Stack marginBottom={5} flexDirection="row" justifyContent="space-around">
                <InformationItem title="Flight to:" value="Catalina Ramirez Party" width={[150, 250]} />
                <InformationItem title="Destination:" value="25 de Mayo Street, Number 369" width={[150, 350]} />
            </Stack>
            <Stack marginBottom={5} flexDirection="row" justifyContent="space-around">
                <InformationItem title="Departure Date:" value="Saturday 22nd July 2023" width={[150, 250]} />
                <InformationItem title="Boarding time:" value="21 HS (GMT-3)" width={[150, 350]} />
            </Stack>
            <Stack flexDirection={["column", "row"]}>
                <InformationItem title="Passangers" value="2 Adults" width={[330, 250]} />
                <Stack flex={1} flexDirection="row" justifyContent={["flex-end", "center"]}>
                    <Button marginTop={[2, 0]} borderRadius={30} color="white" bg="gray.800">
                        <Text fontSize="xs">Search Flights</Text>
                    </Button >
                </Stack>
            </Stack>
            <FlightClassList marginTop={25} paddingLeft={[0, 50]} justifyContent={["flex-start"]} />
        </Stack>
    </TabPanel>
  )
}

export { InformationTab }