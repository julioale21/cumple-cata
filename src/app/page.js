'use client'

import CountDownTab from '@/components/tabs/countdown/CountDownTab';
import { InformationTab } from '@/components/tabs/information/InformationTab';
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
import { MessagesTab } from '@/components/tabs/messages/MessagesTab';
import { CityCard } from '@/components/CityCard';

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

            <Tabs size={['xs', 'sm', 'md']} variant='enclosed' marginTop={10} marginBottom={0} width={['100%',750]} height={400}>
              <TabList>
                <Tab padding={2}  fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Flight Status</Tab>
                <Tab padding={2} fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Information</Tab>
                <Tab padding={2} fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Menssages</Tab>
                <Tab padding={2} fontSize={["xs", "unset"]} _selected={{ color:"white", bg:"gray.800"}}>Check In</Tab>
              </TabList>

              <TabPanels bg="blue.900" width="100%" height={[450, "100%"]}>

                <CountDownTab targetDate={targetDate} />
                
                <InformationTab />

                <MessagesTab />
                
                <TabPanel>
                  <p>three!</p>
                </TabPanel>

              </TabPanels>
            </Tabs>

            <Stack alignItems={["center", "flex-start"]} marginBottom={10} width="100%" marginTop={[100, 20]} flexDirection={["column", "row"]}>
              <CityCard 
                title="Paris"
                text=" This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces."
                // imageURL="https://media.istockphoto.com/id/1185953092/es/foto/la-principal-atracci%C3%B3n-de-par%C3%ADs-y-toda-europa-es-la-torre-eiffel-en-los-rayos-de-la-puesta-de.jpg?s=612x612&w=0&k=20&c=Nt1dBmjjHRh3-kUC00ITXgv6LU3pkJD40w5NWPaaySQ="
                imageURL="/cata-01.jpeg"
              />
              <CityCard 
                title="New York"
                text="This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy."
                // imageURL="https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg"
                imageURL="/cata-02.jpeg"
              />
              <CityCard 
                title="Londres"
                text="This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy."
                // imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HE7LHOkKSRYtng11aAtrvwQTdaGPK7lu8OL3e7_AvVIPn3e-1CgpJdLt-4LzjcAPEOA&usqp=CAU"
                imageURL="/cata-03.jpeg"
              />
            </Stack>
          </Box>
        </Stack>
    </Stack>
  )
}
