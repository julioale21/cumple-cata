"use client";
import React from 'react';
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const CardMessage = ({ message }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2}}
        whileHover={{ scale: 1.1 }}
      >
        <Card  maxW='xl'>
            <CardHeader>
              <Flex spacing='4'>
                  <Flex flex='1' gap={['1','4']} alignItems='center' flexWrap='wrap'>
                  <Avatar name={message.name} />
                    <Box>
                        <Heading size='sm'>{message.name}</Heading>
                        <Text fontWeight="light" fontSize="xs">{new Date(message.date).toLocaleString('es-AR')}</Text>
                    </Box>
                  </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
            <Text fontSize="lg" fontFamily="DauphinPlain" >
                {message.message}
            </Text>
            </CardBody>
        </Card>
    </motion.div>
    </AnimatePresence>
    
    
  )
}

export default CardMessage