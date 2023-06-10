'use client'

import { Stack, Text, Image, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Stack 
      height={"100vh"} 
      minW={"100vw"} 
      position={'relative'}
      >
        {/* <Image src='https://img.freepik.com/premium-photo/cargo-plane-flying-city-dusk-with-sun-setting-background_124507-114458.jpg?w=1060' /> */}
        <Image position="absolute" right={0} height="100%" width={['100%', 900]} objectFit="contain" src="./map-bg.jpeg" />
        <Stack position={'absolute'} width="100%">
          <Box width="100%" height="100vh">
            <Stack paddingX={50}>
              <Text fontWeight="extrabold" color="black" fontSize="6xl">Viajas a algún lado?</Text>
              <Text fontWeight="extrabold" color="black" fontSize="2xl">Ven a mi fiesta</Text>
            </Stack>
            <Stack gap={0} marginTop={100} marginBottom={0} width={700} height={400}>
              <Stack bg="trasparent" flexDirection="row" height={50} width="100%">
                <Stack cursor="pointer" justifyContent="center" alignItems="center" width={120} bg="gray.800">
                  <Text color="white">Información</Text>
                </Stack>
                <Stack cursor="pointer" alignItems="center" justifyContent="center" width={150}>
                  <Text fontWeight="bold" color="black">Mensajes</Text>
                </Stack>
                <Stack cursor="pointer" alignItems="center" justifyContent="center" width={150}>
                  <Text fontWeight="bold" color="black">Ckeck In</Text>
                </Stack>
                <Stack cursor="pointer" alignItems="center" justifyContent="center" width={150}>
                  <Text fontWeight="bold" color="black">Estado del vuelo</Text>
                </Stack>
              </Stack>
              <Stack margin={0} width="100%" height="100%" bg="gray.600">

              </Stack>

            </Stack>
          </Box>
        </Stack>
    </Stack>
  )
}
