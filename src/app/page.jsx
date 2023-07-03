"use client";

import CountDownTab from "@/components/tabs/countdown/CountDownTab";
import { InformationTab } from "@/components/tabs/information/InformationTab";
import {
  Stack,
  Text,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { date } from "../constants/common-config";
import { MessagesTab } from "@/components/tabs/messages/MessagesTab";
import { CityCard } from "@/components/CityCard";

import Lottie from "lottie-react";

import FlightAnimation from "../animations/flight.json";
import TicketsAnimation from "../animations/tickets.json";
import CategoryItem from "@/components/categories/CategoryItem";

export default function Home() {
  const targetDate = new Date(date);

  return (
    <Stack height={"100vh"} minW={"100vw"} position={"relative"}>
      <Lottie
        position="absolute"
        animationData={FlightAnimation}
        loop={false}
      />
      <Stack position={"absolute"} width="100%" height="100%">
        <Box width="100%" height="100%">
          <Stack paddingX={50} marginTop={[10, 0]}>
            <Text
              fontWeight="extrabold"
              color="blue.700"
              fontSize={["4xl", "6xl"]}
            >
              Flight with me
            </Text>
            {/* <Stack gap={5} flexDirection="row">
              <CategoryItem icon="/flight.png" type="Flight" />
              <CategoryItem icon="/hotel.png" type="Hotel" />
              <CategoryItem icon="/car.png" type="Car" />
              <CategoryItem icon="/train.png" type="Train" />
            </Stack> */}
          </Stack>

          <Tabs
            size={["xs", "sm", "md"]}
            variant="enclosed"
            marginTop={10}
            marginBottom={0}
            width={["100%", 750]}
            height={400}
          >
            <TabList>
              <Tab
                padding={2}
                fontSize={["xs", "unset"]}
                _selected={{ color: "white", bg: "gray.800" }}
              >
                Flight Status
              </Tab>
              <Tab
                padding={2}
                fontSize={["xs", "unset"]}
                _selected={{ color: "white", bg: "gray.800" }}
              >
                Information
              </Tab>
              <Tab
                padding={2}
                fontSize={["xs", "unset"]}
                _selected={{ color: "white", bg: "gray.800" }}
              >
                Menssages
              </Tab>
              <Tab
                padding={2}
                fontSize={["xs", "unset"]}
                _selected={{ color: "white", bg: "gray.800" }}
              >
                Check In
              </Tab>
            </TabList>
            {/* 
              <TabPanels bgGradient='linear(to-r, gray.300, blue.400, blue.900)' width="100%" height={[450, "100%"]}> */}

            <TabPanels
              backgroundColor="blue.900"
              width="100%"
              height={[450, "100%"]}
            >
              <CountDownTab targetDate={targetDate} />

              <InformationTab />

              <MessagesTab />

              <TabPanel width="100%">
                <Stack width="100%" flexDirection="column">
                  <Stack
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack width="200px">
                      <Lottie animationData={TicketsAnimation} />
                    </Stack>
                  </Stack>
                  <Stack height={500}>fasdfasdfas</Stack>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Stack
            alignItems={["center", "flex-start"]}
            marginBottom={10}
            width="100%"
            marginTop={[100, 20]}
            flexDirection={["column", "row"]}
          >
            <CityCard
              title="Paris"
              text=" This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces."
              imageURL="/cata-01.jpeg"
            />
            <CityCard
              title="New York"
              text="This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy."
              imageURL="/cata-02.jpeg"
            />
            <CityCard
              title="Londres"
              text="This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy."
              imageURL="/cata-03.jpeg"
            />
          </Stack>

          <Stack
            paddingX={5}
            paddingBottom={50}
            marginBottom={[50]}
            marginTop={[20, 50]}
          >
            <Text fontSize="2xl" fontWeight="bold">
              El destino
            </Text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.955974600666!2d-71.32046392359526!3d-42.91596947114664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961dad5df6bfa259%3A0xfe0d7e14a6c9a5c3!2sAsociaci%C3%B3n%20Sirio%20Libanesa!5e0!3m2!1ses!2sar!4v1687140839144!5m2!1ses!2sar"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
