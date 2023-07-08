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
  Image,
} from "@chakra-ui/react";

import { date } from "../constants/common-config";
import { MessagesTab } from "@/components/tabs/messages/MessagesTab";
import { CityCard } from "@/components/CityCard";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

import FlightAnimation from "../animations/flight.json";

import { cityCardsData } from "../constants/city-cards-data";
import { oswald } from "../utils/fonts";

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

            <TabPanels
              backgroundColor="blue.900"
              width="100%"
              height={[370, "100%"]}
            >
              <CountDownTab targetDate={targetDate} />

              <InformationTab />

              <MessagesTab />

              <TabPanel
                height="100%"
                justifyContent="center"
                alignItems="center"
                display="flex"
                width="100%"
              >
                <Stack
                  alignItems="center"
                  justifyContent="space-around"
                  height="100%"
                  width="100%"
                  flexDirection="column"
                >
                  <Text
                    className={oswald.className}
                    fontSize="2xl"
                    fontWeight="extrabold"
                    textAlign="center"
                    color="gray.300"
                  >
                    I have a special place for you
                  </Text>
                  <Image src="/seats.jpeg" minHeight={250} />
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Stack
            marginBottom={10}
            flexWrap="wrap"
            width="100%"
            marginTop={[50, 20]}
          >
            <Text
              fontWeight="extrabold"
              color="blue.700"
              textAlign={["center", "start"]}
              mb={3}
              fontSize={["3xl", "5xl"]}
            >
              Mis destinos soñados
            </Text>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <Stack
                  alignItems={["center", "flex-start"]}
                  flexWrap="wrap"
                  width="100%"
                  flexDirection={["column", "row"]}
                >
                  {cityCardsData.map((cityCard, index) => (
                    <CityCard
                      key={index}
                      title={cityCard.title}
                      text={cityCard.text}
                      imageURL={cityCard.imageURL}
                    />
                  ))}
                </Stack>
              </motion.div>
            </AnimatePresence>
          </Stack>

          <Stack
            paddingX={5}
            paddingBottom={50}
            marginBottom={[50]}
            marginTop={[20, 50]}
          >
            <Text fontSize="2xl" fontWeight="extrabold" color="blue.700">
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
