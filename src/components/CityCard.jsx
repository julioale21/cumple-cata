import React from "react";

import { Card, CardBody, Image, Heading, Text, Stack } from "@chakra-ui/react";

const CityCard = ({ text, title, imageURL }) => {
  return (
    <Card minH={520} maxW="xs" marginBottom={10}>
      <CardBody>
        <Image
          src={imageURL}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          maxHeight={160}
          width="100%"
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading color="blue.700" size="md">
            {title}
          </Heading>
          <Text color="blue.700" fontSize="md" fontWeight="300">
            {text}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export { CityCard };
