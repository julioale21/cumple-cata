import React from 'react';
import { Button, Image, Stack, TabPanel, Text } from '@chakra-ui/react';

import { FlightTypeList } from './FlightTypeList';
import { InformationItem } from './InformationItem';
import { FlightClassList } from './InformationClassList';

const InformationTab = () => {
  return (
    <TabPanel height="100%">
        {/* <Stack flexDirection="column" justifyContent="center" height="100%">
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
                <InformationItem title="Passangers" value="2 Adults" width={[310, 250]} />
                <Stack flex={1} flexDirection="row" justifyContent={["flex-end", "center"]}>
                    <Button marginTop={[2, 0]} borderRadius={30} color="white" bg="gray.800">
                        <Text fontSize="xs">Search Flights</Text>
                    </Button >
                </Stack>
            </Stack>
            <FlightClassList marginTop={25} paddingLeft={[0, 50]} justifyContent={["flex-start"]} />
        </Stack> */}
        <Stack flexDirection="column" justifyContent="center" height="100%">
            <Stack width="100%" gap={5} flexDirection="row" justifyContent="center">
                <Image width={[150, 200]} src='/departure.png'  />
                <Image width={[150, 200]} src='/passenger.png'  />
            </Stack>
            <Stack width="100%" flexDirection="row" justifyContent="center">
                <Image width={470} src='/class.png' />
            </Stack>
            <Stack width="100%" flexDirection="row" justifyContent="center">
                <Image width={420} height={150} src='/ticket.png' />
            </Stack>
        </Stack>
    </TabPanel>
  )
}

export { InformationTab }