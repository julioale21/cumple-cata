'use client'

import CountDownTab from '@/components/tabs/CountDownTab';
import { InformationTab } from '@/components/tabs/InformationTab';
import { 
  Stack, 
  Text, 
  Image, 
  Box,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel
} from '@chakra-ui/react';

import { date } from '../constants/common-config';

export default function Home() {

  const targetDate = new Date(date);

  return (
    <Stack 
      height={"100vh"} 
      minW={"100vw"} 
      position={'relative'}
      >
        <Image position="absolute" right={0} height="100%" width={['375px', 1000, 1000]} objectFit="contain" src="./map-mundi-bg.webp" />
        <Stack position={'absolute'} width="100%">
          <Box width="100%" height="100vh">
            <Stack paddingX={50}>
              <Text fontWeight="extrabold" color="black" fontSize="6xl">Flight with us</Text>
              <Text fontWeight="extrabold" color="black" fontSize="2xl">Come to my party</Text>
            </Stack>

            <Tabs size='md' variant='enclosed' marginTop={100} marginBottom={0} width={750} height={400}>
              <TabList>
                <Tab _selected={{ color:"white", bg:"gray.800"}}>Information</Tab>
                <Tab _selected={{ color:"white", bg:"gray.800"}}>Menssages</Tab>
                <Tab _selected={{ color:"white", bg:"gray.800"}}>Check In</Tab>
                <Tab _selected={{ color:"white", bg:"gray.800"}}>Flight Status</Tab>
              </TabList>
              <TabPanels bg="blue.900" width="100%" height="100%">

                <InformationTab />

                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>

                <CountDownTab targetDate={targetDate} />

              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
    </Stack>
  )
}
