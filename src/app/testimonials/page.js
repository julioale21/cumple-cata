'use client';

import React, { useEffect, useState } from 'react';

import { MessageService } from '@/services/messageService';
import { 
  Avatar, 
  Box, 
  Card, 
  CardBody, 
  CardHeader, 
  Flex, 
  Heading, 
  Stack, 
  Text 
} from '@chakra-ui/react';

const Testimonials = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      const fetchMessages = async () => {
        const response = await MessageService.getMessages();
        setMessages(response.data);
      }
      fetchMessages();
    }, [])

    if (messages.length === 0) return <Text>Loading...</Text>
    
    return (
        <Stack minHeight="100vh" width="100%">
          {messages.map((message) => (
            <Card maxW='md'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
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
          
          ))}
        </Stack>
    )
}

export default Testimonials