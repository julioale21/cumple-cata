import React from 'react';
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

const CardMessage = ({ message }) => {
  return (
    <Card maxW='md' maxH={200}>
        <CardHeader>
        <Flex spacing='4'>
            <Flex flex='1' gap={['1','4']} alignItems='center' flexWrap='wrap'>
            <Avatar name={message.name} src='/logo.jpeg' />

            <Box>
                <Heading size='sm'>{message.name}</Heading>
                <Text>{new Date(message.date).toLocaleString('es-AR')}</Text>
            </Box>
            </Flex>
        </Flex>
        </CardHeader>
        <CardBody>
        <Text>
            {message.message}
        </Text>
        </CardBody>
    </Card>
  )
}

export default CardMessage