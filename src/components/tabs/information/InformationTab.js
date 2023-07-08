import React from 'react';
import { Image, Stack, TabPanel } from '@chakra-ui/react';

const InformationTab = () => {
  return (
    <TabPanel height="100%">
        <Stack flexDirection="column" justifyContent="center" height="100%">
            <Stack width="100%" gap={5} flexDirection="row" justifyContent="center">
                <Image width={[160, 200]} src='/departure.png'  />
                <Image width={[160, 200]} src='/passenger.png'  />
            </Stack>
            <Stack width="100%" flexDirection="row" justifyContent="center">
                <Image width={470} src='/class.png' />
            </Stack>
            <Stack width="100%" flexDirection="row" justifyContent="center">
                <Image width={420} height={120} src='/ticket.png' />
            </Stack>
        </Stack>
    </TabPanel>
  )
}

export { InformationTab }