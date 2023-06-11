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
        <Image position="absolute" right={0} height="100%" width={[600, 1000, 1000]} objectFit={["cover", "contain"]} src="./map-mundi-bg.webp" />
        <Stack position={'absolute'} width="100%" height="100%">
          <Box width="100%" height="100%">
            <Stack paddingX={50} marginTop={[10, 0]}>
              <Text fontWeight="extrabold" color="black" fontSize={["4xl","6xl"]}>Flight with me</Text>
              <Text fontWeight="extrabold" color="black" fontSize={["xl","2xl"]}>Come to my party</Text>
            </Stack>

            <Tabs size={['xs', 'sm', 'md']} variant='enclosed' marginTop={[10, 100]} marginBottom={0} width={['100%',750]} height={400}>
              <TabList>
                <Tab padding={2} fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Information</Tab>
                <Tab padding={2} fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Menssages</Tab>
                <Tab padding={2} fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Check In</Tab>
                <Tab padding={2}  fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Flight Status</Tab>
              </TabList>

              <TabPanels bg="blue.900" width="100%" height={[450, "100%"]}>

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
